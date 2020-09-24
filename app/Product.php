<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $table = "products";

  protected $fillable = ['image', 'name', 'description', 'price', 'country_origin', 'quantity', 'provider_id'];

}
