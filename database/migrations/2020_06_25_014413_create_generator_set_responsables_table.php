<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneratorSetResponsablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('generator_set_responsables', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('generator_set_id')->unsigned();
        //     $table->bigInteger('generator_set_responsable_area_id')->unsigned();
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
        // Schema::dropIfExists('generator_set_responsables');
    }
}
