<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConnectionClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('connection_clients', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id');
        //     $table->string('client_number');
        //     $table->integer('connection_client_state_id');
        //     $table->string('access_credentials');
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
        // Schema::dropIfExists('connection_clients');
    }
}
