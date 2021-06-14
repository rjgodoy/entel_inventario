<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomDistributionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('room_distributions', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('room_id')->unsigned();
        //     $table->double('total_capacity')->nullable();
        //     $table->double('used_capacity')->nullable();
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
        // Schema::dropIfExists('room_distributions');
    }
}
