<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElectricLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('electric_lines', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id')->unsigned();
        //     $table->bigInteger('electric_line_type_id')->unsigned();
        //     $table->bigInteger('phase_type_id')->unsigned();
        //     $table->float('distance');
        //     $table->float('volt');
        //     $table->bigInteger('transformer_id')->unsigned();
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
        // Schema::dropIfExists('electric_lines');
    }
}
