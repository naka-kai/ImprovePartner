<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            [
                'is_stop' => true,
                'title' => 'task1',
                'status' => 1,
                'priority' => 1,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 40,
                'description' => '',
            ],
            [
                'is_stop' => false,
                'title' => 'task2',
                'status' => 1,
                'priority' => 1,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 30,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task3',
                'status' => 2,
                'priority' => 1,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 50,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task4',
                'status' => 1,
                'priority' => 2,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 30,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task5',
                'status' => 3,
                'priority' => 3,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 10,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task6',
                'status' => 1,
                'priority' => 3,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 30,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task7',
                'status' => 3,
                'priority' => 1,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 0,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task8',
                'status' => 1,
                'priority' => 2,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 30,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task9',
                'status' => 2,
                'priority' => 1,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 100,
                'description' => '',
            ],
            [
                'is_stop' => true,
                'title' => 'task10',
                'status' => 1,
                'priority' => 2,
                'scheduled_start_day' => new Carbon('2024-10-01'),
                'scheduled_end_day' => new Carbon('2024-10-01'),
                'working_hours' => new Carbon('2024-12-31 3:00:00'),
                'estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'think_estimated_time' => new Carbon('2024-12-31 3:00:00'),
                'progress_rate' => 60,
                'description' => '',
            ],
        ]);
    }
}
