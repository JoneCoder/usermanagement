<?php
/*
 *  @Developed By: JoneCoder
 */

namespace App\Http\Controllers\Backend;

use Auth;
use App\Models\Attendance;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    public function monthlyLoginHistories(Request $request)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        $list=[];
        $month = $request->month?? date('m');
        $year = $request->year?? date('Y');

        for($d=1; $d<=31; $d++)
        {
            $time = mktime(12, 0, 0, $month, $d, $year);
            if (date('m', $time) == $month)
                $list[]= ['date' => date('Y-m-d', $time), 'today' => ((date('Y-m-d') == date('Y-m-d', $time))? 1 : 0), 'day_number' => $d, 'day' => date('D', $time)];
        }

        $query = Attendance::oldest('created_at')
            ->whereMonth('login_time', $month)
            ->whereYear('login_time', $year);

        if($request->admin_id){
            $query->where('admin_id', $request->admin_id);
        }

        $loginHistory = $query->get();

        $users = Admin::select('id', 'name');

        if($request->admin_id){
            $users->where('id', $request->admin_id);
        }

        $users = $users->get()->each(function ($user) use($list, $loginHistory){
            $working_history = [];
            foreach ($list as $item){
                $working_history[] = [
                    'day' => $item['day'],
                    'today' => ((date('Y-m-d') == $item['date'])? 1 : 0),
                    'login_history' => $loginHistory->where('login_date', $item['date'])->where('admin_id', $user->id)->first()
                ];
            }

            $user->working_history = $working_history;

            return $user;

        });

        return ['day_list' => $list, 'users' => $users];
    }

}
