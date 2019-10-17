<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comsite extends Model
{
    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function addData($contract_id, $pop_id, $cod_pop, $nombre_pop, $operador, $started_at, $ended_at, $propietario, $celular_propietario, $fono_propietario, $rol_propiedad) {

        $this->create([
            'id' => $contract_id,
            'pop_id' => $pop_id,
            'cod_pop' => $cod_pop,
            'nombre_pop' => $nombre_pop,
            'operador' => $operador,
            'started_at' => $started_at,
            'ended_at' => $ended_at,
            'propietario' => $propietario,
            'celular_propietario' => $celular_propietario,
            'fono_propietario' => $fono_propietario,
            'rol_propiedad' => $rol_propiedad
        ]);
    }
}
