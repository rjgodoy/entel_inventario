<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePowerRectifierTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('power_rectifier_types', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->string('power_rectifier_type');
        //     $table->string('power_rectifier_model');
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
        // Schema::dropIfExists('power_rectifier_types');
    }
}
