<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('MyTask', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/select-auth', function () {
    return Inertia::render('SelectAuth');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
});

Route::middleware('auth')->group(function () {
    Route::get('/project', function () {
        return Inertia::render('Project');
    });
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    });
    Route::get('/analysis', function () {
        return Inertia::render('Analysis');
    });
    Route::get('/export', function () {
        return Inertia::render('Export');
    });
    Route::get('/setting', function () {
        return Inertia::render('Setting');
    });
});

Route::group(['middleware' => ['auth', 'can:isAdmin']], function () {
    Route::get('/member', function () {
        return Inertia::render('Member');
    });
    Route::get('/client', function () {
        return Inertia::render('Client');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// require __DIR__.'/auth.php';
