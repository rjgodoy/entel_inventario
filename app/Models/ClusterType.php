<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClusterType extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.cluster_types'; 
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pops()
    {
        return $this->hasMany(Pop::class);
    }
}
