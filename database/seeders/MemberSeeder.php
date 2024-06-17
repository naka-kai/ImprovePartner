<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class MemberSeeder extends Seeder
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
        DB::table('members')->insert([
            0 => [
                'last_name' => '管理者',
                'first_name' => 'テスト',
                'last_name_kana' => 'カンリシャ',
                'first_name_kana' => 'テスト',
                'tel' => '01201230123',
                'birthday' => '1980-05-10',
                'other' => '',
                'is_admin' => 1,
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
                'tel' => '01201230123',
                'birthday' => '1990-10-30',
                'other' => '',
                'is_admin' => 0,
                'email' => 'member_test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            1 => [
                'last_name' => 'test',
                'first_name' => 'test',
                'last_name_kana' => 'test',
                'first_name_kana' => 'test',
                'tel' => '01201230123',
                'birthday' => '1990-12-30',
                'other' => '',
                'is_admin' => 0,
                'email' => 'test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
        ]);
    }
}
