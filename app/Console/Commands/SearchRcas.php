<?php

namespace App\Console\Commands;

use App\Models\File;
use App\Models\Rca;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SearchRcas extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'search:rcas';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Busca nuevos archivos RCAs de POPs en zonas protegidas e inserta el registro en la tabla de RCAs';

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
        $rcas = File::with('site.pop', 'pop.sites')->whereHas('folder', function($q) {
            $q->where('name', 'Gestión Ambiental')
            ->orWhere('name', 'LIKE', '%RCA%');
        })
        ->where('filename', 'LIKE', '%RCA%')
        ->get();

        foreach ($rcas as $rca) {
            Rca::insertOrIgnore([
                [
                    'pop_id' => $rca->pop_id,
                    'title' => $rca->filename,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);
        }
        
    }
}
