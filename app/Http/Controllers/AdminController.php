<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Product;
use App\User;
use App\Role;

class AdminController extends Controller
{
  public function index (Request $request){
    // if user in no logged in
    if(!Auth::check() && $request->path() != 'login'){
      return redirect('/login');
    }
    if(!Auth::check() && $request->path() == 'login'){
      return view('welcome');
    }
    
    if(Auth::user()->user_type == 'client'){
      return redirect('/login');
    }

    // if user in no logged in
    if($request->path() == 'login'){
      return redirect('/');
    }

    return view('welcome');
  }

  public function logout (){
    Auth::logout();
    return redirect('/login');
  }

  public function addProduct(Request $request){
    $this->validate($request,[
      'name' => 'required',
      'price' => 'required|max:6',
      'description' => 'required',
      'quantity' => 'required',
      'provider_id' => 'required',
      'image' => 'required',
      'country_origin' => 'required',
    ]);

    return Product::create([
      'name' => $request->name,
      'price' => $request->price,
      'description' => $request->description,
      'quantity' => $request->quantity,
      'provider_id' => $request->provider_id,
      'image' => $request->image,
      'country_origin' => $request->country_origin,
    ]); 
  }

  public function editProduct(Request $request){
    $this->validate($request,[
      'name' => 'required',
      'price' => 'required|max:6',
      'description' => 'required',
      'quantity' => 'required',
      'provider_id' => 'required',
      'image' => 'required',
      'country_origin' => 'required',
    ]);

    return Product::where('id', $request->id)->update([
      'name' => $request->name,
      'price' => $request->price,
      'description' => $request->description,
      'quantity' => $request->quantity,
      'provider_id' => $request->provider_id,
      'image' => $request->image,
      'country_origin' => $request->country_origin,
    ]); 
  }
  public function deleteProduct(Request $request){
    $this->validate($request,[
      'id' => 'required',
    ]);

    return Product::find($request->id)->delete(); 
  }

  public function getProduct () {
    return Product::orderBy('created_at', 'desc')->get();
  }

  // all reference to proviter

  public function imageProvider(Request $request){
    // upload file 
    $picName = time().'.'.$request->file->extension();
    $request->file->move(public_path('uploads'), $picName);
    
    return $picName;
  }

  // user Controllers

  public function createUser(Request $request){
    
    $this->validate($request,[
      'name' => 'bail|required',
      'email' => 'bail|required|email|unique:users',
      'password' => 'required|min:6',
    ]);

    $password = bcrypt($request->password);

    return User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => $password,
      'role_id' => $request->role_id,
    ]); 
  }
  public function getUsers () {
    return User::all();
  }

  public function editUser(Request $request){
    $this->validate($request,[
      'name' => 'bail|required',
      'email' => "bail|required|email|unique:users,email,$request->id",
      'password' => 'min:6',
    ]);

    $data = [
      'name' => $request->name,
      'email' => $request->email,
      'user_type' => $request->user_type,
    ];

    if($request->password) {
      $password = bcrypt($request->password);
      $data['password'] = $password;  
    }
  
    return User::where('id', $request->id)->update($data); 
  }

  // admin login
  public function adminLogin(Request $request){
    $this->validate($request,[
      'email' => "bail|required|email",
      'password' => 'bail|required|min:6',
    ]);

    if(Auth::attempt(['email'=> $request->email, 'password' => $request->password])){
      $user = Auth::user();

      if (!$user->role->is_admin){
        Auth::logout();

        return response()->json([
          'msg' => 'This login is only for admins',
        ], 401);
      }

      return response()->json([
        'msg' => 'You are logged in',
        'user' => $user
      ]);
    } else {
      return response()->json([
        'msg' => 'your email or password are incorrect'
      ], 401);
    }
  }

  public function addRole (Request $request) {
    $this->validate($request,[
      'name' => "required",
    ]);

    return Role::create([
      'name' => $request->name,
    ]);
  }

  public function getRoles () {
    return Role::all();
  }

  public function deleteRole (Request $request) {
    $this->validate($request, [
      'id' => 'required',
    ]);

    Role::find($request->id)->delete();
  }

  public function editRole (Request $request) {
    $this->validate($request,[
      'name' => "required",
    ]);

    return Role::where('id', $request->id)->update([
      'name' => $request->name,
    ]);
  }
}
