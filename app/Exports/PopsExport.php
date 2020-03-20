<?php

namespace App\Exports;

use App\Models\Pop;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PopsExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
{

	protected $core;
    protected $crm_id;
    protected $zona_id;
    
    public function __construct(int $core, int $crm_id, int $zona_id)
    {
        $this->core = $core;
        $this->crm_id = $crm_id;
        $this->zona_id = $zona_id;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        $condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
        $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
        $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

        $pop = Pop::whereHas('sites', function($q) use($condition_core) { 
            $q->where(function($p) {
                $p->where(function($w) {
                    $w->whereIn('site_type_id', [1,3,4])
                    ->where('state_id', 1);
                })
                ->orWhere(function($s) {
                    $s->whereIn('site_type_id', [2])
                    ->whereHas('technologies', function($r) {
                        $r->where('state_id', 1);
                    });
                });
            })
            ->whereRaw($condition_core);
            })
            ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)
                ->whereRaw($condition_zona);
            })
            ->get();

        return $pop;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'POP';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID POP',
	        'COD PLANIFICACION',
	        'NOMBRE',
	        'DIRECCION',
	        'COMUNA',
	        'REGION',
	        'NOMBRE REGION',
	        'COD ZONA',
	        'NOMBRE ZONA',
	        'CRM',
	        'LATITUD',
	        'LONGITUD',

	        'OFFGRID',
	        'PANEL SOLAR',
	        'EOLICA',
	        'GESTION AMBIENTAL',
            'PROYECTO ALBA'
        ];
    }

    /**
     * @return array
     */
    public function map($pop): array
    {
        return [
            $pop->id,
            $pop->pop_e_id,
            $pop->nombre,
            $pop->direccion,
            $pop->comuna->nombre_comuna,
            $pop->comuna->region->cod_region,
            $pop->comuna->region->nombre_region,
            $pop->comuna->zona->cod_zona,
            $pop->comuna->zona->nombre_zona,
            $pop->comuna->zona->crm->nombre_crm,
            $pop->latitude,
            $pop->longitude,

            // $pop->classification_type ? $pop->classification_type->classification_type : '',
            // $pop->category ? $pop->category->type : '',
            // $pop->attention_priority ? $pop->attention_priority->type : '',

            // $pop->pop_classes->first() ? $pop->pop_class->first()->pop_class_type->type : '',
            // $pop->pop_types->first() ? $pop->pops->first()->pop_type->type : '',
            // $pop->sites->first() ? $pop->sites->first()->site_type->type : '',
            // $pop->nets->first() ? $pop->nets->first()->net_type->type : '',

            // $pop->transports->first() ? $pop->transports->first()->transport_type->type : '',
            // // $pop->containers->first() ? $pop->history_container_types->first()->container_type->container_type : '',
            // $pop->derivations->first() ? $pop->derivations->first()->derivation_type->type : '',
            // $pop->coverages->first() ? $pop->coverages->first()->coverage_type->type : '',
            // // $pop->towers->first() ? $pop->history_tower_types->first()->tower_type->tower_type : '',

  	        $pop->offgrid ? 'SI' : 'NO',
  	        $pop->solar ? 'SI' : 'NO',
  	        $pop->eolica ? 'SI' : 'NO',
  	        $pop->gestion_ambiental ? 'SI' : 'NO' ,
            $pop->alba_project ? 'SI' : 'NO' 

  		];
  	}
}
