<?php

namespace App\Imports;

use App\Models\Site;
use App\Models\VandalismRecord;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class VandalismRecordsImport implements ToModel, WithHeadingRow
{
    use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $nem_site = $row['tipo_de_infraestructura'];
        $site = Site::where('nem_site', $nem_site)->get();
        if ($site->isEmpty()) {
            return null;
        }

        return VandalismRecord::withTrashed()->updateOrCreate(
            [
                'site_id' => $row['site_id'],
                'vandalized_at' => $row['fecha'],
            ],
            [
                'description' => $row['descripcion'],
                'impact' => $row['impact'],
            ]
        );
    }
}
