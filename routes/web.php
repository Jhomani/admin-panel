<?php

use Illuminate\Support\Facades\Route;
use App\Product;
use App\Http\Middleware\AdminCheck;

Route::get('/', 'AdminController@index');
Route::any('{slug}', 'AdminController@index');
Route::get('/user/logout', 'AdminController@logout');


Route::prefix('app')->middleware([AdminCheck::class])->group(function(){
  Route::post('/add-product', 'AdminController@addProduct');
  Route::get('/get-products', 'AdminController@getProduct');
  Route::post('/edit-product', 'AdminController@editProduct');
  Route::post('/delete-product', 'AdminController@deleteProduct');
  Route::post('/image-provider', 'AdminController@imageProvider');
  Route::post('/create_user', 'AdminController@createUser');
  Route::get('/get_users', 'AdminController@getUsers');
  Route::post('/edit_user', 'AdminController@editUser');
  Route::post('/admin_login', 'AdminController@adminLogin');

  Route::post('/add_role', 'AdminController@addRole');
  Route::get('/get_roles', 'AdminController@getRoles');
  Route::post('/delete_role', 'AdminController@deleteRole');
  Route::post('/edit_role', 'AdminController@editRole');
});


//Auth::routes();
//Route::get('/home', 'HomeController@index')->name('home');

