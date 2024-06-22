<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_stop')->comment('停止中');
            $table->string('title', 255)->comment('タスク名');
            $table->integer('status')->comment('ステータス');
            $table->integer('priority')->comment('優先度');
            $table->dateTime('scheduled_start_day')->comment('開始予定日');
            $table->dateTime('scheduled_end_day')->comment('締切日');
            $table->dateTime('working_hours')->comment('作業時間');
            $table->dateTime('estimated_time')->comment('見積時間');
            $table->dateTime('think_estimated_time')->comment('予想見積時間');
            $table->integer('progress_rate')->comment('進捗率');
            $table->text('description')->nullable()->comment('説明');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
