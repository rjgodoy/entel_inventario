<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirConditionerCondensersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('air_conditioner_condensers', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('air_conditioner_id');
        //     $table->bigInteger('air_conditioner_condenser_brand_id');
        //     $table->double('capacity');
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
        // Schema::dropIfExists('air_conditioner_condensers');
    }
}
