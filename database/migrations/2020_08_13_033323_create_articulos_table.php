<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulosTable extends Migration
{
  public function up()
  {
    Schema::create('articulos', function (Blueprint $table) {
      $table->id();
      $table->string("name");
      $table->decimal("price");
      $table->string("country_origin");
      $table->text("watchs");
      $table->timestamps();
    });
  }

  public function down()
  {
    Schema::dropIfExists('articulos');
  }
}
