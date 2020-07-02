<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomSurfacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('room_surfaces', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('room_id')->unsigned();
        //     $table->double('total_surface')->nullable();
        //     $table->double('used_surface')->nullable();
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
        // Schema::dropIfExists('room_surfaces');
    }
}
