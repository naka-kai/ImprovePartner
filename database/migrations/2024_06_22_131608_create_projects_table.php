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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->comment('プロジェクト名');
            $table->foreignId('client_id')->constrained();
            $table->date('scheduled_start_day')->comment('開始予定日');
            $table->date('scheduled_end_day')->comment('締切日');
            $table->dateTime('total_working_hours')->comment('合計作業時間');
            $table->dateTime('total_estimated_time')->comment('合計見積時間');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
