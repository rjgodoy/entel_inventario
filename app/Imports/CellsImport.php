<?php

namespace App\Imports;

use App\Models\AessCell;
use App\Models\Comuna;
use App\Models\SolutionType;
use App\Models\State;
use App\Models\TechnologyType;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CellsImport implements ToModel, WithHeadingRow, 
WithChunkReading, 
// WithBatchInserts, 
WithCustomCsvSettings
{
    use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return AessCell::updateOrCreate([
            'cell_id' => $row['cell_id'],
            'rat_type' => $row['rat_type'],
        ], [
            'cell_name' => $row['cell_name'],
            'lac' => $row['lac'],
            'frequency' => $row['frequency'],
            'ran_device_id' => $row['ran_device_id'],
            'ran_device_status' => $row['ran_device_status'],
            'ran_device_name' => $row['ran_device_name'],
            'pop_m_id' => $row['pop_m_id'],
            'pop_m_status' => $row['pop_m_status'],
            'tipo_solucion' => $row['tipo_solucion'],
            'cluster_id' => $row['cluster_id'],
            'cluster' => $row['cluster'],
            'polygon_id' => $row['polygon_id'],
            'polygon' => $row['polygon'],
            'polygon_class' => $row['polygon_class'],
            'crm' => $row['crm'],
            'class' => $row['class'],
            'pop_e_id' => $row['pop_e_id'],
            'pop_name' => $row['pop_name'],
            'lat_wgs84' => $row['lat_wgs84'],
            'lon_wgs84' => $row['lon_wgs84'],
            'comuna_id' => $row['comuna'] ? Comuna::where('nombre_comuna', $row['comuna'])->first()->id : null,
            'comuna' => $row['comuna'],
            'provincia_id' => $row['provincia_id'],
            'provincia' => $row['provincia'],
            'region_id' => $row['region_id'],
            'region' => $row['region'],
            'address' => $row['address'],
            'zona_fdt' => $row['zona_fdt'],
            'lloo700' => $row['lloo700'],
            'lloo2600' => $row['lloo2600'],
            'rat_type_id' => $row['rat_type'] ? TechnologyType::where('type', $row['rat_type'])->first()->id : null,
            'ran_device_status_id' => $row['ran_device_status'] ? State::where('state', $row['ran_device_status'])->first()->id : null,
            'pop_m_status_id' => $row['pop_m_status'] ? State::where('state', $row['pop_m_status'])->first()->id : null,
            'solution_type_id' => $row['tipo_solucion'] && SolutionType::where('solution_type', $row['tipo_solucion'])->first() ? SolutionType::where('solution_type', $row['tipo_solucion'])->first()->id : null
        ]);
    }

    public function headingRow(): int
    {
        return 2;
    }

    // public function batchSize(): int
    // {
    //     return 5000;
    // }

    public function chunkSize(): int
    {
        return 5000;
    }

    public function getCsvSettings(): array
    {
        return [
            'delimiter' => "|"
        ];
    }
}
