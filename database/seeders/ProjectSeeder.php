<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'name' => 'project1',
                'client_id' => '1',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
            [
                'name' => 'project2',
                'client_id' => '1',
                'scheduled_start_day' => new Carbon('2024-09-01'),
                'scheduled_end_day' => new Carbon('2024-11-31'),
                'total_working_hours' => new Carbon('2024-11-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-11-31 19:55:33'),
            ],
            [
                'name' => 'project3',
                'client_id' => '2',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
            [
                'name' => 'project4',
                'client_id' => '3',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
            [
                'name' => 'project5',
                'client_id' => '5',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
            [
                'name' => 'project6',
                'client_id' => '4',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
            [
                'name' => 'project7',
                'client_id' => '3',
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-12-31'),
                'total_working_hours' => new Carbon('2024-12-31 19:55:33'),
                'total_estimated_time' => new Carbon('2024-12-31 19:55:33'),
            ],
        ]);
    }
}
