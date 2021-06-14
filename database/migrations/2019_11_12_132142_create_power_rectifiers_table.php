<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePowerRectifiersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('power_rectifiers', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id');
        //     $table->bigInteger('power_rectifier_type_id')->nullable();
        //     $table->integer('modules')->nullable();
        //     $table->double('max_capacity')->nullable();
        //     $table->double('volt')->nullable();
        //     $table->string('serial_number')->nullable();
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
        // Schema::dropIfExists('power_rectifiers');
    }
}
