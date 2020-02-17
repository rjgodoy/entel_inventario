<?php

namespace App\Console\Commands;

use App\Mail\PopsUpdated;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

// use DB;
// use App\Pop;
// use Carbon\Carbon;

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
        $pretPops = DB::table('entel_pops.pretPops')->join('entel_pops.comunas', 'pretPops.comuna', '=', 'comunas.nombre_comuna')
            ->whereRaw('pretPops.alias NOT IN ("TBD", "EV001", "alias") AND pretPops.ran_device_status NOT IN ("ELIMINADO", "PREVIO")')
            ->select(
                'pretPops.pop_e_id',
                'pretPops.ran_device_name',
                'comunas.id',
                'pretPops.lat_wgs84',
                'pretPops.lon_wgs84',
                'pretPops.lat_wgs84',
                'pretPops.lon_wgs84'
            )
            ->get();

        // foreach ($pretPops as $newPop) {
        //     Pop::insertOrIgnore([
        //         [
        //             'pop_e_id' => $newPop->pop_e_id, 
        //             'nombre' => $newPop->ran_device_name, 
        //             'comuna_id' => $newPop->id, 
        //             'latitude' => $newPop->lat_wgs84, 
        //             'longitude' => $newPop->lon_wgs84, 
        //             'latitude_b' => $newPop->lat_wgs84, 
        //             'longitude_b' => $newPop->lon_wgs84,
        //             'created_at' => Carbon::now(),
        //             'updated_at' => Carbon::now()
        //         ]
        //     ]);
        // }


        $totalPops = \DB::table('entel_pops.pops')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $totalSites = \DB::table('entel_pops.sites')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->count();

        $counters = [$totalPops, $totalSites];

        Mail::to('proyectosinfraestructura@entel.cl')->send(new PopsUpdated($counters));
    }
}
