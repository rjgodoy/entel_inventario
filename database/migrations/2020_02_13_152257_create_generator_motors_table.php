<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneratorMotorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('generator_motors', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('generator_set_id');
        //     $table->bigInteger('generator_motor_type_id');
        //     $table->string('serial_number');
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
        // Schema::dropIfExists('generator_motors');
    }
}
