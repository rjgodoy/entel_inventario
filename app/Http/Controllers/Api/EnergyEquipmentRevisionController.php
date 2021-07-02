<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Site;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\EnergyEquipmentRevision;
use App\Models\EnergyEquipmentRevisionItem;
use App\Models\EnergyEquipmentRevisionStatus;
use App\Http\Resources\EnergyEquipmentRevisionCollection;

class EnergyEquipmentRevisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $text = $request->text;
        $crm_id = $request->crm_id;

        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;

        $revisions = EnergyEquipmentRevision::with(
                'pop.comuna',
                'pop.zona.crm', 
                'pop.sites',
                'statuses.item.revisor',
                'statuses.item.type',
                'statuses.validator'
            )
            ->whereHas('pop.sites', function($q) use($text) {
                if ($text) {
                    $q->where('nem_site', 'LIKE', "%$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                }
            })
            ->whereHas('pop.zona', function($r) use($condition_crm) {
                $r->whereRaw($condition_crm);
            })
            ->paginate(20);

        return new EnergyEquipmentRevisionCollection($revisions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        foreach ($request->params as $value) {
            if ($value[0] != 'Timestamp') {
                // $values = [];
                // for ($i=0; $i < 32; $i++) { 
                //     array_push($values, $value[$i+6]);
                // }
                // Obtiene el id del POP que contiene el Sitio en la planilla
                $pop_id = Site::where('nem_site', $value[2])->get();
                $pop_id && $pop_id = $pop_id->first()->pop_id;
                if ($pop_id) {
                    EnergyEquipmentRevision::insertOrIgnore([
                        [
                            'pop_id' => $pop_id,
                            'date' => Carbon::createFromFormat('d/m/Y',  $value[3]),
                            'revisor' => $value[4],
                            'company' => $value[5],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now()
                        ]
                    ]);
                    $revision_id = EnergyEquipmentRevision::latest()->first()->id;

                    $items = EnergyEquipmentRevisionItem::all();
                    $i=6;
                    foreach ($items as $item) {
                        EnergyEquipmentRevisionStatus::insertOrIgnore([
                            [
                                'energy_equipment_revision_id' => $revision_id,
                                'energy_equipment_revision_item_id' => $item->id,
                                'status' => $value[$i] == 'OK' ? 1 : 0,
                                'created_at' => Carbon::now(),
                                'updated_at' => Carbon::now()
                            ]
                        ]);
                        $i++;
                    }
                }
            }
        }
        return;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get CRM Status.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getStatusOfCrm($id)
    {
        $revisions = EnergyEquipmentRevision::whereHas('pop.zona', function($q) use($id) {
            $q->where('crm_id', $id);
        })
        ->whereHas('statuses', function($p) {
            $p->where('status', 0);
        })
        ->count();
        
        return $revisions;
    }
}
