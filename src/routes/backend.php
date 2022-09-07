<?php

/**
 * @JoneCoder
 */

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    // ------------------login and Logout------------------
    Route::match(['get', 'post'], 'login', 'Auth\AdminLoginController@login')->name('admin.loginme');
    Route::get('logout',        'Auth\AdminLoginController@logout')->name('admin.logout');
    Route::get('login-check',   'Auth\AdminLoginController@loginCheck')->name('admin.loginCheck');



    Route::view('register',   'layouts.backend_app')->name('admin.register');
    Route::post('registation',   'Auth\RegisterController@registation')->name('admin.register');


    Route::get('variablelist', 'LibController@variablelist');

    // ---------------------------------------------------------
    // LOGGED USER CAN ACCESS THIS PORTION (WITHOUT PERMISSION)
    // ---------------------------------------------------------
    Route::group(['namespace' => 'Backend', 'middleware' => 'auth:admin'], function () {
        // ------------------for left menu------------------
        Route::namespace('Menu')->group(function () {
            Route::get('dominionList',                  'DominionController@dominionList');
            Route::get('alldominion',                   'DominionController@AllDominion');
            Route::get('roleList',                      'RoleController@RoleList');
            Route::get('processList/{id?}/{field?}',    'ProcessController@ProcessList')->name('processList');
            Route::get('AllProcess/{id?}/{field?}',     'ProcessController@AllProcess')->name('AllProcess');
            Route::get('rootmenu/{menu?}',              'AuthorizedmenuController@RootMenu')->name('authorizedmenu.rootmenu');
            Route::get('get-dashboard-menus',           'AuthorizedmenuController@dashboardMenu');


            Route::resource( 'role', 'RoleController' );
            Route::resource( 'permission', 'PermissionController' );
            Route::resource( 'process', 'ProcessController' );
            Route::resource( 'dominion', 'DominionController' );
            Route::resource( 'authorizedmenu', 'AuthorizedmenuController' );
        });

        // ------------------Frontend Parent Menu && Content------------------
        Route::get('parent-menus',                      'Website\MenuController@getParentMenu');

        // ------------------admin portion------------------
        Route::get('admin-info',                        'AdminController@adminInfo');
        // ------------------Change password------------------
        Route::post('check-old-password',               'AdminController@checkOldPassword');
        Route::post('change-password',                  'AdminController@passwordChange');

        /*=============CKFINDER=============*/
        Route::view('ckfinder-custom',                  'ckfinder');





        Route::get('monthlyloginhistories', 'AttendanceController@monthlyLoginHistories')->name('attendance.monthlyloginhistories');
    });


    // ---------------------------------------------------------
    // PERMITTED USER CAN ACCESS THIS PORTION
    // ---------------------------------------------------------
   
    Route::group(['namespace' => 'Backend', 'middleware' => 'permission'], function () {
        // ------------------dashboard------------------
        Route::view('dashboard',                'layouts.backend_app')->name('admin.dashboard');
        
        // ------------------Activity Log portion------------------
        Route::get('activityLog',               'ActivityLogController@index')->name('activityLog.index');
        Route::get('activityLog/{id}',          'ActivityLogController@show')->name('activityLog.show');
        Route::get('allRead',                   'ActivityLogController@allRead')->name('activityLog.allRead');
        Route::delete('activityLog/{id}',       'ActivityLogController@destroy')->name('activityLog.destroy');



        //Module resource
        Route::resource( 'user', 'AdminController' );

        Route::resource( 'attendance', 'AttendanceController' );

    });
});
