<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRcasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('rcas', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id')->nullable();
        //     $table->string('titulo');
        //     $table->boolean('emission_declaration');
        //     $table->string('observations')->nullable();
        //     $table->boolean('dia_type_id');
        //     $table->boolean('state_id');
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
        // Schema::dropIfExists('rcas');
    }
}
