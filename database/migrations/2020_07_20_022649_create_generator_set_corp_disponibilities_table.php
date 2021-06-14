<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneratorSetCorpDisponibilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('generator_set_corp_disponibilities', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('generator_set_id')->unsigned();
        //     $table->double('total_capacity');
        //     $table->double('used_capacity');
        //     $table->double('available_capacity');
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
        // Schema::dropIfExists('generator_set_corp_disponibilities');
    }
}
