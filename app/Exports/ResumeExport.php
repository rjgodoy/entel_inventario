<?php

namespace App\Exports;

use App\Models\Pop;
// use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
// use Maatwebsite\Excel\Concerns\ShouldAutoSize;
// use Maatwebsite\Excel\Concerns\WithHeadings;
// use Maatwebsite\Excel\Concerns\WithMapping;

// use Maatwebsite\Excel\Concerns\FromArray;
// use Maatwebsite\Excel\Concerns\Exportable;
// use Maatwebsite\Excel\Concerns\WithColumnFormatting;
// use Maatwebsite\Excel\Concerns\WithCustomStartCell;
// use Maatwebsite\Excel\Concerns\WithEvents;
// use Maatwebsite\Excel\Concerns\RegistersEventListeners;
// use Maatwebsite\Excel\Events\BeforeExport;
// use Maatwebsite\Excel\Events\BeforeWriting;
// use Maatwebsite\Excel\Events\BeforeSheet;
// use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithDrawings;

// use PhpOffice\PhpSpreadsheet\Shared\Date;
// use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class ResumeExport implements WithTitle, WithDrawings
{
	// use Exportable;

    // /**
    // * @return \Illuminate\Support\Collection
    // */
    // public function collection()
    // {
    //     return Pop::all();
    // }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Resumen';
    }

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('Inventario O&M Infraestructura');
        $drawing->setPath(public_path('img/iconografia/entel-logo.png'));
        $drawing->setHeight(90);
        $drawing->setCoordinates('B3');

        return $drawing;
    }
}
