<?php

namespace App\Exports;

use App\Models\Site;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class FilteredSitesExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
{
    protected $core;
    protected $crm_id;
    protected $zona_id;
    
    public function __construct(object $request)
    {
        $this->core = $request->core;
        $this->crm_id = $request->crm_id;
        $this->zona_id = $request->zona_id;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
        $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
        $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

        $site = Site::with('classification_type', 'attention_priority_type')
        	->where(function($q) use ($condition_core) {
	            $q->where(function($w) {
	                $w->whereIn('site_type_id', [1,3,4])
	                ->where('state_id', 1);
	            })->orWhere(function($s) {
	                $s->whereIn('site_type_id', [2])
	                ->whereHas('technologies', function($r) {
	                    $r->where('state_id', 1);
	                });
	            });
	        })
	        ->whereRaw($condition_core)
	        ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
	            $q->whereRaw($condition_crm)->whereRaw($condition_zona);
	        })
	        ->get();

        return $site;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Sites';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID SITE',
            'ID POP',
	        'NEMONICO',
	        'NOMBRE',

	        'CLASIFICACION SITIO',
	        'PRIORIDAD DE ATENCION EN TERRENO',
	        'RED MINIMA',

	        'PE 3G',
	        'MPLS',
	        'OLT',
	        'OLT 3PLAY',
	        'CORE',
	        'LOCALIDAD OBLIGATORIA',
	        'RANCO',
	        'BAFI'

        ];
    }

    /**
     * @return array
     */
    public function map($site): array
    {
        return [
            $site->id,
            $site->pop_id,
            $site->nem_site,
            $site->nombre,

            $site->classification_type->classification_type,
            $site->attention_priority_type->attention_priority_type,
            $site->red_minima,

            $site->pe_3g ? 'SI' : 'NO',
            $site->mpls ? 'SI' : 'NO',
            $site->olt ? 'SI' : 'NO',
            $site->olt_3play ? 'SI' : 'NO',
            $site->classification_type_id ? 'SI' : 'NO',
            $site->localidad_obligatoria ? 'SI' : 'NO',
            $site->ranco ? 'SI' : 'NO',
            $site->bafi ? 'SI' : 'NO',
            

  		];
  	}
}
