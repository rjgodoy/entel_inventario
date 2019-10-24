<?php

namespace App\Exports;

use App\Pop;
use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\WithHeadings;
// use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithMapping;
// use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
// use PhpOffice\PhpSpreadsheet\Worksheet\Drawing

class PopsExport implements FromCollection, WithHeadings, ShouldAutoSize, 
                        // WithColumnFormatting, 
                        WithCustomStartCell, 
                        WithMapping,
                        WithEvents
                        // WithDrawings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
    	$pop_data = Pop::all();
        return $pop_data;
    }

    /**
     * @return array
     */
    public function map($pop_data): array
    {
        return [
            $pop_data->id,
            $pop_data->nem_fijo,
            $pop_data->nem_movil,
            $pop_data->cod_planificacion,
            $pop_data->nombre,
            $pop_data->direccion,
            $pop_data->comuna->nombre,
            $pop_data->comuna->region->cod_region,
            $pop_data->comuna->region->nombre,
            $pop_data->comuna->zona->cod_zona,
            $pop_data->comuna->zona->nombre,
            $pop_data->comuna->zona->crm->nombre,
            $pop_data->latitude,
            $pop_data->longitude,

            // $pop_data->classification ? $pop_data->classification->type : '',
            // $pop_data->category ? $pop_data->category->type : '',
            // $pop_data->attention_priority ? $pop_data->attention_priority->type : '',

            // $pop_data->pop_classes->first() ? $pop_data->pop_class->first()->pop_class_type->type : '',
            // // $pop_data->pop_types->first() ? $pop_data->pops->first()->pop_type->type : '',
            // $pop_data->sites->first() ? $pop_data->sites->first()->site_type->type : '',
            // $pop_data->nets->first() ? $pop_data->nets->first()->net_type->type : '',

            // $pop_data->transports->first() ? $pop_data->transports->first()->transport_type->type : '',
            // // $pop_data->containers->first() ? $pop_data->history_container_types->first()->container_type->container_type : '',
            // $pop_data->derivations->first() ? $pop_data->derivations->first()->derivation_type->type : '',
            // $pop_data->coverages->first() ? $pop_data->coverages->first()->coverage_type->type : '',
            // // $pop_data->towers->first() ? $pop_data->history_tower_types->first()->tower_type->tower_type : '',

            // $pop_data->dependencies->first()->quantity,
            // $pop_data->autonomy->first()->theoretical,
            // $pop_data->threshold->first()->limit,

            $pop_data->pe_3g ? 'SI' : 'NO',
	        $pop_data->mpls ? 'SI' : 'NO',
	        $pop_data->olt ? 'SI' : 'NO',
	        $pop_data->olt_3play ? 'SI' : 'NO',
	        $pop_data->core ? 'SI' : 'NO',
	        $pop_data->red_minima_n1 ? 'SI' : 'NO',
	        $pop_data->red_minima_n2 ? 'SI' : 'NO',
	        $pop_data->vip ? 'SI' : 'NO',
	        $pop_data->localidad_onligatoria ? 'SI' : 'NO',
	        $pop_data->ranco ? 'SI' : 'NO',
	        $pop_data->bafi ? 'SI' : 'NO',
	        $pop_data->offgrid ? 'SI' : 'NO',
	        $pop_data->solar ? 'SI' : 'NO',
	        $pop_data->eolica ? 'SI' : 'NO',
	        $pop_data->condiciones_ambientales ? 'SI' : 'NO'  
		];
	}

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID POP',
	        'NEM FIJO',
	        'NEM MOVIL',
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
	        // 'TIPO SITIO',
	        // 'TIPO RED',

	        // 'TIPO TRANSPORTE',
	        // // 'TIPO CONTENEDOR',
	        // 'TIPO DERIVACION',
	        // 'TIPO COBERTURA',
	        // // 'TIPO TORRE',

         //    'DEPENDENCIAS',
         //    'AUTONOMIA NOMINAL',
         //    'UMBRAL',

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
	        // 'GESTION RECONECTADOR',
	        'CONDICIONES AMBIENTALES',
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
    public function registerEvents(): array
    {
        return [
            BeforeExport::class  => function(BeforeExport $event) {
                $event->writer->setCreator('Subgerencia de Infraestructura Poder y Clima');
            },
            AfterSheet::class    => function(AfterSheet $event) {

            	// Set font to 12
            	$event->sheet->getDelegate()->getStyle('A1:AH10000')->getFont()->setSize(12);

            	// Set second row to height 30
                // $event->sheet->getDelegate()->getRowDimension(2)->setRowHeight(30);

                // $event->sheet->setCellValue('B2', 'LISTADO DE POP');
                // $event->sheet->getDelegate()->getStyle('B2')->getFont()->setSize(24);

                $event->sheet->getDelegate()->mergeCells('A1:N1');
                $event->sheet->setCellValue('A1', 'DATOS DEL POP');
                $event->sheet->getStyle('A1')->getFill()
          					->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
          					->getStartColor()->setARGB('FFEA9C');
                $event->sheet->getStyle('A1')->applyFromArray(
          			[
          				'font' => [
          					// 'name' => 'Arial',
          					// 'bold' => true,
          					// 'italic' => false,
          					// 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
          					'strikethrough' => false,
          					'color' => [
          						'rgb' => '9C5701'
          					]
          				],
          				'alignment' => [
          					'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
          					'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
          					'wrapText' => true,
          				],
          				'quotePrefix'    => true
          			]
          		);


                $event->sheet->getStyle('A2:N2')->getFill()
          					->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
          					->getStartColor()->setARGB('FFEA9C');
          		$event->sheet->getStyle('A2:N2')->applyFromArray(
          			[
          				'font' => [
          					'color' => [
          						'rgb' => '9C5701'
          					]
          				]
          			]
          		);

          		
                // $event->sheet->styleCells(
                //     'A1:N1',
                //     [
                //         'font' => [
                //                 'bold'  => true,
                //                 'color' => ['argb' => '9C5701'],
                //         ]
                //     ]
                //     'O4:Q4',
                //     [
                //         // 'borders' => [
                //         //     'outline' => [
                //         //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                //         //         'color' => ['argb' => 'FFFF0000'],
                //         //     ],
                //         // ]
                //         'cell' => [
                //             'fill' => [
                //                 'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                //                 'color' => ['argb' => 'F4D35E']
                //             ]
                //         ]
                //     ],
                //     'R4:AC4',
                //     [
                //         // 'borders' => [
                //         //     'outline' => [
                //         //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                //         //         'color' => ['argb' => 'FFFF0000'],
                //         //     ],
                //         // ]
                //         'cell' => [
                //             'fill' => [
                //                 'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                //                 'color' => ['argb' => 'F87500']
                //             ]
                //         ]
                //     ]
                // );


                // $cellRange = 'A1:W1'; // All headers
                // $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);

                // Apply array of styles to B2:G8 cell range
                // $styleArray = [
                //     // 'borders' => [
                //     //     'outline' => [
                //     //         'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                //     //         'color' => ['argb' => 'FFFF0000'],
                //     //     ]
                //     // ],
                //     'cell' => [
                //         'fill' => [
                //             'type'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                //             'color' => ['rgb' => '343434']
                //         ]
                //     ]
                // ];
                // $event->sheet->getDelegate()->getStyle('A4:N4')->applyFromArray($styleArray);



                // Set A1:D4 range to wrap text in cells
                // $event->sheet->getDelegate()->getStyle('A1:D4')->getAlignment()->setWrapText(true);
            },
        ];
    }

    /**
     * @return array
     */
    public function startCell(): string
    {
        return 'A2';
    }

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
}
