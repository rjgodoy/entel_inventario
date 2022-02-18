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
    protected $weekly_review;

    public function __construct(object $request)
    {
        $this->text = $request->text;
        $this->crm_id = $request->crm_id;
        $this->start_date = $request->start_date;
        $this->end_date = $request->end_date;
        $this->weekly_review = $request->weekly_review;
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
        $weekly_review = $this->weekly_review;
        
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
                )
                ->where(function($q) use($startDate, $endDate) {
                    if($startDate && $endDate) {
                        $q->whereBetween('date', [date($startDate), date($endDate)]);
                    }
                })
                ->where(function($q) use($weekly_review){
                    if($weekly_review != null) {
                        $q->where('weekly_review', $weekly_review);
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
                    'statuses.item.type',
                )
                ->where(function($q) use($weekly_review) {
                    if($weekly_review != null) {
                        $q->where('weekly_review', $weekly_review);
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
                ->orderBy('date', 'desc')
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
            'Todo ok con el sitio?',

            'Existen aisladores trizados o picados?',
            'Existen manchas de aceite?',
            'Existen cables sueltos?',
            'Voltajes dentro de valores?',
            'Valor de la corriente normal?',
            'Protecciones ON?',
            'Voltaje CC dentro de parámetros?',
            'Corriente FCC dentro de parámetros?',
            'Se observan partes con T° elevada en fusibles CC?',
            'Existen alarmas presentes?',
            'Existe otra FCC en el lugar?',
            'Voltaje CC dentro de parámetros?',
            'Corriente FCC dentro de parámetros?',
            'Se observan partes con T° elevada en fusibles CC?',
            'Existen alarmas presentes?',
            'Se observan derrames de acido?',
            'Se observan baterías infladas?',
            'Se observan bornes levantados?',
            'Protecciones en ON Bypass en OFF',
            'Sistema en automático?',
            'Estatus sin alarmas?',
            'Se verifica el voltaje de baterías de partida?',
            'La T° en ambos lados del motor es la correcta?',
            'Las correas del GG.EE se encuentran en correcto estado?',
            'Existen fugas de aceite o refrigerante?',
            'Existen alarmas presentes?',
            'Verificar estado de bombas en ON y Automático',
            'Existen fugas de combustible en cañerias?',
            'El nivel de combustible es superior al 50% de la capacidad del estanque?',
            'La temperatura en sala es correcta? (28°)',
            'El equipo de climatización 1 funciona?',
            'El equipo de climatización 2 funciona?',
            'El equipo de climatización Standby apagado?',
            'Se aprecian ruidos fuera de lo normal o algún detalle con los condensadores?',
            'Estatus sin alarmas?',
            'Posee mas salas para revisar?',
            'La temperatura en sala es correcta? (28°)',
            'El equipo de climatización 1 funciona?',
            'El equipo de climatización 2 funciona?',
            'El equipo de climatización Standby apagado?',
            'Se aprecian ruidos fuera de lo normal o algún detalle con los condensadores?',
            'Estatus sin alarmas?',
            'Posee sistema contra incendio?',
            'Panel sin alarmas?',
            'Cilindros de extinción cargados?'
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
            $rondas->statuses->count() == 1 ? 'SI' : "NO",
            // $rondas->statuses->count() == 1 ? '' : $rondas->statuses[1]
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[0] && $rondas->statuses[0]->status === 1 ? 'SI' : ($rondas->statuses[0] && $rondas->statuses[0]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[1] && $rondas->statuses[1]->status === 1 ? 'SI' : ($rondas->statuses[1] && $rondas->statuses[1]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[2] && $rondas->statuses[2]->status === 1 ? 'SI' : ($rondas->statuses[2] && $rondas->statuses[2]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[3] && $rondas->statuses[3]->status === 1 ? 'SI' : ($rondas->statuses[3] && $rondas->statuses[3]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[4] && $rondas->statuses[4]->status === 1 ? 'SI' : ($rondas->statuses[4] && $rondas->statuses[4]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[5] && $rondas->statuses[5]->status === 1 ? 'SI' : ($rondas->statuses[5] && $rondas->statuses[5]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[6] && $rondas->statuses[6]->status === 1 ? 'SI' : ($rondas->statuses[6] && $rondas->statuses[6]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[7] && $rondas->statuses[7]->status === 1 ? 'SI' : ($rondas->statuses[7] && $rondas->statuses[7]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[8] && $rondas->statuses[8]->status === 1 ? 'SI' : ($rondas->statuses[8] && $rondas->statuses[8]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[9] && $rondas->statuses[9]->status === 1 ? 'SI' : ($rondas->statuses[9] && $rondas->statuses[9]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[10] && $rondas->statuses[10]->status === 1 ? 'SI' : ($rondas->statuses[10] && $rondas->statuses[10]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[11] && $rondas->statuses[11]->status === 1 ? 'SI' : ($rondas->statuses[11] && $rondas->statuses[11]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[12] && $rondas->statuses[12]->status === 1 ? 'SI' : ($rondas->statuses[12] && $rondas->statuses[12]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[13] && $rondas->statuses[13]->status === 1 ? 'SI' : ($rondas->statuses[13] && $rondas->statuses[13]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[14] && $rondas->statuses[14]->status === 1 ? 'SI' : ($rondas->statuses[14] && $rondas->statuses[14]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[15] && $rondas->statuses[15]->status === 1 ? 'SI' : ($rondas->statuses[15] && $rondas->statuses[15]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[16] && $rondas->statuses[16]->status === 1 ? 'SI' : ($rondas->statuses[16] && $rondas->statuses[16]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[17] && $rondas->statuses[17]->status === 1 ? 'SI' : ($rondas->statuses[17] && $rondas->statuses[17]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[18] && $rondas->statuses[18]->status === 1 ? 'SI' : ($rondas->statuses[18] && $rondas->statuses[18]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[19] && $rondas->statuses[19]->status === 1 ? 'SI' : ($rondas->statuses[19] && $rondas->statuses[19]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[20] && $rondas->statuses[20]->status === 1 ? 'SI' : ($rondas->statuses[20] && $rondas->statuses[20]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[21] && $rondas->statuses[21]->status === 1 ? 'SI' : ($rondas->statuses[21] && $rondas->statuses[21]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[22] && $rondas->statuses[22]->status === 1 ? 'SI' : ($rondas->statuses[22] && $rondas->statuses[22]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[23] && $rondas->statuses[23]->status === 1 ? 'SI' : ($rondas->statuses[23] && $rondas->statuses[23]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[24] && $rondas->statuses[24]->status === 1 ? 'SI' : ($rondas->statuses[24] && $rondas->statuses[24]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[25] && $rondas->statuses[25]->status === 1 ? 'SI' : ($rondas->statuses[25] && $rondas->statuses[25]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[26] && $rondas->statuses[26]->status === 1 ? 'SI' : ($rondas->statuses[26] && $rondas->statuses[26]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[27] && $rondas->statuses[27]->status === 1 ? 'SI' : ($rondas->statuses[27] && $rondas->statuses[27]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[28] && $rondas->statuses[28]->status === 1 ? 'SI' : ($rondas->statuses[28] && $rondas->statuses[28]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[29] && $rondas->statuses[29]->status === 1 ? 'SI' : ($rondas->statuses[29] && $rondas->statuses[29]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[30] && $rondas->statuses[30]->status === 1 ? 'SI' : ($rondas->statuses[30] && $rondas->statuses[30]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[31] && $rondas->statuses[31]->status === 1 ? 'SI' : ($rondas->statuses[31] && $rondas->statuses[31]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[32] && $rondas->statuses[32]->status === 1 ? 'SI' : ($rondas->statuses[32] && $rondas->statuses[32]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[33] && $rondas->statuses[33]->status === 1 ? 'SI' : ($rondas->statuses[33] && $rondas->statuses[33]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[34] && $rondas->statuses[34]->status === 1 ? 'SI' : ($rondas->statuses[34] && $rondas->statuses[34]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[35] && $rondas->statuses[35]->status === 1 ? 'SI' : ($rondas->statuses[35] && $rondas->statuses[35]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[36] && $rondas->statuses[36]->status === 1 ? 'SI' : ($rondas->statuses[36] && $rondas->statuses[36]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[37] && $rondas->statuses[37]->status === 1 ? 'SI' : ($rondas->statuses[37] && $rondas->statuses[37]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[38] && $rondas->statuses[38]->status === 1 ? 'SI' : ($rondas->statuses[38] && $rondas->statuses[38]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[39] && $rondas->statuses[39]->status === 1 ? 'SI' : ($rondas->statuses[39] && $rondas->statuses[39]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[40] && $rondas->statuses[40]->status === 1 ? 'SI' : ($rondas->statuses[40] && $rondas->statuses[40]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[41] && $rondas->statuses[41]->status === 1 ? 'SI' : ($rondas->statuses[41] && $rondas->statuses[41]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[42] && $rondas->statuses[42]->status === 1 ? 'SI' : ($rondas->statuses[42] && $rondas->statuses[42]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[43] && $rondas->statuses[43]->status === 1 ? 'SI' : ($rondas->statuses[43] && $rondas->statuses[43]->status === 0 ? 'NO' : 'N/A')),
            $rondas->statuses->count() == 1 ? '' : ($rondas->statuses[44] && $rondas->statuses[44]->status === 1 ? 'SI' : ($rondas->statuses[44] && $rondas->statuses[44]->status === 0 ? 'NO' : 'N/A')),
    
            
        ];
    }
}
