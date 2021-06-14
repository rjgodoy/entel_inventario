<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJunctionMeasurementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('junction_measurements', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('junction_id');
        //     $table->bigInteger('r_measure');
        //     $table->bigInteger('s_measure');
        //     $table->bigInteger('t_measure');
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
        // Schema::dropIfExists('junction_measurements');
    }
}
