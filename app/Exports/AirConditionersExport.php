<?php

namespace App\Exports;

use App\Models\AirConditioner;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Events\BeforeSheet;
use Maatwebsite\Excel\Events\AfterSheet;

class AirConditionersExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping, WithEvents
{
	use Exportable, RegistersEventListeners;

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

    protected $junction;
    protected $generator_set;
    protected $power_rectifier;
    protected $air_conditioner;
    protected $vertical_structure;
    protected $infrastructure;

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

        $this->junction = $request->junction ? $request->junction : 0;
        $this->generator_set = $request->generator_set ? $request->generator_set : 0;
        $this->power_rectifier = $request->power_rectifier ? $request->power_rectifier : 0;
        $this->air_conditioner = $request->air_conditioner ? $request->air_conditioner : 0;
        $this->vertical_structure = $request->vertical_structure ? $request->vertical_structure : 0;
        $this->infrastructure = $request->infrastructure ? $request->infrastructure : 0;
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
            $airConditioner = AirConditioner::with('pop.comuna.zona.crm', 'pop.sites', 'air_conditioner_brand.air_conditioner_type', 'air_conditioner_condensers', 'air_conditioner_chillers', 'current_consumption')
            ->whereIn('pop_id', $popsIds)
            ->get();
        } else {
            $text = $this->text;

        	$condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
            $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
            $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

            $condition_critic = $this->critic ? 'criticity = 1' : '1 = 1';
            // $condition_red_minima = 
            //     $request->red_minima_n1 && $request->red_minima_n2 ? 'sites.red_minima IN (1,2)' : 
            //     ($request->red_minima_n1 ? 'sites.red_minima = 1' : 
            //         ($request->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
            //     );
            $bafi = $this->bafi;
            
            // POP
            $condition_pe_3g = 'pe_3g IN ('.$this->pe_3g.' ,1)';
            $condition_mpls = 'mpls IN ('.$this->mpls.',1)';
            $condition_olt = 'olt IN ('.$this->olt.',1)';
            $condition_olt_3play = 'olt_3play IN ('.$this->olt_3play.',1)';
            $condition_vip = 'pops.vip IN ('.$this->vip.',1)';
            $condition_lloo = 'localidad_obligatoria IN ('.$this->lloo.',1)';
            $condition_ranco = 'ranco IN ('.$this->ranco.',1)';
            $condition_bafi = $this->bafi ? 'technology_type_id = 3 AND frequency = 3500' : 'technology_type_id != 0';
            $condition_offgrid = 'pops.offgrid IN ('.$this->offgrid.',1)';
            $condition_solar = 'pops.solar IN ('.$this->solar.',1)';
            $condition_eolica = 'pops.eolica IN ('.$this->eolica.',1)';
            
            $protected_zone = $this->protected_zone;
            $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

            $junction = $this->junction;
            $condition_junctions = 'pops.id IN (SELECT junctions.pop_id from entel_g_redes_inventario.junctions)';
            $generator_set = $this->generator_set;
            $condition_generators = 'pops.id IN (SELECT generator_sets.pop_id from entel_g_redes_inventario.generator_sets)';
            $power_rectifier = $this->power_rectifier;
            $condition_rectifiers = 'pops.id IN (SELECT power_rectifiers.pop_id from entel_g_redes_inventario.power_rectifiers)';
            $air_conditioner = $this->air_conditioner;
            $condition_air_conditioners = 'pops.id IN (SELECT air_conditioners.pop_id from entel_g_redes_inventario.air_conditioners)';
            $vertical_structure = $this->vertical_structure;
            $condition_vertical_structures = 'pops.id IN (SELECT vertical_structures.pop_id from entel_g_redes_inventario.vertical_structures)';
            $infrastructure = $this->infrastructure;
            $condition_infrastructures = 'pops.id IN (SELECT infrastructures.pop_id from entel_g_redes_inventario.infrastructures)';

            $condition_alba_project = 'pops.alba_project IN ('.$this->alba_project.',1)';

            $airConditioner = AirConditioner::with('pop.comuna.zona.crm', 'pop.sites', 'air_conditioner_brand.air_conditioner_type', 'air_conditioner_condensers', 'air_conditioner_chillers', 'current_consumption')
            	->whereHas('pop.sites', function($a) use($text, $condition_bafi, $bafi, $condition_core, $condition_pe_3g, $condition_mpls, $condition_olt, $condition_olt_3play, $condition_lloo, $condition_ranco) {
            		$a->where(function($p) use($text, $condition_bafi) {
	                    $p->where(function($w) use($text) {
	                        if ($text) {
	                            $w->whereIn('site_type_id', [1,3,4])
	                            ->where('state_id', 1)
	                            ->where(function($r) use($text) {
	                                $r->where('nem_site', 'LIKE', "%$text%")
	                                ->orWhere('nombre', 'LIKE', "%$text%");
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
	                                $q->where('nem_site', 'LIKE', "%$text%")
	                                ->orWhere('nombre', 'LIKE', "%$text%");
	                            });
	                        } else {
	                            $s->whereIn('site_type_id', [2]);
	                            // ->whereHas('technologies', function($o) {
	                            //     $o->where('state_id', 1);
	                            // });
	                        }
	                    });
	                })
	                ->where(function($q) use($condition_bafi, $bafi) {
	                    if($bafi) {
	                        $q->whereHas('technologies', function($q) use($condition_bafi) {
	                            $q->whereRaw($condition_bafi);
	                        });
	                    } else {
	                        $q->whereRaw('1 = 1');
	                    }
	                })
            		->whereRaw($condition_core)
	                ->whereRaw($condition_pe_3g)
	                ->whereRaw($condition_mpls)
	                ->whereRaw($condition_olt)
	                ->whereRaw($condition_olt_3play)
	                ->whereRaw($condition_lloo)
	                ->whereRaw($condition_ranco);
            	})
    	        ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
    	            $q->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
    	        })
                // ->whereHas('pop.rooms', function($r) use($condition_critic) {
                //     $r->whereRaw($condition_critic);
                // })
                ->whereHas('pop', function($s) use($condition_vip, $condition_offgrid, $condition_solar, $condition_eolica, $condition_protected_zone, $protected_zone, 
                    $condition_junctions, $junction, $condition_generators, $generator_set, $condition_rectifiers, $power_rectifier, $condition_air_conditioners, $air_conditioner, $condition_vertical_structures, $vertical_structure, $condition_infrastructures, $infrastructure, $condition_alba_project) {
                    $s->whereRaw($condition_vip)
                    ->whereRaw($condition_offgrid)
                    ->whereRaw($condition_solar)
                    ->whereRaw($condition_eolica)
                    
                    ->where(function($q) use($condition_protected_zone, $protected_zone) {
                        $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
                    })

                    ->where(function($q) use($condition_junctions, $junction) {
                    $junction ? $q->whereRaw($condition_junctions) : $q->whereRaw('1 = 1');
                    })
                    ->where(function($q) use($condition_generators, $generator_set) {
                        $generator_set ? $q->whereRaw($condition_generators) : $q->whereRaw('1 = 1');
                    })
                    ->where(function($q) use($condition_rectifiers, $power_rectifier) {
                        $power_rectifier ? $q->whereRaw($condition_rectifiers) : $q->whereRaw('1 = 1');
                    })
                    ->where(function($q) use($condition_air_conditioners, $air_conditioner) {
                        $air_conditioner ? $q->whereRaw($condition_air_conditioners) : $q->whereRaw('1 = 1');
                    })
                    ->where(function($q) use($condition_vertical_structures, $vertical_structure) {
                        $vertical_structure ? $q->whereRaw($condition_vertical_structures) : $q->whereRaw('1 = 1');
                    })
                    ->where(function($q) use($condition_infrastructures, $infrastructure) {
                        $infrastructure ? $q->whereRaw($condition_infrastructures) : $q->whereRaw('1 = 1');
                    })

                    ->whereRaw($condition_alba_project);
                })
                ->orderBy('pop_id', 'asc')
    	        ->get();
        }

        return $airConditioner;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Aires Acondicionedos';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID',
            'ID POP',
            'NEMONICO',
	        'NOMBRE POP',
	        'ZONA',
	        'CRM',

	        'TIPO',
            'MARCA',
            'MODELO',
            'CAPACIDAD',
            'NUMERO SERIE',

	        // 'AÑO INSTALACION'

        ];
    }

    /**
     * @return array
     */
    public function map($airConditioner): array
    {

        return [
            $airConditioner->id,
            $airConditioner->pop->id,
            $airConditioner->pop->sites ? $airConditioner->pop->sites[0]->nem_site : null,
            $airConditioner->pop->nombre,
            $airConditioner->pop->comuna->zona->nombre_zona,
            $airConditioner->pop->comuna->zona->crm->nombre_crm,

            $airConditioner->air_conditioner_brand ? $airConditioner->air_conditioner_brand->air_conditioner_type->type : null,
            $airConditioner->air_conditioner_brand ? $airConditioner->air_conditioner_brand->brand : null,
            $airConditioner->air_conditioner_brand ? $airConditioner->air_conditioner_brand->model : null,

            $airConditioner->capacity,
            $airConditioner->serial_number,
            // Carbon::createFromFormat('Y-m-d', $airConditioner->installed_at)->year
  		];
  	}

    public static function beforeExport(BeforeExport $event)
    {
        //
    }

    public static function beforeWriting(BeforeWriting $event)
    {
        //
    }

    public static function beforeSheet(BeforeSheet $event)
    {
        //
    }

    public static function afterSheet(AfterSheet $event) 
    {
        $event->sheet->styleCells(
            'A1:F1',
            [
                'font' => [
                    'size' => 11,
                    // 'name' => 'Arial',
                    'bold' => true,
                    'italic' => false,
                    // 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
                    'strikethrough' => false,
                    'color' => ['argb' => 'FFFFFF']
                ],
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    'wrapText' => true,
                ],
                'fill' => [
                    'fillType'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => '5081bd']
                ]
            ]
        );

        $event->sheet->styleCells(
            'G1:K1',
            [
                'font' => [
                    'size' => 11,
                    // 'name' => 'Arial',
                    'bold' => true,
                    'italic' => false,
                    // 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
                    'strikethrough' => false,
                    'color' => ['argb' => 'FFFFFF']
                ],
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    'wrapText' => true,
                ],
                'fill' => [
                    'fillType'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'c04f4d']
                ]
            ]
        );

    }
}
