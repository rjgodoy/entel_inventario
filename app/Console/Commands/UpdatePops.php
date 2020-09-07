<?php

namespace App\Console\Commands;

use App\Imports\JunctionsImport;
use App\Mail\PopsUpdated;
use App\Models\Pop;
use App\Models\Room;
use App\Models\Site;
use App\Models\State;
use App\Models\Technology;
use App\Models\TechnologyType;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

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
        $aessData = \DB::table('entel_pops.aess_cells')
            ->join('entel_pops.comunas', 'aess_cells.comuna', '=', 'comunas.nombre_comuna')
            ->join('entel_pops.technology_types', 'aess_cells.rat_type', '=', 'technology_types.type')
            ->join('entel_pops.states', 'aess_cells.ran_device_status', '=', 'states.state')
            ->leftJoin('entel_pops.solution_types', 'aess_cells.tipo_solucion', '=', 'solution_types.solution_type')
            ->whereRaw('
                aess_cells.pop_e_id IS NOT NULL AND aess_cells.pop_m_id NOT IN ("TBD", "EV001")
            ')
            ->select(
                'technology_types.id as technology_type_id',
                'aess_cells.frequency',
                'aess_cells.ran_device_id',
                'states.id as ran_device_status_id',
                'aess_cells.ran_device_name',
                'aess_cells.pop_m_id',
                'aess_cells.pop_m_status',
                'solution_types.id as solution_type_id',
                'aess_cells.pop_e_id',
                'aess_cells.pop_name',
                'aess_cells.lat_wgs84',
                'aess_cells.lon_wgs84',
                'comunas.id as comuna_id',
                'aess_cells.address',
                'aess_cells.zona_fdt',
                'aess_cells.lloo700', 
                'aess_cells.lloo2600'               
            )
            ->get();

        foreach ($aessData as $newPop) {

            // Insert POP
            $pop = Pop::insertOrIgnore([
                [
                    'pop_e_id' => $newPop->pop_e_id, 
                    'nombre' => $newPop->pop_name, 
                    'direccion' => $newPop->address, 
                    'comuna_id' => $newPop->comuna_id, 
                    'latitude' => $newPop->lat_wgs84, 
                    'longitude' => $newPop->lon_wgs84, 
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);

            // Insert Site
            $site = Site::withTrashed()->updateOrCreate(
                [
                    'nem_site' => $newPop->pop_m_id
                ],
                [
                    'pop_e_id' => $newPop->pop_e_id,
                    'pop_id' => Pop::withTrashed()->where('pop_e_id', $newPop->pop_e_id)->first()->id, 
                    'nombre' => $newPop->pop_name, 
                    'site_type_id' => 2,
                    'solution_type_id' => $newPop->solution_type_id, 
                    'site_class_type_id' => 6,
                    'state_id' => $newPop->pop_m_status ? State::where('state', $newPop->pop_m_status)->first()->id : 1,
                    'zona_fdt' => $newPop->zona_fdt ? $newPop->zona_fdt : 0,
                    'lloo700' => $newPop->lloo700 ? $newPop->lloo700 : 0,
                    'lloo2600' => $newPop->lloo2600 ? $newPop->lloo2600 : 0,
                    'localidad_obligatoria' => $newPop->lloo700 || $newPop->lloo2600 ? 1 : 0
                ]
            );

            // Insert Technologies
            $technology = Technology::withTrashed()->updateOrCreate(
                [
                    'nem_tech' => $newPop->ran_device_id 
                ],
                [
                    'site_id' => Site::withTrashed()->where('nem_site', $newPop->pop_m_id)->first()->id, 
                    'ran_device_name' => $newPop->ran_device_name,
                    'technology_type_id' => $newPop->technology_type_id,
                    'frequency' => $newPop->frequency,
                    'state_id' => $newPop->ran_device_status_id
                ]
            );
        }

        // Insert Room
        $popsWORoom = Pop::doesntHave('rooms');
        foreach ($popsWORoom as $pop) {
            Room::create([
                'pop_id' => $pop->id,
                'name' => 'Sala 1.1',
                'criticity' => 0,
                'order' => 0
            ]);
        }

        $sitesDeleted = Site::where('state_id', 2)->get();
        foreach ($sitesDeleted as $site) {
            $site->delete();
        }

        $technologiesDeleted = Technology::where('state_id', 2)->get();
        foreach ($technologiesDeleted as $technology) {
            $technology->delete();
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

        if($totalPops || $totalSites || $totalTechnologies) {
            Mail::to('proyectosinfraestructura@entel.cl')->send(new PopsUpdated($counter));
        }
    }
}
