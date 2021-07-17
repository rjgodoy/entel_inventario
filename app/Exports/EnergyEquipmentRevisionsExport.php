<?php

namespace App\Exports;

use Carbon\Carbon;
use App\Models\EnergyEquipmentRevision;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class EnergyEquipmentRevisionsExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    protected $text;
    protected $crm_id;
    protected $start_date;
    protected $end_date;

    public function __construct(object $request)
    {
        $this->text = $request->text;
        $this->crm_id = $request->crm_id;
        $this->start_date = $request->start_date;
        $this->end_date = $request->end_date;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $text = $this->text;
        $crm_id = $this->crm_id;
        $start_date = $this->start_date;
        $end_date = $this->end_date;
        
        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;

        if($start_date && $end_date) {
            $startDate = new Carbon($start_date);
            $endDate = new Carbon($end_date);
            $startDate = $startDate->isoFormat('YYYY-MM-DD');
            $endDate = $endDate->isoFormat('YYYY-MM-DD');

            return EnergyEquipmentRevision::with(
                    'pop.comuna',
                    'pop.zona.crm', 
                    'pop.sites',
                    'statuses.item.revisor',
                    'statuses.item.type',
                    'statuses.validator'
                )
                ->where(function($q) use($startDate, $endDate) {
                    if($startDate && $endDate) {
                        $q->whereBetween('date', [date($startDate), date($endDate)]);
                    }
                })
                ->whereHas('pop.sites', function($q) use($text) {
                    if ($text) {
                        $q->where('nem_site', 'LIKE', "%$text%")
                        ->orWhere('nombre', 'LIKE', "%$text%");
                    }
                })
                ->whereHas('pop.zona', function($r) use($condition_crm) {
                    $r->whereRaw($condition_crm);
                })
                ->get();
        }
        else {
            return EnergyEquipmentRevision::with(
                    'pop.comuna',
                    'pop.zona.crm', 
                    'pop.sites',
                    'statuses.item',
                    'statuses.item.type',
                    'statuses.validator'
                )
                ->whereHas('pop.sites', function($q) use($text) {
                    if ($text) {
                        $q->where('nem_site', 'LIKE', "%$text%")
                        ->orWhere('nombre', 'LIKE', "%$text%");
                    }
                })
                ->whereHas('pop.zona', function($r) use($condition_crm) {
                    $r->whereRaw($condition_crm);
                })
                ->get();
        }
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Rondas Tecnicas';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID',
            'Nombre POP',
            'Dirección',
            'Comuna',
            'Zona',
            'CRM',
            'Fecha revisión',
            'Revisor',
            'Empresa',
            'S/E Observar si tienen aisladores trizados o picados',
            'S/E Observar si tienen manchas de aceites',
            'S/E Observar si tienen cables sueltos',
            'Verificar voltajes dentro de valores',
            'Valor de Corriente',
            'Protecciones ON',
            'Verificar voltaje CC dentro de parámetros',
            'Verificar Corriente de fuentes CC dentro valor',
            'Observar partes calientes en fusibles CC',
            'Alarmas presentes',
            'Observar derrames de acido',
            'Observar baterías infladas',
            'Observar bornes levantados',
            'Protecciones en ON Bypass en OFF',
            'Sistema en automático',
            'Estatus sin alarmas',
            'Verificar voltaje de baterías de partida',
            'Verificar con la mano temperatura de los 2 lados del motor',
            'Verificar correas',
            'Verificar si hay fugas de aceite y refrigerante',
            'Estatus sin alarmas',
            'Verificar estado de bombas en On y/o Automático',
            'Verificar fugas de combustible en cañerías',
            'Verificar estado de nivel de combustible mayor 50%',
            'Verificar temperatura de sala',
            'Verificar equipo de climatización 1 funcionando',
            'Verificar equipo de climatización 2 funcionando',
            'Verificar equipo de climatización Stanby apagado',
            'Revisión visual de condensadores ruidos fuera de lo normal',
            'Estatus sin alarmas',
            'Estatus panel sin alarmas',
            'Cilindros de extinción en marcador en verde',
            // 'Validado'
        ];
    }

    /**
     * @return array
     */
    public function map($rondas): array
    {       
        return [
            $rondas->id,
            $rondas->pop->nombre,
            $rondas->pop->direccion,
            $rondas->pop->comuna->nombre_comuna,
            $rondas->pop->zona->nombre_zona,
            $rondas->pop->zona->crm->nombre_crm,
            $rondas->date,
            $rondas->revisor,
            $rondas->company,
            $rondas->statuses[0]->status ? 'OK' : 'NO OK',
            $rondas->statuses[1]->status ? 'OK' : 'NO OK',
            $rondas->statuses[2]->status ? 'OK' : 'NO OK',
            $rondas->statuses[3]->status ? 'OK' : 'NO OK',
            $rondas->statuses[4]->status ? 'OK' : 'NO OK',
            $rondas->statuses[5]->status ? 'OK' : 'NO OK',
            $rondas->statuses[6]->status ? 'OK' : 'NO OK',
            $rondas->statuses[7]->status ? 'OK' : 'NO OK',
            $rondas->statuses[8]->status ? 'OK' : 'NO OK',
            $rondas->statuses[9]->status ? 'OK' : 'NO OK',
            $rondas->statuses[10]->status ? 'OK' : 'NO OK',
            $rondas->statuses[11]->status ? 'OK' : 'NO OK',
            $rondas->statuses[12]->status ? 'OK' : 'NO OK',
            $rondas->statuses[13]->status ? 'OK' : 'NO OK',
            $rondas->statuses[14]->status ? 'OK' : 'NO OK',
            $rondas->statuses[15]->status ? 'OK' : 'NO OK',
            $rondas->statuses[16]->status ? 'OK' : 'NO OK',
            $rondas->statuses[17]->status ? 'OK' : 'NO OK',
            $rondas->statuses[18]->status ? 'OK' : 'NO OK',
            $rondas->statuses[19]->status ? 'OK' : 'NO OK',
            $rondas->statuses[20]->status ? 'OK' : 'NO OK',
            $rondas->statuses[21]->status ? 'OK' : 'NO OK',
            $rondas->statuses[22]->status ? 'OK' : 'NO OK',
            $rondas->statuses[23]->status ? 'OK' : 'NO OK',
            $rondas->statuses[24]->status ? 'OK' : 'NO OK',
            $rondas->statuses[25]->status ? 'OK' : 'NO OK',
            $rondas->statuses[26]->status ? 'OK' : 'NO OK',
            $rondas->statuses[27]->status ? 'OK' : 'NO OK',
            $rondas->statuses[28]->status ? 'OK' : 'NO OK',
            $rondas->statuses[29]->status ? 'OK' : 'NO OK',
            $rondas->statuses[30]->status ? 'OK' : 'NO OK',
            $rondas->statuses[31]->status ? 'OK' : 'NO OK',
            // $rondas->statuses[0]->validated ? 'SI' : 'NO'
        ];
    }
}
