<?php

namespace App\Exports;

use App\Models\Pop;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;

// use Maatwebsite\Excel\Concerns\FromArray;
// use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
// use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithMapping;
// use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

// use PhpOffice\PhpSpreadsheet\Shared\Date;
// use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
// use PhpOffice\PhpSpreadsheet\Worksheet\Drawing

class PopsExport implements FromCollection, 
                        WithHeadings, 
                        ShouldAutoSize,
                        // WithColumnFormatting, 
                        WithCustomStartCell,
                        WithMapping,
                        // WithEvents,
                        // WithDrawings,
                        WithTitle
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
        $core_condition = $this->core == 0 ? '' : 'AND classification_type_id = 1';

        if ($this->crm_id == 0) {
            $pop = Pop::with('comuna.zona.crm', 'comuna.region')
                ->whereHas('sites', function($q) {
                    $q->where('state_id', 1);
                })->get();
        } elseif ($this->zona_id == 0) {
            $crm_id = $this->crm_id;
            $pop = Pop::with('comuna.zona.crm', 'comuna.region')
                ->whereHas('comuna.zona', function($query) use ($crm_id) {
                    $query->where('crm_id', $crm_id);
                })
                ->whereRaw('state_id = 1 '.$core_condition)
                ->get();
        } else {
            $zona_id = $this->zona_id;
            $pop = Pop::with('comuna.zona.crm', 'comuna.region')
                ->whereHas('comuna', function($query) use ($zona_id) {
                    $query->where('zona_id', $zona_id);
                })
                ->whereRaw('state_id = 1 '.$core_condition)
                ->get();
        }

        return $pop;
    }

    /**
     * @return array
     */
    public function startCell(): string
    {
        return 'A2';
    }

    /**
     * @return array
     */
    public function map($pop): array
    {
        return [
            $pop->id,
            // $pop->nem_fijo,
            // $pop->nem_movil,
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
            // // $pop->pop_types->first() ? $pop->pops->first()->pop_type->type : '',
            // $pop->sites->first() ? $pop->sites->first()->site_type->type : '',
            // $pop->nets->first() ? $pop->nets->first()->net_type->type : '',

            // $pop->transports->first() ? $pop->transports->first()->transport_type->type : '',
            // // $pop->containers->first() ? $pop->history_container_types->first()->container_type->container_type : '',
            // $pop->derivations->first() ? $pop->derivations->first()->derivation_type->type : '',
            // $pop->coverages->first() ? $pop->coverages->first()->coverage_type->type : '',
            // // $pop->towers->first() ? $pop->history_tower_types->first()->tower_type->tower_type : '',

            // $pop->dependencies->first()->quantity,
            // $pop->autonomy->first()->theoretical,
            // $pop->threshold->first()->limit,

            $pop->pe_3g ? 'SI' : 'NO',
  	        $pop->mpls ? 'SI' : 'NO',
  	        $pop->olt ? 'SI' : 'NO',
  	        $pop->olt_3play ? 'SI' : 'NO',
  	        $pop->core ? 'SI' : 'NO',
  	        $pop->red_minima_n1 ? 'SI' : 'NO',
  	        $pop->red_minima_n2 ? 'SI' : 'NO',
  	        $pop->vip ? 'SI' : 'NO',
  	        $pop->localidad_onligatoria ? 'SI' : 'NO',
  	        $pop->ranco ? 'SI' : 'NO',
  	        $pop->bafi ? 'SI' : 'NO',
  	        $pop->offgrid ? 'SI' : 'NO',
  	        $pop->solar ? 'SI' : 'NO',
  	        $pop->eolica ? 'SI' : 'NO',
  	        $pop->gestion_ambiental ? 'SI' : 'NO' ,
            $pop->alba_project ? 'SI' : 'NO' 

  		];
  	}

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
          'ID POP',
	        // 'NEM FIJO',
	        // 'NEM MOVIL',
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

	        // 'CLASIFICACION SITIO',
	        // 'CATEGORIA PLANIFICACION',
	        // 'PRIORIDAD DE ATENCION EN TERRENO',

	        // 'CLASE POP',
	        // 'TIPO POP',

            //    'DEPENDENCIAS',
            //    'AUTONOMIA NOMINAL',

	        'PE 3G',
	        'MPLS',
	        'OLT',
	        'OLT 3PLAY',
	        'CORE',
	        'RED MINIMA N1',
	        'RED MINIMA N2',
	        'VIP',
	        'LOCALIDAD OBLIGATORIA',
	        'RANCO',
	        'BAFI',
	        'OFFGRID',
	        'PANEL SOLAR',
	        'EOLICA',
	        'GESTION AMBIENTAL',
          'PROYECTO ALBA'
	        // 'ACTIVO'
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

    /**
     * @return array
     */
    // public function registerEvents(): array
    // {
    //     return [
    //         BeforeExport::class  => function(BeforeExport $event) {
    //             $event->writer->setCreator('Subgerencia de Infraestructura Poder y Clima');
    //         },
    //         AfterSheet::class    => function(AfterSheet $event) {

    //         	// Set font to 12
    //         	$event->sheet->getDelegate()->getStyle('A1:AH10000')->getFont()->setSize(12);

    //         	// Set second row to height 30
    //             // $event->sheet->getDelegate()->getRowDimension(2)->setRowHeight(30);

    //             // $event->sheet->setCellValue('B2', 'LISTADO DE POP');
    //             // $event->sheet->getDelegate()->getStyle('B2')->getFont()->setSize(24);

    //             $event->sheet->getDelegate()->mergeCells('A1:N1');
    //             $event->sheet->setCellValue('A1', 'DATOS DEL POP');
    //             $event->sheet->getStyle('A1')->getFill()
    //       					->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
    //       					->getStartColor()->setARGB('FFEA9C');
    //             $event->sheet->getStyle('A1')->applyFromArray(
    //       			[
    //       				'font' => [
    //       					// 'name' => 'Arial',
    //       					// 'bold' => true,
    //       					// 'italic' => false,
    //       					// 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
    //       					'strikethrough' => false,
    //       					'color' => [
    //       						'rgb' => '9C5701'
    //       					]
    //       				],
    //       				'alignment' => [
    //       					'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
    //       					'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
    //       					'wrapText' => true,
    //       				],
    //       				'quotePrefix'    => true
    //       			]
    //       		);


    //             $event->sheet->getStyle('A2:N2')->getFill()
    //       					->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
    //       					->getStartColor()->setARGB('FFEA9C');
    //       		$event->sheet->getStyle('A2:N2')->applyFromArray(
    //       			[
    //       				'font' => [
    //       					'color' => [
    //       						'rgb' => '9C5701'
    //       					]
    //       				]
    //       			]
    //       		);

          		
    //             // $event->sheet->styleCells(
    //             //     'A1:N1',
    //             //     [
    //             //         'font' => [
    //             //                 'bold'  => true,
    //             //                 'color' => ['argb' => '9C5701'],
    //             //         ]
    //             //     ]
    //             //     'O4:Q4',
    //             //     [
    //             //         // 'borders' => [
    //             //         //     'outline' => [
    //             //         //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
    //             //         //         'color' => ['argb' => 'FFFF0000'],
    //             //         //     ],
    //             //         // ]
    //             //         'cell' => [
    //             //             'fill' => [
    //             //                 'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
    //             //                 'color' => ['argb' => 'F4D35E']
    //             //             ]
    //             //         ]
    //             //     ],
    //             //     'R4:AC4',
    //             //     [
    //             //         // 'borders' => [
    //             //         //     'outline' => [
    //             //         //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
    //             //         //         'color' => ['argb' => 'FFFF0000'],
    //             //         //     ],
    //             //         // ]
    //             //         'cell' => [
    //             //             'fill' => [
    //             //                 'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
    //             //                 'color' => ['argb' => 'F87500']
    //             //             ]
    //             //         ]
    //             //     ]
    //             // );


    //             // $cellRange = 'A1:W1'; // All headers
    //             // $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);

    //             // Apply array of styles to B2:G8 cell range
    //             // $styleArray = [
    //             //     // 'borders' => [
    //             //     //     'outline' => [
    //             //     //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
    //             //     //         'color' => ['argb' => 'FFFF0000'],
    //             //     //     ]
    //             //     // ],
    //             //     'cell' => [
    //             //         'fill' => [
    //             //             'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
    //             //             'color' => ['rgb' => '343434']
    //             //         ]
    //             //     ]
    //             // ];
    //             // $event->sheet->getDelegate()->getStyle('A4:N4')->applyFromArray($styleArray);



    //             // Set A1:D4 range to wrap text in cells
    //             // $event->sheet->getDelegate()->getStyle('A1:D4')->getAlignment()->setWrapText(true);
    //         },
    //     ];
    // }

    // public function drawings()
    // {
    //     $drawing = new Drawing();
    //     $drawing->setName('Logo');
    //     $drawing->setDescription('This is my logo');
    //     $drawing->setPath(public_path('/iconografia/entel-logo.png'));
    //     $drawing->setHeight(90);
    //     $drawing->setCoordinates('B3');

    //     return $drawing;
 	// }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'POP';
    }
}
