<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthorizedmenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authorizedmenus', function (Blueprint $table) {
            $table->id();
            $table->integer('parent_id');
            $table->integer('dominion_id');
            $table->integer('process_id');
            $table->string('name', 100);
            $table->string('params', 100)->nullable();
            $table->string('icon', 100)->nullable();
            $table->string('route_name', 100)->nullable();
            $table->string('guard', 100)->nullable();
            $table->integer('position');
            $table->boolean('show_dashboard')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authorizedmenus');
    }
}
