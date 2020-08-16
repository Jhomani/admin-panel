<?php

use Illuminate\Support\Facades\Route;
use App\Articulo;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::any('{slug}', function(){
  return view('welcome');
});

Route::get('/', 'myController@index');

Route::get('/test', function () {
  return view('welcome');
});

Route::get('/insert', function () {
  DB::insert('insert into articulos (name, price, country_origin, watchs, section) values(?,?,?,?,?)',
             ['Cerbeza', 82.5, 'Mexico', 'it is sweet', 'drinks']);
});

Route::get('/select', function () {
  $results = DB::select("select * from articulos where id > ?", [0]);

  foreach($results as $article) {
    echo ($article->id);
  }
});

Route::get('/update', function () {
  DB::update("update articulos set name='Cerveza', country_origin='Mexico' where id = ?", [2]);
});

Route::get('/delete', function () {
  DB::delete("delete from articulos where id=?", [2]);
});

Route::get('/leer', function () {
  $articulos = Articulo::all();

  foreach($articulos as $articulo){
    echo ($articulo->name) . '<br>';
  }
});
