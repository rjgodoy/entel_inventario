<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformTtaController extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.tta_controllers';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformTtaController::class, 'tta_controller_id');
    }
}
