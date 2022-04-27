<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EntelVip extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.entel_vips'; 

    protected $guarded = [];

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function vip_category_type()
    {
        return $this->belongsTo(VipCategoryType::class);
    }

}
