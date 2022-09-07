<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Menu\Role;
use App\Models\Attendance;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Auth;

class RegisterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            're_password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new Admin instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Admin
     */
    protected function create(array $data)
    {
        $role = Role::where('name', 'Member')->first();

        return Admin::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'role_id' => ($role)? $role['id'] : null,
            'email' => $data['email'],
            'password' => $data['password'],
        ]);
    }

    
    public function registation(Request $request)
    {
        if($this->validator($request->all())){
            $admin = $this->create($request->all());

            $arr = [
                'email'     => $admin->email,
                'password'  => $request->password,
                'status'    => 'a'
            ];

            if (Auth::guard('admin')->attempt($arr, $request->remember)) {

                $this->putLogHistory(Auth::guard('admin')->user()->id);
                return response([
                    'message'   => "Login Successfully",
                    'id'        => Auth::guard('admin')->user()->id ?? "",
                    'name'      => Auth::guard('admin')->user()->name ?? "",
                    'role'      => Auth::guard('admin')->user()->role->name ?? ""
                ], 200);
            }
        }else{
            return response(['message'  => "Something went wrong!"], 201);
        }

    }


    public function putLogHistory($admin_id){
        $today = date('Y-m-d');
        $query = Attendance::latest();
        $query->where('admin_id',$admin_id)->whereDate('login_date',$today);
        $loginfo = $query->first();
        if($loginfo){
            return true;
        }else{
            $arr = [
                'admin_id'=>$admin_id,
                'login_time'=>Carbon::now(),
                'login_date'=> $today,
            ];
            return Attendance::create($arr);
        }
        return false;
    }

}
