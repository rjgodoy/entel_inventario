<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatteryBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('battery_banks', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('power_rectifier_id')->unsigned();
        //     $table->bigInteger('battery_brand_id')->unsigned()->nullable();
        //     $table->double('capacity')->nullable();
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
        // Schema::dropIfExists('battery_banks');
    }
}
