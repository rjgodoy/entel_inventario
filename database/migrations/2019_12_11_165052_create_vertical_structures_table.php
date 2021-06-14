<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerticalStructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('vertical_structures', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedInteger('pop_id');
        //     $table->unsignedInteger('vertical_structure_type_id');
        //     $table->double('height');
        //     $table->unsignedInteger('mimicked_type_id');
        //     $table->unsignedInteger('use_factor');
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
        // Schema::dropIfExists('vertical_structures');
    }
}
