<?php

namespace App\Imports;

use App\Models\ClientConnection;
use App\Models\ClientConnectionState;
use App\Models\ElectricCompany;
use App\Models\Site;

use Carbon\Carbon;

use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
// use Maatwebsite\Excel\Concerns\Importable;

class ClientConnectionsImport implements ToModel, WithHeadingRow
{
    // use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        // return $row;
        // Trae el parámetro del Sitio
        $site_id = Site::where('nem_site', $row['Código'])->first()->id;
        $electric_company_id = ElectricCompany::where('name', $row['Distributor'])->first()->id;
        $client_connection_state_id = ClientConnectionState::where('description', $row['Estado'])->first()->id;

        return $site_id;
        
        return new ClientConnection([
            'site_id' => $site_id,
            'electric_company_id' => $electric_company_id,
            'client_number' => $row['Número de cliente'],
            'client_connection_state_id' => $client_connection_state_id,
            'access_credentials' => $row['Credenciales de acceso']
        ]);
    }
}
