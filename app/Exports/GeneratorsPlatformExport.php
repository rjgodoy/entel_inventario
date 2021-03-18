<?php

namespace App\Exports;


use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use App\Models\GeneratorsPlatformGenerator;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class GeneratorsPlatformExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
{
	use Exportable;

	protected $text;
	protected $core;
    protected $crm_id;
    protected $zona_id;
    protected $brand_id;
    protected $group_type_id;
    protected $sub_zone_id;
    protected $critic;
    protected $vip;

    public function __construct(object $request)
    {
    	$this->text = $request->text;
        $this->core = $request->core;
        $this->crm_id = $request->crm_id;
        $this->zona_id = $request->zona_id;
        $this->brand_id = $request->brand_id;
        $this->group_type_id = $request->group_type_id;
        $this->sub_zone_id = $request->sub_zone_id;
        $this->critic = $request->critic;
        $this->vip = $request->vip;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
    	$text = $this->text;
        $core = $this->core;
        $crm_id = $this->crm_id;
        $zona_id = $this->zona_id;
        $brand_id = $this->brand_id;
        $group_type_id = $this->group_type_id;
        $sub_zone_id = $this->sub_zone_id;
        $critic = $this->critic;
        $vip = $this->vip;

        $generators = GeneratorsPlatformGenerator::
            with(
                'g_commune.g_region'
                ,'g_zona.g_sector'
                ,'generator_set_model.generator_set_brand'
                ,'g_model.g_brand'
                ,'g_model.g_management_system'
                ,'g_model.g_motor'
                ,'g_model.g_fuel_pond'
                ,'g_model.g_generator_detail'
                ,'g_model.g_tta_controller'
                ,'g_type'
                ,'g_system_type'
                ,'g_last_maintance.g_maintance_status'
                ,'g_protocol'
            )
            ->where(function($q) use($text) {
                if($text) {
                    $q->where('name', 'LIKE', "%$text%")
                    ->orWhere('mobile_code', 'LIKE', "%$text%");
                }
            })

            ->where(function($q) use($crm_id, $zona_id) {
                if ($crm_id) {
                    if($zona_id) {
                        $q->where('zone_id', $zona_id);
                    } else {
                        $q->whereHas('g_zona', function($p) use($crm_id) {
                            $p->where('sector_id', $crm_id);
                        });
                    }
                }
            })
            ->where(function($q) use($group_type_id) {
                if($group_type_id) {
                    $q->where('group_type_id', $group_type_id);
                }
            })
            ->whereHas('g_model', function($p) use($brand_id) {
                if ($brand_id) {
                    $p->where('brand_id', $brand_id);
                }
            })

            ->where(function($q) use($sub_zone_id) {
                if($sub_zone_id) {
                    $q->where('sub_zone_id', $sub_zone_id);
                }
            })
            ->orderBy('zone_id', 'asc')
            ->get();

            return $generators;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Grupos Electrógenos';
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
        	'Código movil',
        	'Código fijo',
        	'Nombre',
        	'Comuna',
        	'Región',
        	'Zona',
        	'CRM',
        	'Subzona',
        	'Tipo grupo',
        	'Fecha instalación',
        	'Marca grupo electrogéno',
        	'Modelo grupo electrogéno',
        	'Número de Serie grupo electrogéno',
        	'Marca motor',
        	'Modelo motor',
        	'Número de serie motor',
        	'Marca generador',
        	'Modelo generador',
        	'Número de Serie generador',
        	'Potencia',
        	'Tipo de conexión',
        	'Tipo',
        	'Capacidad (Lts.)',
        	'Consumo (Lts.)',
        	'Autonomía',
        	'Lectura remota nivel combustible',
        	'Marca sistema gestión',
        	'Modelo sistema gestión',
        	'Número de serie sistema gestión',
        	'IP',
        	'Lectura remota horómetro',
        	'Marca controlador TTA',
        	'Modelo controlador TTA',
        	'Número de Serie controlador TTA',
        	'Eólico / Solar',
        	'OnGrid / OffGrid',
        	'Observaciones'
        ];
    }

    /**
     * @return array
     */
    public function map($generators): array
    {

        return [
            $generators->mobile_code,
            $generators->fixed_code,
            $generators->name,
            $generators->g_commune->name,
            $generators->g_commune->g_region->name,
            $generators->g_zona->name,
            $generators->g_zona->g_sector->name,
            $generators->sub_zone,
            $generators->g_type->name,
            $generators->installation_date,
            $generators->g_model->g_brand->name,
            $generators->g_model->name,
            $generators->g_model->serial_number,
            $generators->g_model->g_motor->name,
            $generators->g_model->g_motor->model,
            $generators->g_model->g_motor->serial_numbre,
            $generators->g_model->g_generator_detail->brand,
            $generators->g_model->g_generator_detail->model,
            $generators->g_model->g_generator_detail->serial_numbre,
            $generators->g_model->g_generator_detail->power,
            $generators->g_model->g_generator_detail->connection,
            $generators->g_model->g_fuel_pond->type,
            $generators->g_model->g_fuel_pond->capacity,
            $generators->g_model->g_fuel_pond->consumption,
            $generators->g_model->g_fuel_pond->autonomy,
            $generators->g_model->g_fuel_pond->remote ? 'Si' : 'No',
            $generators->g_model->g_management_system->name,
            $generators->g_model->g_management_system->model,
            $generators->g_model->g_management_system->serial_number,
            $generators->ip,
            $generators->g_model->g_management_system->remote ? 'Si' : 'No',
            $generators->g_model->g_tta_controller->brand,
            $generators->g_model->g_tta_controller->model,
            $generators->g_model->g_tta_controller->serial_number,
            $generators->g_system_type->energy,
            $generators->g_system_type->grid_type,
            $generators->comments
  		];
  	}

}
