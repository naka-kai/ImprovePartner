<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * ユーザー登録
     *
     * @param Request $request
     * @return void
     */
    public function register(Request $request)
    {
        // バリデーション
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            // バリデーション通過失敗時、エラーを返す
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        } else {
            // バリデーション通過成功時、ユーザー作成する
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // トークン作成
            $token = $user->createToken($user->email . '_Token')->plainTextToken;

            // 
            return response()->json([
                'status' => 200,
                'username' => $user->name,
                'token' => $token,
                'message' => 'ユーザー登録が成功しました',
            ]);
        }
    }
    
    /**
     * ログイン
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        // バリデーション
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|max:255',
            'password' => 'required']);

        if ($validator->fails()) {
            // バリデーション通過失敗時、エラーを返す
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        } else {
            // バリデーション通過成功時、ユーザー情報を取得
            $user = User::where('email', $request->email)->first();
            // Log::info($user);

            // ユーザー認証
            if (! $user || ! Hash::check($request->password, $user->password)) {
                // 認証失敗時、エラーを返す
                return response()->json([
                    'status' => 401,
                    'message' => '認証に失敗しました',
                ]);
            } else {
                // Log::info('OK');

                // 認証成功時、権限を付加してログイン
                // 違う方法で試しているため一旦コメントアウト
                // if ($user->is_admin == true) {
                //     $abilities = ['*']; // 管理者権限
                // } else {
                //     $abilities = ['member']; // メンバー権限
                // }

                // トークン作成
                $token = $user->createToken($user->email . '_Token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'token' => $token,
                    'message' => 'ログインに成功しました',
                ]);
            }
        }
    }

    /**
     * ログアウト
     *
     * @param Request $request
     * @return void
     */
    public function logout(Request $request)
    {
        // ユーザー認証されているかチェック
        if ($user = auth()->user()) {
            // 認証成功時、トークンを削除しログアウト
            $user->tokens()->delete();
            return response()->json([
                'status' => 200,
                'message' => 'ログアウトしました'
            ]);
        } else {
            // 認証失敗時、エラーを返す
            return response()->json([
                'status' => 401,
                'message' => '認証情報がありません'
            ]);
        }
        
    }
}
