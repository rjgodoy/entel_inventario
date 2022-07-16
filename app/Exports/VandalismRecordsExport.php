<?php

namespace App\Exports;

use App\Models\VandalismRecord;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\AfterSheet;

class VandalismRecordsExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping, WithEvents
{
    use Exportable, RegistersEventListeners;

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $record = VandalismRecord::with('site.pop.comuna.region', 'site.pop.zona.crm', 'site.site_type')->get();
        return $record;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Registro de Vandalismos';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Fecha',
            'Región',
            'Zona',
            'Comuna',
            'Dirección',
            'Tipo de Infraestructura',
            'Descripción',
            'Impacto'
        ];
    }

    /**
     * @return array
     */
    public function map($record): array
    {
        $strUnion = $record->site->pop->comuna->region_id != 7 ? "- Region de" : "-";
        $region = $record->site ? $record->site->pop->comuna->region->sigla_region." ".$strUnion." ".$record->site->pop->comuna->region->nombre_region : null;
        return [
            $record->vandalized_at,
            $region,
            $record->site ? strtoupper($record->site->pop->zona->nombre_zona) : null,
            $record->site ? strtoupper($record->site->pop->comuna->nombre_comuna) : null,
            $record->site ? $record->site->pop->direccion : null,
            $record->site ? "Sitio ".$record->site->site_type->site_type.": ".$record->site->nem_site : null,
            $record->description,
            $record->impact
        ];
    }

    public static function afterSheet(AfterSheet $event) 
    {
        $event->sheet->styleCells(
            'A1:H1',
            [
                'font' => [
                    'size' => 11,
                    // 'name' => 'Arial',
                    'bold' => true,
                    'italic' => false,
                    // 'underline' => \PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_DOUBLE,
                    'strikethrough' => false,
                    'color' => ['argb' => '222222']
                ],
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    'wrapText' => true,
                ],
                'fill' => [
                    'fillType'  => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'c8c8c8']
                ]
            ]
        );
    }
}
