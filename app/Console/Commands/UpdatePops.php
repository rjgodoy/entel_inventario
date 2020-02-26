<?php

namespace App\Console\Commands;

use App\Mail\PopsUpdated;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

use App\Pop;
use App\Site;
use App\SolutionType;
use Carbon\Carbon;

class UpdatePops extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:pops';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualiza la tabla de pops con los datos pop de RAN con el código de planificación como key.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        // All Data
        $pretData = \DB::table('entel_pops.pretPops')
            ->join('entel_pops.comunas', 'pretPops.comuna', '=', 'comunas.nombre_comuna')
            ->join('entel_pops.states', 'pretPops.ran_device_status', '=', 'states.state')
            ->leftJoin('entel_pops.solution_types', 'pretPops.tipo_solucion', '=', 'solution_types.solution_type')
            ->whereRaw('
                pretPops.alias NOT IN ("TBD", "EV001", "alias") 
                AND pretPops.alias NOT IN (SELECT sites.nem_site FROM entel_pops.sites)
            ')
            ->select(
                'pretPops.pop_e_id',
                'pretPops.ran_device_name',
                'comunas.id as comuna_id',
                'pretPops.lat_wgs84',
                'pretPops.lon_wgs84',
                'pretPops.lat_wgs84',
                'pretPops.lon_wgs84',
                'pretPops.alias',
                'pretPops.ran_device_status',
                'pretPops.ran_device_type',
                'solution_types.id as solution_type_id',
                'states.id as state_id'
            )
            // ->groupBy('pretPops.alias')
            ->get();

        foreach ($pretData as $newPop) {

            // Insert POP
            $pop = Pop::insertOrIgnore([
                [
                    'pop_e_id' => $newPop->pop_e_id, 
                    'nombre' => $newPop->ran_device_name, 
                    'comuna_id' => $newPop->comuna_id, 
                    'latitude' => $newPop->lat_wgs84, 
                    'longitude' => $newPop->lon_wgs84, 
                    'latitude_b' => $newPop->lat_wgs84, 
                    'longitude_b' => $newPop->lon_wgs84,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);

            // Insert Sites
            $site = Site::insertOrIgnore([
                [
                    'pop_id' => Pop::where('pop_e_id', $newPop->pop_e_id)->first()->id, 
                    'nem_site' => $newPop->alias, 
                    'nombre' => $newPop->ran_device_name, 
                    'site_type_id' => Str::startsWith($newPop->alias, 'RP') ? 5 : (Str::startsWith($newPop->alias, 'SW') ? 3 : 2),
                    'solution_type_id' => $newPop->solution_type_id, 
                    'site_class_type_id' => Str::startsWith($newPop->alias, 'RP') ? 4 : (Str::startsWith($newPop->alias, 'SW') ? 7 : ($newPop->ran_device_type == 'RBS' ? 3 : 6)),
                    'state_id' => $newPop->state_id,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);

            // Insert Technologies
            // $technology_type_id = TechnologyType::join('pretCeldas', function($query) use ($newPop) {
            //     $query->on('pretCeldas.rat_type', '=', 'technology_types.technology_type')
            //         ->where('pretCeldas.ran_device_id', $newPop->ran_device_id);
            //     })->first()->id;

            // $technology = Technology::updateOrInsert(
            //     [
            //         'site_id' => Site::where('nem_site', $newPop->alias)->first()->id, 
            //         'nem_tech' => $newPop->ran_device_id,
            //         'nombre' => $newPop->ran_device_name, 
            //         'technology_type_id' => $technology_type_id,
            //         'frecuency' => \DB::table('pretCeldas')->where('ran_device_id', $newPop->ran_device_id)->first()->id, 
            //         'created_at' => Carbon::now(),
            //         'updated_at' => Carbon::now()
            //     ],
            //     [
            //         'state_id' => $newPop->state_id,
            //     ]
            // );
        }


        $totalPops = \DB::table('entel_pops.pops')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $totalSites = \DB::table('entel_pops.sites')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $counter = collect([
            'totalPops' => $totalPops, 
            'totalSites' => $totalSites,
        ]);

        Mail::to('proyectosinfraestructura@entel.cl')->send(new PopsUpdated($counter));
    }
}
