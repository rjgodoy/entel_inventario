<?php

namespace App\Exports;

use App\Models\Pop;
use App\Models\Rca;
use App\Models\TemporaryStorage;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\BeforeSheet;
use Maatwebsite\Excel\Events\BeforeWriting;

// use PhpOffice\PhpSpreadsheet\Shared\Date;
// use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
// use PhpOffice\PhpSpreadsheet\Worksheet\Drawing

class PopsExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping, WithEvents
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
        $this->dashboard = $request->dashboard ? $request->dashboard : 0;
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
        $this->alba_project = $request->alba_project ? $request->alba_project : 0;
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
            $pop = Pop::withTrashed()->whereIn('id', $popsIds)->get();
        } else {
            $text = $this->text;

            $condition_core = $this->core ? 'classification_type_id = '.$this->core : 'classification_type_id != '.$this->core;
            $condition_crm = $this->crm_id != 0 ? 'crm_id = '.$this->crm_id : 'crm_id != '.$this->crm_id;
            $condition_zona = $this->zona_id != 0 ? 'id = '.$this->zona_id : 'id != '.$this->zona_id;

            $condition_critic = $this->critic ? 'criticity = 1' : 'criticity IS NOT NULL';
            $condition_red_minima =
                $this->red_minima_n1 && $this->red_minima_n2 ? 'sites.red_minima IN (1,2)' :
                ($this->red_minima_n1 ? 'sites.red_minima = 1' :
                    ($this->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
                );
            $bafi = $this->bafi;

            // POP
            $condition_pe_3g = 'pops.pe_3g IN ('.$this->pe_3g.' ,1)';
            $condition_mpls = 'pops.mpls IN ('.$this->mpls.',1)';
            $condition_olt = 'pops.olt IN ('.$this->olt.',1)';
            $condition_olt_3play = 'pops.olt_3play IN ('.$this->olt_3play.',1)';
            $condition_vip = 'pops.vip IN ('.$this->vip.',1)';
            $condition_lloo = 'pops.localidad_obligatoria IN ('.$this->lloo.',1)';
            $condition_ranco = 'pops.ranco IN ('.$this->ranco.',1)';
            $condition_bafi = $this->bafi ? 'technology_type_id = 3 AND frequency = 3500' : 'technology_type_id != 0';
            $condition_offgrid = $this->offgrid ? 'pops.energy_system_id = 2' : 'pops.energy_system_id = 2' : 'pops.energy_system_id IN (1,2) OR pops.energy_system_id IS NULL';
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

            $condition_alba_project = 'pops.alba_project IN ('.$this->alba_project.',1)';

            $pop = Pop::with('comuna.zona.crm', 'sites.classification_type', 'sites.attention_priority_type', 'current_entel_vip', 'vertical_structures.beacons.beacon_type', 'protected_zones', 'comsites', 'energy_system', 'energy_responsable')
                ->whereHas('sites', function ($q) use ($text, $condition_core, $condition_bafi, $bafi, $condition_red_minima) {
                    $q->where(function ($p) use ($text) {
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
                    ->whereRaw($condition_core)
                    ->whereRaw($condition_red_minima);
                })

                ->whereHas('rooms', function ($r) use ($condition_critic) {
                    $r->whereRaw($condition_critic);
                })
                ->whereHas('comuna.zona', function ($q) use ($condition_crm, $condition_zona) {
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
                ->whereRaw($condition_offgrid)
                ->whereRaw($condition_solar)
                ->whereRaw($condition_eolica)
                ->whereRaw($condition_alba_project)

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
                })
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

            'VIP',
            'VIP ENTEL',

            'SISTEMA DE ENERGÍA',
            'RESPONSABLE DE ENERGÍA',
            'PANEL SOLAR',
            'EOLICA',
            'BALIZA',
            'ZONA PROTEGIDA',
            'RCA',
            'ZONA ACOPIO TEMPORAL (ZAT)',
            'PROYECTO ALBA',

            'Q CONTRATOS COMSITE',
            'Nº CONTRATOS'
        ];
    }

    /**
     * @return array
     */
    public function map($pop): array
    {
        $temporary_storage = TemporaryStorage::with('pop')->where('zona_id', $pop->comuna->zona_id)->first();
        $rca = Rca::where('pop_id', $pop->id)->first();

        $id_comsites = null;
        if ($pop->comsites->count()) { 
            foreach ($pop->comsites as $comsite) {
                $id_comsites = $id_comsites == null ? $pop->comsites->first()->id : $id_comsites.', '.$pop->comsites->first()->id;
            }
        }

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

            $pop->vip ? 'SI' : 'NO',
            $pop->current_entel_vip ? 'SI' : 'NO',

            $pop->energy_system ? $pop->energy_system->system : 'PENDIENTE',
            $pop->energy_responsable ? $pop->energy_responsable->responsable : 'PENDIENTE',
            $pop->solar ? 'SI' : 'NO',
            $pop->eolica ? 'SI' : 'NO',
            $pop->vertical_structures->first() ? ($pop->vertical_structures->first()->beacons->first() ? $pop->vertical_structures->first()->beacons->first()->beacon_type->type : null) : null,
            $pop->protected_zones->first() ? $pop->protected_zones->first()->cod_zone.' - '.$pop->protected_zones->first()->name : 'NO',
            $rca ? 'SI' : 'NO',
            $temporary_storage ? $temporary_storage->pop->nombre : 'NO TIENE ZAT ASIGNADA',
            $pop->alba_project ? 'SI' : 'NO',

            $pop->comsites->count(),
            $id_comsites

        ];
    }

    /**
     * @return array
     */
    // public function columnFormats(): array
    // {
    //     return [
    //         'H' => NumberFormat::FORMAT_CURRENCY_USD_SIMPLE,
    //         'I' => NumberFormat::FORMAT_CURRENCY_USD_SIMPLE,
    //         'J' => NumberFormat::FORMAT_CURRENCY_USD_SIMPLE,
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

        // $event->sheet->styleCells(
            //     'A1:ZZ1',
            //     [
            //         'font' => [
            //             'size' => 11,
            //             // 'name' => 'Arial',
            //             'bold' => true,
            //             'italic' => false,
            //             // 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
            //             'strikethrough' => false,
            //             // 'color' => ['argb' => '000000']
            //         ],
            //         'alignment' => [
            //             'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            //             'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            //             'wrapText' => true,
            //         ],
            //         // 'borders' => [
            //         //     'outline' => [
            //         //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
            //         //         'color' => ['argb' => 'FFFF0000'],
            //         //     ],
            //         // ],

            //         'fill' => [
            //             'fillType'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
            //             'color' => ['argb' => 'F4D35E']
            //         ]
            //     ]
        // );

        $event->sheet->styleCells(
            'A1:L1',
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
            'M1:N1',
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
            'O1:R1',
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
            'S1:U1',
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
            'V1',
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
            'W1:X1',
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

}
