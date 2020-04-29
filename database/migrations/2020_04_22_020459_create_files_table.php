<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('files', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('user_id');
        //     $table->string('dirname');
        //     $table->string('basename');
        //     $table->string('extension');
        //     $table->string('filename');
        //     $table->bigInteger('size');
        //     $table->string('mime');
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
        // Schema::dropIfExists('files');
    }
}
