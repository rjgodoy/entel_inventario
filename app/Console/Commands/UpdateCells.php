<?php

namespace App\Console\Commands;

use App\Imports\CellsImport;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class UpdateCells extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:cells';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Trae los datos de la API de AESS y los guarda en la table aess_cells';

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
        $now = Carbon::now()->isoFormat('YYYYMMDDHHmm');
        $token = 'a3QwEBesPKm9b2f';
        $hash = md5($now.''.$token);
        $url = 'https://aess.entelchile.net/pop_m/all/all/?EXPORT=CSV&v=5&app=analytics&key='.$hash;

        Storage::disk('local')->put('file.csv', fopen($url, 'r'));

        (new CellsImport)->import('file.csv', null, \Maatwebsite\Excel\Excel::CSV);
        
    }
}
