<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('documents', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('user_id');
        //     $table->string('name');
        //     $table->string('content');
        //     $table->string('mime_type');
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
        // Schema::dropIfExists('documents');
    }
}
