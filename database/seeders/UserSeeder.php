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
                'name' => '管理者',
                'is_admin' => 1,
                'email' => 'admin_test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            1 => [
                'name' => 'メンバー',
                'is_admin' => 0,
                'email' => 'member_test@test.com',
                'password' => static::$password ??= Hash::make('password'),
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
        ]);
    }
}
