<?php
namespace App\Helpers;

use App\Models\Menu;

class Helper {

    // Nabvar
    public static function menus($user) {
    	if ($user->roles()->first()->id == 1) {
	        $menus = Menu::where('active', 1)->orderBy('order', 'asc')->get();
	    } else {
	    	$menus = Menu::where('active', 1)->whereRaw('id NOT IN (12)')->orderBy('order', 'asc')->get();
	    }

	    return $menus;
    }

    public static function breadcrumb($path) {
        $breadcrumb = Menu::where('path', $path)->first()->title;
        return $breadcrumb;
    }

}