<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('clients')->insert([
            [
                'name' => 'client1',
                'manager_first_name' => 'aaa',
                'manager_last_name' => 'aaaa',
                'manager_first_name_kana' => 'aaa',
                'manager_last_name_kana' => 'aaaa',
                'email' => 'aaa@test.com',
                'tel' => '012-3456-7890',
                'other' => '',
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            [
                'name' => 'client2',
                'manager_first_name' => 'bbb',
                'manager_last_name' => 'bbbb',
                'manager_first_name_kana' => 'bbb',
                'manager_last_name_kana' => 'bbbb',
                'email' => 'bbb@test.com',
                'tel' => '012-3456-7890',
                'other' => '',
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            [
                'name' => 'client3',
                'manager_first_name' => 'ccc',
                'manager_last_name' => 'cccc',
                'manager_first_name_kana' => 'ccc',
                'manager_last_name_kana' => 'cccc',
                'email' => 'ccc@test.com',
                'tel' => '012-3456-7890',
                'other' => '',
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            [
                'name' => 'client4',
                'manager_first_name' => 'ddd',
                'manager_last_name' => 'dddd',
                'manager_first_name_kana' => 'ddd',
                'manager_last_name_kana' => 'dddd',
                'email' => 'ddd@test.com',
                'tel' => '012-3456-7890',
                'other' => '',
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
            [
                'name' => 'client5',
                'manager_first_name' => 'eee',
                'manager_last_name' => 'eeee',
                'manager_first_name_kana' => 'eee',
                'manager_last_name_kana' => 'eeee',
                'email' => 'eee@test.com',
                'tel' => '012-3456-7890',
                'other' => '',
                'created_at' => new Carbon(),
                'updated_at' => new Carbon()
            ],
        ]);
    }
}
