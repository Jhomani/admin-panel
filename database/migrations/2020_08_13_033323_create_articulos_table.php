<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulosTable extends Migration
{
  public function up()
  {
    Schema::create('products', function (Blueprint $table) {
      $table->id();
      $table->string("name");
      $table->string("description");
      $table->decimal("price");
      $table->string("country_origin");
      $table->string("image");
      $table->integer("quantity");
      $table->integer("provider_id");
      $table->timestamps();
    });
  }

  public function down()
  {
    Schema::dropIfExists('products');
  }
}
