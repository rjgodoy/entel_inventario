<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Room as RoomResource;
use App\Models\Room;
use App\Models\Pop;

class RoomController extends Controller
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

        $pops = Pop::with('comuna.zona.crm', 'sites', 'rooms')
            ->whereHas('sites', function($q) use($text) {
                if ($text) {
                    $q->where('nem_site', 'LIKE', "%$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                }
            })
            ->whereHas('comuna.zona', function($r) use($condition_crm) {
                $r->whereRaw($condition_crm);
            })
            ->whereHas('rooms', function($p) {
                $p->where('criticity', 1);
            })
            ->paginate(10);

        return new RoomResource($pops);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
}
