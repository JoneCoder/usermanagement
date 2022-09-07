<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'layouts.frontend_app')->name('home.page');


Route::view('contact', 'layouts.frontend_app');
Route::view('resume', 'layouts.frontend_app');
Route::view('blog', 'layouts.frontend_app');
Route::view('blog/{id}', 'layouts.frontend_app');
Route::view('services', 'layouts.frontend_app');
Route::view('portfolio', 'layouts.frontend_app');
Route::view('portfolio/video', 'layouts.frontend_app');
Route::view('portfolio/graphic', 'layouts.frontend_app');
Route::view('portfolio/web', 'layouts.frontend_app');
