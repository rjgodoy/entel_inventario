<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AllInfoPopsExport implements WithMultipleSheets 
{

	use Exportable;

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
     * @return array
     */
    public function sheets(): array
    {
        $sheets = [];

        $sheets[] = new PopsExport($this->core, $this->crm_id, $this->zona_id);
        $sheets[] = new SitesExport($this->core, $this->crm_id, $this->zona_id);

        return $sheets;
    }
}
