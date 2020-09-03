<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdatePopResume extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:pop_resume';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualiza la tabla de exportación de los POP';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $popQuantity = DB::select(DB::raw("
            INSERT IGNORE INTO entel_pops.pop_resumes (
                pop_id,
                nem_fijo,
                nem_movil,
                pop_e_id,
                nombre,
                direccion,
                comuna_id,
                comuna,
                cod_region,
                region,
                cod_zona,
                zona,
                crm,
                latitude,
                longitude,
                classification,
                attention_priority,
                category,
                attention_type,
                
                q_2g,
                q_3g,
                q_4g,

                pop_type_id,
                pop_type,
                net_type_id,
                net_type,
                derivation_type_id,
                derivation_type,
                dependences,
                pe_3g,  
                mpls,   
                olt,    
                olt_3play,  
                core,
                bafi,
                red_minima,
                vip,    
                vip_entel,
                localidad_obligatoria,  
                ranco,  
                offgrid,    
                solar,  
                eolica,
                beacon,
                cod_protected_zone,
                protected_zone,
                rca,
                zat,
                alba_project    
            )
            SELECT 
            P.id,
            'nem_fijo',
            'nem_movil',
            P.pop_e_id,
            P.nombre,
            P.direccion,
            P.comuna_id,
            C.nombre_comuna,
            R.cod_region,
            R.nombre_region,
            Z.cod_zona,
            Z.nombre_zona,
            CRM.nombre_crm,
            P.latitude,
            P.longitude,

            'classification',
            'attention_priority',
            @cat:=IF(S.category_type_id < @cat,S.category_type_id,@cat),
            'attention_type',

            (SELECT count(distinct T.id) from technologies T inner join sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 1),
            (SELECT count(distinct T.id) from technologies T inner join sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 2),
            (SELECT count(distinct T.id) from technologies T inner join sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 3),
            P.pop_type_id,
            PT.`type`,
            P.net_type_id,
            NT.`type`,
            P.derivation_type_id,
            DT.derivation_type,
            P.dependences,
            P.pe_3g,
            P.mpls,
            P.olt,
            P.olt_3play,
            P.core,
            IF((SELECT count(distinct T.id) from technologies T inner join sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 3 AND T.frequency = 3500),1,0),
            S.red_minima,
            P.vip,
            IF(VE.id,1,0),
            P.localidad_obligatoria,
            P.ranco,
            P.offgrid,
            P.solar,
            P.eolica,
            BT.`type`,
            PZ.cod_zone,
            PZ.`name`,
            IF(RC.id,1,0),
            (SELECT PO.nombre FROM pops PO where ZAT.pop_id = PO.id AND Z.id = ZAT.zona_id),
            P.alba_project

            FROM pops P 
            INNER JOIN sites S ON S.pop_id = P.id
            INNER JOIN comunas C on C.id = P.comuna_id
            INNER JOIN zonas Z on Z.id = C.zona_id
            INNER JOIN crms CRM on CRM.id = Z.crm_id
            INNER JOIN regions R on R.id = C.region_id
            left JOIN pop_types PT ON PT.id = P.pop_type_id
            left JOIN net_types NT on NT.id = P.net_type_id
            left JOIN derivation_types DT on DT.id = P.derivation_type_id
            left JOIN entel_g_redes_inventario.vertical_structures VS ON VS.pop_id = P.id
            left JOIN entel_g_redes_inventario.beacons B ON B.vertical_structure_id = VS.id
            left JOIN entel_g_redes_inventario.beacon_types BT ON BT.id = B.beacon_type_id
            left JOIN pop_protected_zone PPZ ON P.id = PPZ.pop_id
            left JOIN protected_zones PZ ON PZ.id = PPZ.protected_zone_id
            left JOIN entel_g_redes_inventario.rcas RC ON RC.pop_id = P.id
            left JOIN entel_g_redes_inventario.temporary_storages ZAT ON ZAT.zona_id = Z.id
            left JOIN entel_vips VE ON VE.pop_id = P.id
            ;





        "));
    }
}
