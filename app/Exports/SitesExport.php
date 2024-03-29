<?php

namespace App\Exports;

use App\Models\Site;
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
// use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class SitesExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping, WithEvents
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
    protected $red_minima_n1;
    protected $red_minima_n2;
    protected $lloo;
    protected $ranco;
    protected $bafi;
    protected $offgrid;
    protected $solar;
    protected $eolica;
    protected $turret_type_id;
    protected $protected_zone;

    protected $electric_line;
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
        $this->red_minima_n1 = $request->red_minima_n1 ? $request->red_minima_n1 : 0;
        $this->red_minima_n2 = $request->red_minima_n2 ? $request->red_minima_n2 : 0;
        $this->lloo = $request->lloo ? $request->lloo : 0;
        $this->ranco = $request->ranco ? $request->ranco : 0;
        $this->bafi = $request->bafi ? $request->bafi : 0;
        $this->offgrid = $request->offgrid ? $request->offgrid : 0;
        $this->solar = $request->solar ? $request->solar : 0;
        $this->eolica = $request->eolica ? $request->eolica : 0;
        $this->turret_type_id = $request->turret_type_id ? $request->turret_type_id : 0;
        $this->protected_zone = $request->protected_zone ? $request->protected_zone : 0;

        $this->electric_line = $request->electric_line ? $request->electric_line : 0;
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
            $site = Site::withTrashed()->whereIn('pop_id', $popsIds)->get();
        } else {
            $text = $this->text;

        	$condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
            $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
            $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

            $condition_critic = $this->critic ? 'criticity = 1' : 'criticity IS NOT NULL';
            $condition_red_minima =
                $this->red_minima_n1 && $this->red_minima_n2 ? 'red_minima IN (1,2)' :
                ($this->red_minima_n1 ? 'red_minima = 1' :
                    ($this->red_minima_n2 ? 'red_minima = 2' : 'red_minima IN (0,1,2)')
                );
            $bafi = $this->bafi;
            
            // POP
            $condition_pe_3g = 'pe_3g IN ('.$this->pe_3g.' ,1)';
            $condition_mpls = 'mpls IN ('.$this->mpls.',1)';
            $condition_olt = 'olt IN ('.$this->olt.',1)';
            $condition_olt_3play = 'olt_3play IN ('.$this->olt_3play.',1)';
            // $condition_vip = 'pops.vip IN ('.$this->vip.',1)';
            $condition_lloo = 'localidad_obligatoria IN ('.$this->lloo.',1)';
            $condition_ranco = 'ranco IN ('.$this->ranco.',1)';
            $condition_bafi = $this->bafi ? 'technology_type_id = 3 AND frequency = 3500' : 'technology_type_id != 0';
            $condition_offgrid = $this->offgrid ? 'pops.energy_system_id = 2' : 'pops.energy_system_id IN (1,2) OR pops.energy_system_id IS NULL';
            $condition_solar = 'pops.solar IN ('.$this->solar.',1)';
            $condition_eolica = 'pops.eolica IN ('.$this->eolica.',1)';
            
            $protected_zone = $this->protected_zone;
            $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

            $electric_line = $this->electric_line;
            $condition_electric_lines = 'pops.id IN (SELECT electric_lines.pop_id from entel_g_redes_inventario.electric_lines)';
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

            // $condition_turret_type = $this->turret_type_id != null ? 'pops.current_alba.turret_type_id IS NOT NULL' : 'pops.current_alba.turret_type_id IN (1,2,3) || pops.current_alba.turret_type_id IS NULL';

            $site = Site::withTrashed()->with('pop.comuna', 'pop.zona.crm', 'state', 'classification_type', 'attention_priority_type', 'category_type', 'attention_type',  'pop.current_entel_vip', 'pop.vertical_structures.beacons.beacon_type', 'pop.protected_zones', 'technologies', 'pop.comsites', 'pop.energy_system', 'pop.energy_responsable', 'pop.current_alba.turret_type')
            	->where(function($p) use($text) {
                    if ($text) {
                        $p->where('nem_site', 'LIKE', "%$text%")
                        ->orWhere('nombre', 'LIKE', "%$text%");
                    } else {
                        $p;
                    }
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
    	        ->whereHas('pop.zona', function($q) use($condition_crm, $condition_zona) {
    	            $q->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
    	        })
                ->whereHas('pop.rooms', function($r) use($condition_critic) {
                    $r->whereRaw($condition_critic);
                })
                ->whereHas('pop', function($s) use($condition_offgrid, $condition_solar, $condition_eolica, $condition_protected_zone, $protected_zone, 
                    $condition_electric_lines, $electric_line, $condition_junctions, $junction, $condition_generators, $generator_set, $condition_rectifiers, $power_rectifier, $condition_air_conditioners, $air_conditioner, $condition_vertical_structures, $vertical_structure, $condition_infrastructures, $infrastructure) {
                    $s->whereRaw($condition_offgrid)
                    ->whereRaw($condition_solar)
                    ->whereRaw($condition_eolica)
                    
                    ->where(function($q) use($condition_protected_zone, $protected_zone) {
                        $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
                    })

                    ->where(function($q) use($condition_electric_lines, $electric_line) {
                        $electric_line ? $q->whereRaw($condition_electric_lines) : $q->whereRaw('1 = 1');
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
                    });

                    // ->whereRaw($condition_turret_type);
                })
                ->whereRaw($condition_core)
                ->whereRaw($condition_pe_3g)
                ->whereRaw($condition_mpls)
                ->whereRaw($condition_olt)
                ->whereRaw($condition_olt_3play)
                ->whereRaw($condition_lloo)
                ->whereRaw($condition_ranco)
                ->whereRaw($condition_red_minima)
                ->orderBy('pop_id', 'asc')
                // ->groupBy('pop_id')
    	        ->get();
        }

        return $site;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Sitios';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID SITIO',
	        'NEMONICO',
	        'NOMBRE',

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

            'CLASIFICACION SITIO',
            'PRIORIDAD ATENCION',
            'CATEGORIA PLANIFICACION',
            'TIPO ATENCION TERRENO',
            'TIPO VIP',
            'CATEGORIA VIP',

	        'PE 3G',
	        'MPLS',
	        'OLT',
	        'OLT 3PLAY',
	        'CORE',

            'RED MINIMA',
	        'LOCALIDAD OBLIGATORIA',
	        'RANCO',
	        'BAFI',
            'SISTEMA DE ENERGÍA',
            'RESPONSABLE DE ENERGÍA',

            'TEC 2G 1900',
            'TEC 3G 900',
            'TEC 3G 1900',
            'TEC LTE 700',
            'TEC LTE 1900',
            'TEC LTE 2600',
            'TEC LTE 3500',
            'TEC LTE 5800',

            'ESTADO',

            'AUTONOMIA TEORICA',
            'TIPO TORRERA (ALBA)',
            'Q CONTRATOS COMSITE',
            'Nº CONTRATOS',

            'DEPENDENCIAS'
        ];
    }

    /**
     * @return array
     */
    public function map($site): array
    {
        $bafi = 0;
        $tech_2g1900 = null;
        $tech_3g900 = null;
        $tech_3g1900 = null;
        $tech_4g700 = null;
        $tech_4g1900 = null;
        $tech_4g2600 = null;
        $tech_4g3500 = null;
        $tech_5g5800 = null;

        foreach ($site->technologies as $technology) {
            if($technology->technology_type_id == 1 && $technology->frequency == 1900) {
                $tech_2g1900 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 2 && $technology->frequency == 900) {
                $tech_3g900 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 2 && $technology->frequency == 1900) {
                $tech_3g1900 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 3 && $technology->frequency == 700) {
                $tech_4g700 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 3 && $technology->frequency == 1900) {
                $tech_4g1900 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 3 && $technology->frequency == 2600) {
                $tech_4g2600 = $technology->nem_tech;
            } elseif($technology->technology_type_id == 3 && $technology->frequency == 3500) {
                $tech_4g3500 = $technology->nem_tech;
                $bafi = 1;
            } elseif($technology->technology_type_id == 3 && $technology->frequency == 5800) {
                $tech_5g5800 = $technology->nem_tech;
            }
        }

        $id_comsites = null;
        if ($site->pop->comsites->count()) { 
            foreach ($site->pop->comsites as $comsite) {
                $id_comsites = $id_comsites == null ? $site->pop->comsites->first()->id : $id_comsites.', '.$site->pop->comsites->first()->id;
            }
        }

        $vip_category = "";
        if ($site->pop->current_entel_vip) {
            if ($site->pop->current_entel_vip->category == 0) {
                $vip_category = 0;
            } else {
                $vip_category = $site->pop->current_entel_vip->category;
            }
        }


        return [
            $site->id,
            $site->nem_site,
            $site->nombre,

            $site->pop->id,
            $site->pop->pop_e_id,
            $site->pop->nombre,
            $site->pop->direccion,
            $site->pop->comuna->nombre_comuna,
            $site->pop->comuna->region->cod_region,
            $site->pop->comuna->region->nombre_region,
            $site->pop->zona->cod_zona,
            $site->pop->zona->nombre_zona,
            $site->pop->zona->crm->nombre_crm,
            $site->pop->latitude,
            $site->pop->longitude,

            $site->classification_type->classification_type,
            $site->attention_priority_type->attention_priority_type,
            $site->category_type ? $site->category_type->category_type : null,
            $site->attention_type->attention_type,
            $site->pop->current_entel_vip ? $site->pop->current_entel_vip->vip_category_type->type : '',
            $site->pop->current_entel_vip ? $site->pop->current_entel_vip->category : null,

            $site->pop->pe_3g ? 'SI' : 'NO',
            $site->pop->mpls ? 'SI' : 'NO',
            $site->pop->olt ? 'SI' : 'NO',
            $site->pop->olt_3play ? 'SI' : 'NO',
            $site->classification_type_id == 1 ? 'SI' : 'NO',
            $site->red_minima,
            $site->pop->localidad_obligatoria ? 'SI' : 'NO',
            $site->pop->ranco ? 'SI' : 'NO',
            $bafi ? 'SI' : 'NO',
            $site->pop->energy_system ? $site->pop->energy_system->system : 'PENDIENTE',
            $site->pop->energy_responsable ? $site->pop->energy_responsable->responsable : 'PENDIENTE',

            $tech_2g1900,
            $tech_3g900,
            $tech_3g1900,
            $tech_4g700,
            $tech_4g1900,
            $tech_4g2600,
            $tech_4g3500,
            $tech_5g5800,

            $site->state->state,

            $site->pop->theoretical_autonomy,
            $site->pop->current_alba ? $site->pop->current_alba->turret_type->type : '',
            $site->pop->comsites->count(),
            $id_comsites,

            $site->pop->dependences

  		];
  	}

    // public function columnFormats(): array
    // {
    //     return [
    //         'U' => NumberFormat::FORMAT_DATE_DDMMYYYY,
    //     ];
    // }

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
            'A1:C1',
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
            'D1:O1',
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
                    'color' => ['argb' => 'f79647']
                ]
            ]
        );

        $event->sheet->styleCells(
            'P1:U1',
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
                    'color' => ['argb' => '9cbb59']
                ]
            ]
        );

        $event->sheet->styleCells(
            'V1:AF1',
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
                    'color' => ['argb' => '4bacc6']
                ]
            ]
        );

        $event->sheet->styleCells(
            'AG1:AN1',
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
            'AO1',
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

        $event->sheet->styleCells(
            'AP1:AS1',
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

    }

    // public function columnFormats(): array
    // {
    //     return [
    //         'U' => NumberFormat::FORMAT_NUMBER
    //     ];
    // }
    
}
