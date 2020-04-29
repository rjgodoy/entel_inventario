<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirConditionerConsumptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('air_conditioner_consumptions', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('air_conditioner_id');
        //     $table->bigInteger('r_consumption');
        //     $table->bigInteger('s_consumption');
        //     $table->bigInteger('t_consumption');
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
        // Schema::dropIfExists('air_conditioner_consumptions');
    }
}
