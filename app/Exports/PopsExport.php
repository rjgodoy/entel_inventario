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
    protected $text;
    protected $selectedIds;

	protected $core;
    protected $crm_id;
    protected $zona_id;

    protected $critic;
    protected $vip;
    protected $pe_3g;
    protected $mpls;
    protected $olt;
    protected $olt_3play;
    // protected $red_minima;
    protected $lloo;
    protected $ranco;
    protected $bafi;
    protected $offgrid;
    protected $solar;
    protected $eolica;
    protected $alba_project;
    protected $protected_zone;
    
    public function __construct(object $request)
    {
        $this->text = $request->text ? $request->text : 0;
        $this->selectedIds = $request->selectedIds ? $request->selectedIds : [];

        $this->core = $request->core ? $request->core : 0;
        $this->crm_id = $request->crm_id ? $request->crm_id : 0;
        $this->zona_id = $request->zona_id ? $request->zona_id : 0;

        $this->critic = $request->critic ? $request->critic : 0;
        $this->vip = $request->vip ? $request->vip : 0;
        $this->pe_3g = $request->pe_3g ? $request->pe_3g : 0;
        $this->mpls = $request->mpls ? $request->mpls : 0;
        $this->olt = $request->olt ? $request->olt : 0;
        $this->olt_3play = $request->olt_3play ? $request->olt_3play : 0;
        // $this->red_minima = $request->red_minima_n1;
        $this->lloo = $request->lloo ? $request->lloo : 0;
        $this->ranco = $request->ranco ? $request->ranco : 0;
        $this->bafi = $request->bafi ? $request->bafi : 0;
        $this->offgrid = $request->offgrid ? $request->offgrid : 0;
        $this->solar = $request->solar ? $request->solar : 0;
        $this->eolica = $request->eolica ? $request->eolica : 0;
        $this->alba_project = $request->alba_project ? $request->alba_project : 0;
        $this->protected_zone = $request->protected_zone ? $request->protected_zone : 0;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        if ($this->selectedIds) {
            $popsIds = [];
            $ids = $this->selectedIds;
            foreach ($ids as $id) {
                array_push($popsIds, $id);
            }
            $pop = Pop::whereIn('id', $popsIds)->get();
        } else {
            $text = $this->text;

            $condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
            $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
            $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

            $condition_critic = $this->critic ? 'criticity = 1' : 'criticity IS NOT NULL';
            // $condition_red_minima = 
            //     $request->red_minima_n1 && $request->red_minima_n2 ? 'sites.red_minima IN (1,2)' : 
            //     ($request->red_minima_n1 ? 'sites.red_minima = 1' : 
            //         ($request->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
            //     );

            // POP
            $condition_pe_3g = 'pops.pe_3g IN ('.$this->pe_3g.' ,1)';
            $condition_mpls = 'pops.mpls IN ('.$this->mpls.',1)';
            $condition_olt = 'pops.olt IN ('.$this->olt.',1)';
            $condition_olt_3play = 'pops.olt_3play IN ('.$this->olt_3play.',1)';
            $condition_vip = 'pops.vip IN ('.$this->vip.',1)';
            $condition_lloo = 'pops.localidad_obligatoria IN ('.$this->lloo.',1)';
            $condition_ranco = 'pops.ranco IN ('.$this->ranco.',1)';
            $condition_bafi = 'pops.bafi IN ('.$this->bafi.',1)';
            $condition_offgrid = 'pops.offgrid IN ('.$this->offgrid.',1)';
            $condition_solar = 'pops.solar IN ('.$this->solar.',1)';
            $condition_eolica = 'pops.eolica IN ('.$this->eolica.',1)';
            $condition_protected_zone = 'pops.protected_zone IN ('.$this->protected_zone.',1)';
            $condition_alba_project = 'pops.alba_project IN ('.$this->alba_project.',1)';

            $pop = Pop::with('comuna.zona.crm', 'sites.classification_type')
                ->whereHas('sites', function($q) use($text, $condition_core) { 
                    $q->where(function($p) use($text) {
                        $p->where(function($w) use($text) {
                            if ($text) {
                                $w->whereIn('site_type_id', [1,3,4])
                                ->where('state_id', 1)
                                ->where(function($r) use($text) {
                                    $r->where('sites.nem_site', 'LIKE', "%$text%")
                                    ->orWhere('sites.nombre', 'LIKE', "%$text%");
                                });
                            } else {
                                $w->whereIn('site_type_id', [1,3,4])
                                ->where('state_id', 1);
                            }
                        })
                        ->orWhere(function($s) use($text) {
                            if ($text) {
                                $s->whereIn('site_type_id', [2])
                                ->whereHas('technologies', function($r) {
                                    $r->where('state_id', 1);
                                })
                                ->where(function($q) use($text) {
                                    $q->where('sites.nem_site', 'LIKE', "%$text%")
                                    ->orWhere('sites.nombre', 'LIKE', "%$text%");
                                });
                            } else {
                                $s->whereIn('site_type_id', [2])
                                ->whereHas('technologies', function($r) {
                                    $r->where('state_id', 1);
                                });
                            }
                        });
                    })
                    ->whereRaw($condition_core);
                })
                ->whereHas('rooms', function($r) use($condition_critic) {
                    $r->whereRaw($condition_critic);
                })
                ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                    $q->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
                })
                ->whereRaw($condition_pe_3g)
                ->whereRaw($condition_mpls)
                ->whereRaw($condition_olt)
                ->whereRaw($condition_olt_3play)
                ->whereRaw($condition_vip)
                ->whereRaw($condition_lloo)
                ->whereRaw($condition_ranco)
                ->whereRaw($condition_bafi)
                ->whereRaw($condition_offgrid)
                ->whereRaw($condition_solar)
                ->whereRaw($condition_eolica)
                ->whereRaw($condition_protected_zone)
                ->whereRaw($condition_alba_project)
                ->orderBy('pops.id', 'asc')
                ->get();
        }

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
