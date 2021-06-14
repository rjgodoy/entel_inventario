<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJunctionProtectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('junction_protections', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('junction_id');
        //     $table->string('name');
        //     $table->string('protection_type');
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
        // Schema::dropIfExists('junction_protections');
    }
}
