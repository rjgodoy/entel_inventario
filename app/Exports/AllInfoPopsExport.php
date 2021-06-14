<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\BeforeExport;

class AllInfoPopsExport implements WithMultipleSheets, WithEvents
{
	use Exportable, RegistersEventListeners;

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
        // $sheets[] = new ResumeExport($this->request);

        if($this->request->resume) {
            $sheets[] = new PopResumeExport($this->request);
        }
        
        if($this->request->pops) {
            $sheets[] = new PopsExport($this->request);
        }

        if($this->request->sites) {
            $sheets[] = new SitesExport($this->request);
        }

        return $sheets;
    }

    public static function beforeExport(BeforeExport $event)
    {
        $event->writer->getProperties()->setTitle('Inventario PoP y Sitios Entel');
        $event->writer->getProperties()->setCreator('Subgerencia de Infraestructura Poder y Clima');
    }
}
