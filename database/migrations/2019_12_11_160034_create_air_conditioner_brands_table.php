<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirConditionerBrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('air_conditioner_brands', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('air_conditioner_type_id');
        //     $table->string('air_conditioner_brand');
        //     $table->string('air_conditioner_model');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('air_conditioner_brands');
    }
}
