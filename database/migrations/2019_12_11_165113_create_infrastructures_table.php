<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInfrastructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('infrastructures', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedInteger('pop_id');
        //     $table->unsignedInteger('infrastructure_type_id');
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
        // Schema::dropIfExists('infrastructures');
    }
}
