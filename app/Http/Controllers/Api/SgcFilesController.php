<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FilesRepositorio;
use App\Models\FilesSgc;
use App\Models\FileTickets;
use App\Models\FoldersRepositorio;
use App\Models\SolicitudesSgc;
use App\Models\Tickets;
use Illuminate\Http\Request;

class SgcFilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $solicitud = SolicitudesSgc::search()->orderBy('id', 'Desc')->paginate(10, ['id', 'created_at']);
        return $solicitud;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getFilesSgc(Request $request)
    {
        $files = FilesSgc::where('nuevassolicitud_id', $request->id)->get();
        return $files;
    }

    public function getFoldersSgcPop(Request $request)
    {
        if ($request->tab_select == 9) {
            $folders_sgc = \DB::connection('mysql_sgc')->select('CALL proc_search_folders_sgc_pop (?) ', array($request->pop_id));
            return json_encode($folders_sgc);
        } else {
            if ($request->tab_select == 10) {
                $folders_ticket = \DB::connection('mysql_ticket')->select('CALL proc_search_folders_ticket_pop (?) ', array($request->pop_id));
                return json_encode($folders_ticket);
            }

        }

    }

    public function getFilesSgcTicketPop(Request $request)
    {
        if ($request->tab_select == 9) {
            $files = FilesSgc::where('nuevassolicitud_id', $request->id)->where('tipo_archivo_id',$request->type_file)->get();
            return json_encode($files);
        } else {
            if ($request->tab_select == 10) {
                $files = FileTickets::where('ticket_id', $request->id)->where('tipo_archivo_id',$request->type_file)->get();
                return json_encode($files);
            }

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getTickets(Request $request)
    {
        $tickets = Tickets::search()->orderBy('id', 'Desc')->paginate(10, ['id', 'created_at']);
        return $tickets;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFilesTicket(Request $request)
    {
        $files = FileTickets::where('ticket_id', $request->id)->get();
        return $files;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFoldersOfficeTrack(Request $request)
    {
        $folders = FoldersRepositorio::search()->whereIn('id', [197, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396])->paginate(10, ['id', 'nombre', 'created_at']);
        return $folders;
    }

    public function getFoldersOfficeTrackPopZone(Request $request)
    {
        $folders = FoldersRepositorio::where('zona_id',$request->zona_id)->get(['id', 'nombre', 'created_at']);
        return $folders;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getSubFolderRepositorio(Request $request)
    {
        $subFolders = FoldersRepositorio::where('sub_carpeta_id', $request->subcarpeta_id)->get(['id', 'nombre']);
        return $subFolders;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFilesSubFolderRepositorio(Request $request)
    {

        $files = FilesRepositorio::where('carpeta_id', $request->carpeta_id)->get(['id', 'nombre', 'directorio']);
        return $files;
    }
}
