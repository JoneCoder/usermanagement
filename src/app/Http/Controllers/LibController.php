<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class LibController extends Controller
{
    public $status = array(
        'a' => 'Active',
        'd' => 'Draft',
        'h' => 'Hold',
    );

    public function month()
    {
        $months = [];

        for ($i = 1; $i <= 12; $i++) {
            $months[] = [
                'month' => $i == 12? 1 : (($i == 1)? 12 : (13 - $i)),
                'month_name' => date('F', mktime(0, 0, 0, date('n') - $i, 1))
            ];
        }

        return $months;
    }

    public function years()
    {
        $years = [];
        $previousYear = date("Y",strtotime("-20 year"));

        for ($i = 1; $i <= 25; $i++) {
            $years[] = $previousYear + $i;
        }

        return $years;

    }

    public function variablelist()
    {
        $variablelist = array(
            'status' => $this->status,
            'team_members' => Admin::oldest('name')->get(['id', 'name'])->toArray(),
            'month' => $this->month(),
            'years' => $this->years()
        );
        return $variablelist;
    }
}
