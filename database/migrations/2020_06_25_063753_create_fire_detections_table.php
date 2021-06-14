<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFireDetectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('fire_detections', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('room_id')->unsigned();
        //     $table->bigInteger('fire_detection_type_id')->unsigned();
        //     $table->bigInteger('extinction_type_id')->unsigned()->nullable();
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
        // Schema::dropIfExists('fire_detections');
    }
}
