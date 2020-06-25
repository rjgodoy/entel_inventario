<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolarPanelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('solar_panels', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('junction_id')->unsigned();
        //     $table->double('unit_capacity_group_1')->nullable();
        //     $table->integer('quantity_group_1')->nullable();
        //     $table->double('unit_capacity_group_2')->nullable();
        //     $table->integer('quantity_group_2')->nullable();
        //     $table->double('unit_capacity_group_3')->nullable();
        //     $table->integer('quantity_group_3')->nullable();
        //     $table->double('unit_capacity_group_4')->nullable();
        //     $table->integer('quantity_group_4')->nullable();
        //     $table->double('unit_capacity_group_5')->nullable();
        //     $table->integer('quantity_group_5')->nullable();
        //     $table->double('unit_capacity_group_6')->nullable();
        //     $table->integer('quantity_group_6')->nullable();
        //     $table->timestamps();
        //     $table->softDeletes();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('solar_panels');
    }
}
