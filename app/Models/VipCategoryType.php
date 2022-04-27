<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VipCategoryType extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.vip_category_types';

    public function pop_vip()
    {
        return $this->hasMany(EntelVip::class);
    }


}
