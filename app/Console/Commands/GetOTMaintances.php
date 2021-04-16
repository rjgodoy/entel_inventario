<?php

namespace App\Console\Commands;

use App\Models\OTTmpTaskLog;
use Illuminate\Console\Command;
use App\Models\GeneratorsPlatformGenerator;
use App\Models\GeneratorsPlatformOTMaintance;
use App\Models\GeneratorsPlatformMaintanceType;
use App\Models\GeneratorsPlatformMaintanceStatus;

class GetOTMaintances extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:otmaintances';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Trae las mantenciones a los sitios desde OfficeTrack';

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
        $maintances = OTTmpTaskLog::orderBy('StatusDate', 'desc')->limit(50000)->chunk(1000, function($otMaintances) {
            foreach ($otMaintances as $value) {
                $generator = GeneratorsPlatformGenerator::where('mobile_code', $value->CustomerName)->orWhere('fixed_code', $value->CustomerName)->first();

                if ($generator) {

                    $maintance_type_id = 0;
                    $maintance_type = GeneratorsPlatformMaintanceType::where('name', $value->TaskTypeName)->first();
                    if ($maintance_type) {
                        $maintance_type_id = $maintance_type->id;
                    } else if ($value->TaskTypeName != null) {
                        $maintance_type_id = GeneratorsPlatformMaintanceType::create([
                            'name' => $value->TaskTypeName
                        ])->id;     
                    } else {
                        $maintance_type_id = null;
                    }

                    $maintance_statuses_id = 0;
                    $maintance_status = GeneratorsPlatformMaintanceStatus::where('code', $value->Status)->first();
                    if ($maintance_status) {
                        $maintance_statuses_id = $maintance_status->id;
                    } else if ($value->Status != null) {
                        $maintance_statuses = GeneratorsPlatformMaintanceStatus::create([
                            'code' => $value->Status
                        ]);
                        $maintance_statuses_id = $maintance_statuses->first()->id;
                    } else {
                        $maintance_type_id = null;
                    }

                    GeneratorsPlatformOTMaintance::insertOrIgnore([
                        [
                            'description' => $value->Description,
                            'created' => $value->StatusDate,
                            'generator_id' => $generator->id,
                            'maintance_type_id' => $maintance_type_id,
                            'task_number' => $value->TaskNumber,
                            'maintance_statuses_id' => $maintance_statuses_id
                        ]
                    ]);
                }
            }
            // dd('Done!');
        });

    }
}
