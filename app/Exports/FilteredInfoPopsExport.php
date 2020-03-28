<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class FilteredInfoPopsExport implements WithMultipleSheets
{
    use Exportable;

	protected $request;
    
    public function __construct(object $request)
    {
        $this->request = $request;
    }

    /**
     * @return array
     */
    public function sheets(): array
    {
        $sheets = [];

        $sheets[] = new FilteredPopsExport($this->request);
        $sheets[] = new FilteredSitesExport($this->request);

        return $sheets;
    }
}
