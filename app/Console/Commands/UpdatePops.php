<?php

namespace App\Console\Commands;

use App\Mail\PopsUpdated;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

use App\Models\Pop;
use App\Models\Site;
use App\Models\Technology;
use App\Models\TechnologyType;
// use App\Models\SolutionType;
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
                'pretPops.ran_device_id',
                'solution_types.id as solution_type_id',
                'states.id as state_id'
            )
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
            $temp_site = \DB::table('entel_pops.pretPops')->where('pretPops.ran_device_id', $newPop->alias)->first();
            if ($temp_site) {
                $site_name = $temp_site->ran_device_name;
            } else {
                $site_name = $newPop->ran_device_name;
            }

            $site = Site::updateOrCreate(
                [
                    'nem_site' => $newPop->alias
                ],
                [
                    'pop_id' => Pop::where('pop_e_id', $newPop->pop_e_id)->first()->id, 
                    'nombre' => $site_name, 
                    'site_type_id' => Str::startsWith($newPop->alias, 'RP') ? 5 : (Str::startsWith($newPop->alias, 'SW') ? 3 : 2),
                    'solution_type_id' => $newPop->solution_type_id, 
                    'site_class_type_id' => Str::startsWith($newPop->alias, 'RP') ? 4 : (Str::startsWith($newPop->alias, 'SW') ? 7 : ($newPop->ran_device_type == 'RBS' ? 3 : 6)),
                    'state_id' => $newPop->state_id
                ]
            );

            // Insert Technologies
            $technology_type = TechnologyType::join('entel_pops.pretCeldas', function($query) use ($newPop) {
                $query->on('pretCeldas.rat_type', '=', 'technology_types.type')
                    ->where('pretCeldas.ran_device_id', $newPop->ran_device_id);
                })
            ->select('technology_types.id')
            ->first();

            if ($technology_type) {
                $technology = Technology::updateOrCreate(
                    [
                        'nem_tech' => $newPop->ran_device_id 
                    ],
                    [
                        'site_id' => Site::where('nem_site', $newPop->alias)->first()->id, 
                        'ran_device_name' => $newPop->ran_device_name,
                        'technology_type_id' => $technology_type->id,
                        'frequency' => \DB::table('entel_pops.pretCeldas')->where('ran_device_id', $newPop->ran_device_id)->first()->frequency,
                        'state_id' => $newPop->state_id
                    ]
                );
            }
        }


        $totalPops = \DB::table('entel_pops.pops')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $totalSites = \DB::table('entel_pops.sites')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $totalTechnologies = \DB::table('entel_pops.technologies')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $counter = collect([
            'totalPops' => $totalPops, 
            'totalSites' => $totalSites,
            'totalTechnologies' => $totalTechnologies,
        ]);

        Mail::to('proyectosinfraestructura@entel.cl')->send(new PopsUpdated($counter));
    }
}
