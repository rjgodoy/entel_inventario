<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AllInfoPopsExport implements WithMultipleSheets 
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

        $sheets[] = new PopsExport($this->request);
        $sheets[] = new SitesExport($this->request);

        return $sheets;
    }
}
