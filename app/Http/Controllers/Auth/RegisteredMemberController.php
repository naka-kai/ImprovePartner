<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredMemberController extends Controller
{
    public function select(): Response
    {
        return Inertia::render('SelectAuth');
    }

    /**
     * Display the registration view.
     */
    public function create(Request $request): Response
    {
        $is_admin = $request->query('isAdmin');

        return Inertia::render('Auth/Register', ['isAdmin' => $is_admin]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'last_name_kana' => 'required|string|max:255',
            'first_name_kana' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.Member::class,
            'tel' => 'required|string|max:21',
            'other' => '',
            'birthday' => 'required',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        
        $birthday = (new Carbon($request->birthday, 'Asia/Tokyo'))->format('Y-m-d');
        $is_admin = (int) $request->query('is_admin');
        
        $member = Member::create([
            'last_name' => $request->last_name,
            'first_name' => $request->first_name,
            'last_name_kana' => $request->last_name_kana,
            'first_name_kana' => $request->first_name_kana,
            'email' => $request->email,
            'tel' => $request->tel,
            'birthday' => $birthday,
            'other' => '',
            'is_admin' => $is_admin,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($member));

        Auth::login($member);

        return redirect(RouteServiceProvider::HOME);
    }
}
