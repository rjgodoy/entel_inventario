<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePsgTpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('psg_tps', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('tp_id');
        //     $table->bigInteger('site_id');
        //     $table->bigInteger('psg_tp_state_id');
        //     $table->string('description');
        //     $table->string('user');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('psg_tps');
    }
}
