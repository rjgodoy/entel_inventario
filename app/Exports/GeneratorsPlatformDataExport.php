<?php

namespace App\Exports;

use Carbon\Carbon;
use App\Models\GeneratorsPlatformValues;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use App\Models\GeneratorsPlatformGenerator;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class GeneratorsPlatformDataExport implements FromCollection, WithTitle, ShouldAutoSize, WithHeadings, WithMapping
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
                // ,'g_model.g_management_system'
                // ,'g_model.g_motor'
                ,'g_model.g_fuel_pond'
                // ,'g_model.g_generator_detail'
                // ,'g_model.g_tta_controller'
                ,'g_type'
                // ,'g_system_type'
                ,'g_last_maintance.g_maintance_status'
                ,'g_protocol'
                // ,'g_last_values'
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
            'Ubicación',
            'Sub zona',
            'Nombre',
            'Nemonico movil',
            'Nemonico fijo',
            'Marca',
            'Modelo',
            'Tipo',
            'HF día',
            'Prom. consumo',
            '% Combustible',
            'Nivel combustible',
            'Capacidad',
            'Horometro',
            'Mantención'
        ];
    }

    /**
     * @return array
     */
    public function map($generators): array
    {
    	// $latest = GeneratorsPlatformValues::with('g_generator')
     //        ->where('generator_id', $generators->id)
     //        ->latest('created')
     //        ->first();

        // hourmeter and fuel consumption
        // $hourmeter_consumption = 0;
        // $fuel_consumption = 0;

        // if ($latest) {
            // $date = date_format($latest->created, "Y-m-d");
        $values = GeneratorsPlatformValues::
            where('created','>=',Carbon::now()->subdays(1))
            // whereRaw('DATE(created) = "'.$date.'"')
            ->where('generator_id', $generators->id)
            ->where('hourmeter_consumption', '!=', -1)
            ->where('fuel_consumption', '<', 75)
            ->orderBy('created', 'desc')
            ->selectRaw('*, AVG(fuel_consumption) as avg_fuel_consumption, AVG(hourmeter_consumption) as avg_hourmeter_consumption')
            ->first();

         //    $h_value = 0;
         //    $f_value = 0;
	        // $i = 0;
	        // if($values) {
	        // 	foreach ($values as $data) {
	        // 		$h_value = $h_value + $data->hourmeter_consumption;
	        // 		$f_value = $f_value + $data->fuel_consumption;
	        // 		$i=$i+1;
	        // 	}
	        	// $hourmeter_consumption = 
	        	// $fuel_consumption = ;
		    // }
        // }

        // $fuel_level_percentage = $generators->g_last_values->fuel_level_percentage;
        // $fuel_level = $generators->g_last_values->fuel_level;
        // $capacity = $generators->g_model && $generators->g_model->g_fuel_pond ? $generators->g_model->g_fuel_pond->capacity : null;
       
        return [
        	$generators->g_zona->name,
        	$generators->sub_zone,
        	$generators->name,
        	$generators->mobile_code,
            $generators->fixed_code,
            $generators->g_model->g_brand->name,
            $generators->g_model->name,
            $generators->g_type->name,
            $values->avg_hourmeter_consumption,
            $values->avg_fuel_consumption,
            $values->fuel_level_percentage,
            $values->fuel_level,
			$generators->g_model && $generators->g_model->g_fuel_pond ? $generators->g_model->g_fuel_pond->capacity : null,
            $values->hourmeter,
            $generators->g_last_maintance ? $generators->g_last_maintance->created : null
        ];
    }

}
