<?php

namespace App\Exports;

use App\Models\Site;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class SitesExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
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
            $site = Site::whereIn('pop_id', $popsIds)->get();
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

            $site = Site::with('classification_type', 'attention_priority_type')
            	->where(function($p) use($text) {
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
                ->whereRaw($condition_core)
    	        ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
    	            $q->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
    	        })
                ->whereHas('pop.rooms', function($r) use($condition_critic) {
                    $r->whereRaw($condition_critic);
                })
                ->whereHas('pop', function($s) use($condition_pe_3g, $condition_mpls, $condition_olt, $condition_olt_3play, $condition_vip, $condition_lloo, $condition_ranco, $condition_bafi, $condition_offgrid, $condition_solar, $condition_eolica, $condition_protected_zone, $condition_alba_project) {
                    $s->whereRaw($condition_pe_3g)
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
                    ->whereRaw($condition_alba_project);
                })
                ->orderBy('pop_id', 'asc')
    	        ->get();
        }

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
