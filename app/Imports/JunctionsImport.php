<?php

namespace App\Imports;

use App\Models\Junction;
use App\Models\ElectricCompany;
use App\Models\Site;

use Carbon\Carbon;

use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
// use Maatwebsite\Excel\Concerns\Importable;
// use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;

class JunctionsImport implements ToModel, WithHeadingRow
{
    // use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        // Busca la compañia electrica. Si no existe la crea y rescata el id.
        $electric_company = ElectricCompany::where('name', $row['Distribuidora'])->get();
        if ($electric_company->isEmpty()) {
            $electric_company_id = ElectricCompany::create([
                'name' => $row['Distribuidora']
            ])->id;
        } else {
            $electric_company_id = $electric_company->first()->id;
        }

        // Busca el sitio. Si no encuentra el sitio, no ingrese el dato a junctions (empalmes)
        $site = Site::where('nem_site', $row['Código'])->get();
        if ($site->isEmpty()) {
            return null;
        }

        $pop_id = $site->first()->pop_id;

        return Junction::updateOrCreate(
            [
                'client_number' => $row['# Cliente']
            ],
            [
                'pop_id' => $pop_id,
                'electric_company_id' => $electric_company_id,
                'rate_type' => $row['Tarifa Homologada']
            ]
        );
    }

    // public function getCsvSettings(): array
    // {
    //     return [
    //         'delimiter' => ','
    //     ];
    // }
}
