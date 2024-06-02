<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserSeeder extends Seeder
{

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            0 => [
                'last_name' => '管理者',
                'first_name' => 'テスト',
                'last_name_kana' => 'カンリシャ',
                'first_name_kana' => 'テスト',
                'tel' => '000-0000-0000',
                'birthday' => '1980-05-10',
                'other' => '',
                'is_admin' => true,
                'email' => 'admin_test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            1 => [
                'last_name' => 'メンバー',
                'first_name' => 'テスト',
                'last_name_kana' => 'メンバー',
                'first_name_kana' => 'テスト',
                'tel' => '000-0000-0000',
                'birthday' => '1990-10-30',
                'other' => '',
                'is_admin' => false,
                'email' => 'member_test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
        ]);
    }
}
