<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneratorSetCapacitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('generator_set_capacities', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('generator_set_id');
        //     $table->double('prime_capacity')->nullable();
        //     $table->double('used_capacity')->nullable();
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
        // Schema::dropIfExists('generator_set_capacities');
    }
}
