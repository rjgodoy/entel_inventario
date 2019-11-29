<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneratorGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('generator_groups', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id');
        //     $table->bigInteger('generator_group_type_id');
        //     $table->bigInteger('generator_group_model_id');
        //     $table->double('power');
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
        // Schema::dropIfExists('generator_groups');
    }
}
