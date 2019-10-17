<?php
namespace App\Helpers;

use App\Menu;

class Helper {

    // Nabvar
    public static function menus() {
        $menus = Menu::where('active', 1)->orderBy('order', 'asc')->get();
        return $menus;
    }

    public static function breadcrumb($path) {
        $breadcrumb = Menu::where('path', $path)->first()->title;
        return $breadcrumb;
    }

}