<?php

namespace App\Console\Commands;

use App\Models\PopResume;
use Illuminate\Console\Command;
use DB;

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
        PopResume::truncate();

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
                classification_type_id,
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
                energy_system,  
                energy_responsable,
                solar,  
                eolica,
                beacon,
                cod_protected_zone,
                protected_zone,
                rca,
                zat,
                turret_type_id    
            )
            SELECT 
            P.id,
            IF(S.site_type_id = 1,S.nem_site, null),
            IF(S.site_type_id IN (2,3,5),S.nem_site, null),
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
            S.classification_type_id,
            CLT.classification_type,
            APT.attention_priority_type,
            CT.category_type,
            ATT.attention_type,

            (SELECT count(distinct T.id) from entel_pops.technologies T INNER JOIN entel_pops.sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 1),
            (SELECT count(distinct T.id) from entel_pops.technologies T INNER JOIN entel_pops.sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 2),
            (SELECT count(distinct T.id) from entel_pops.technologies T INNER JOIN entel_pops.sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 3),
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
            IF((SELECT count(distinct T.id) from entel_pops.technologies T INNER JOIN entel_pops.sites SS on SS.id = T.site_id where P.id = SS.pop_id AND T.technology_type_id = 3 AND T.frequency = 3500),1,0),
            S.red_minima,
            P.vip,
            IF(VE.id,1,0),
            P.localidad_obligatoria,
            P.ranco,
            ES.system,
            ER.responsable,
            P.solar,
            P.eolica,
            BT.`type`,
            PZ.cod_zone,
            PZ.`name`,
            IF(RC.id,1,0),
            (SELECT PO.nombre FROM entel_pops.pops PO WHERE ZAT.pop_id = PO.id AND Z.id = ZAT.zona_id),
            P.turret_type_id

            FROM entel_pops.pops P 
            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
            INNER JOIN entel_pops.comunas C ON C.id = P.comuna_id
            INNER JOIN entel_pops.zonas Z ON Z.id = P.zona_id
            INNER JOIN entel_pops.crms CRM ON CRM.id = Z.crm_id
            INNER JOIN entel_pops.regions R ON R.id = C.region_id
            LEFT JOIN entel_pops.pop_types PT ON PT.id = P.pop_type_id
            LEFT JOIN entel_pops.net_types NT ON NT.id = P.net_type_id
            LEFT JOIN entel_pops.derivation_types DT ON DT.id = P.derivation_type_id
            LEFT JOIN entel_g_redes_inventario.vertical_structures VS ON VS.pop_id = P.id
            LEFT JOIN entel_g_redes_inventario.beacons B ON B.vertical_structure_id = VS.id
            LEFT JOIN entel_g_redes_inventario.beacon_types BT ON BT.id = B.beacon_type_id
            LEFT JOIN entel_pops.pop_protected_zone PPZ ON P.id = PPZ.pop_id
            LEFT JOIN entel_pops.protected_zones PZ ON PZ.id = PPZ.protected_zone_id
            LEFT JOIN entel_g_redes_inventario.rcas RC ON RC.pop_id = P.id
            LEFT JOIN entel_g_redes_inventario.temporary_storages ZAT ON ZAT.zona_id = Z.id
            LEFT JOIN entel_pops.entel_vips VE ON VE.pop_id = P.id
            LEFT JOIN entel_pops.category_types CT ON CT.id = S.category_type_id
            LEFT JOIN entel_pops.attention_types ATT ON ATT.id = S.attention_type_id
            LEFT JOIN entel_pops.attention_priority_types APT ON APT.id = S.attention_priority_type_id
            LEFT JOIN entel_pops.classification_types CLT ON S.classification_type_id = CLT.id
            LEFT JOIN entel_pops.energy_systems ES ON ES.id = P.energy_system_id
            LEFT JOIN entel_pops.energy_responsables ER ON ER.id = P.energy_responsable_id
            ;
        "));
    }
}
