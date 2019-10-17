<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Pop;
use App\Crm;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $mapAttributes = collect([
            'latitude' => -33.44444275,
            'longitude' => -70.6561017,
            'zoom' => 8
        ]);

        // Datos POP
        $popCoreQuantity = DB::select(DB::raw("
            SELECT
            @crm_id:=id AS id,
            @crm:=nombre AS nombre,

            -- POP FIJOS CORE
            @fijo_core:=(SELECT count(P.id) 
                        FROM entel_pops.pops P 
                        INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                        INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id  AND Z.crm_id = @crm_id
                        INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 1
                        INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                        ) AS fijo,

            -- POP MOVILES CORE
            @movil_core:=(SELECT count(P.id) 
                        FROM entel_pops.pops P 
                        INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                        INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                        INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 2
                        INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                        ) AS movil
            FROM entel_pops.crms
            -- GROUP BY id
        "));

        // Datos Tecnologías
        $techCoreQuantity = DB::select(DB::raw("
            SELECT
            @crm_id:=id AS id,
            @crm:=nombre AS nombre,

            -- TECNOLOGIAS
            @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec2g900,

            @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec2g1900,
            
            @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec3g900,

            @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec3g1900,

            @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec4g700,

            @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    ) as tec4g2600
            FROM entel_pops.crms
            -- GROUP BY CRM.id
        "));

        // Datos Servicios
        
        $servicesCoreQuantity = DB::select(DB::raw("
            SELECT
            @crm_id:=id AS id,
            @crm:=nombre AS nombre,
            -- BAFI Y OLT
            @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    WHERE P.bafi = 1) AS bafi,
            @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    WHERE P.olt = 1) as olt,
            @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    WHERE P.olt_3play = 1) as olt_3play,
            @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    WHERE P.red_minima_n1 = 1) as red_minima_n1,
            @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    INNER JOIN entel_pops.classifications CA ON P.id = CA.pop_id AND CA.classification_type_id = 1
                    WHERE P.red_minima_n1 = 1) as red_minima_n2
            FROM entel_pops.crms
            -- GROUP BY CRM.id
        "));

        return view('home', compact(
                'mapAttributes'
            )
        );
    
    }
}
