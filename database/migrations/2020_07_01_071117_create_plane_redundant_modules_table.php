<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaneRedundantModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('plane_redundant_modules', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('plane_id');
        //     $table->integer('quantity');
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
        // Schema::dropIfExists('plane_redundant_modules');
    }
}
