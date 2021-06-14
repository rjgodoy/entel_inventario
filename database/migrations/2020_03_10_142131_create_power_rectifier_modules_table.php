<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePowerRectifierModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('power_rectifier_modules', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('power_rectifier_id');
        //     $table->integer('quantity');
        //     $table->double('capacity');
        //     $table->string('unit');
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
        // Schema::dropIfExists('power_rectifier_modules');
    }
}
