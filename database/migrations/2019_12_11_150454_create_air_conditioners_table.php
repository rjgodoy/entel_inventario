<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirConditionersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('air_conditioners', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedInteger('pop_id');
        //     $table->unsignedInteger('air_conditioner_brand_id');
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
        // Schema::dropIfExists('air_conditioners');
    }
}
