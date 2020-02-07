<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('client_connections', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->bigInteger('pop_id');
        //     $table->bigInteger('electric_company_id');
        //     $table->string('client_number');
        //     $table->integer('client_connection_state_id');
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
        // Schema::dropIfExists('client_connections');
    }
}
