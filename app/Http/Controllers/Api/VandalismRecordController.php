<?php

namespace App\Http\Controllers\Api;

use App\Exports\VandalismRecordsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\VandalismRecordCollection;
use App\Models\Pop;
use App\Models\VandalismRecord;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VandalismRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $page = $request->page;
        $text = $request->text;

        $records = VandalismRecord::with(
            'site.pop.comuna.region', 'site.pop.zona.crm'
        )
        ->where(function($q) use($text) {
            $q->whereHas('site', function($p) use($text) {
                $p->where('nem_site', 'LIKE', "%$text%")
                ->orWhere('nombre', 'LIKE', "%$text%");
            });
        })
        ->orWhere(function($q) use($text) {
            $q->whereHas('site.pop', function($p) use($text) {
                $p->where('nombre', 'LIKE', "%$text%");
            });
        })
        ->orWhere(function($q) use($text) {
            $q->whereHas('site.pop.comuna', function($p) use($text) {
                $p->where('nombre_comuna', 'LIKE', "%$text%");
            });
        })
        ->orWhere(function($q) use($text) {
            $q->whereHas('site.pop.zona', function($p) use($text) {
                $p->where('nombre_zona', 'LIKE', "%$text%");
            });
        })
        ->orWhere('description', 'LIKE', "%$text%")
        ->orWhere('impact', 'LIKE', "%$text%")
        ->orderBy('vandalized_at', 'desc')
        ->paginate(20);

        return new VandalismRecordCollection($records);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        VandalismRecord::create([
            'site_id' => $request->site_id,
            'vandalized_at' => $request->date,
            'description' => $request->description,
            'impact' => $request->impact
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = VandalismRecord::where('id', $id)->get();
        return new VandalismRecord($record);
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
        $record = VandalismRecord::find($id);
        $record->update([
            'site_id' => $request->site_id,
            'vandalized_at' => $request->date,
            'description' => $request->description,
            'impact' => $request->impact
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $record = VandalismRecord::find($id);
        $record->delete();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function coordinatesCaluculation()
    {
        $coordinates = Pop::select('latitude', 'longitude')->get();
        return $coordinates;
    }

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        $response = (new VandalismRecordsExport($request))->download('Registro de vandalismos.xlsx');
        ob_end_clean();
        return $response;
    }


}
