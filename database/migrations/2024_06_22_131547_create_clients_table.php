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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->comment('取引先名');
            $table->string('manager_first_name', 255)->comment('担当者_姓');
            $table->string('manager_last_name', 255)->comment('担当者_名');
            $table->string('manager_first_name_kana', 255)->comment('担当者_セイ');
            $table->string('manager_last_name_kana', 255)->comment('担当者_メイ');
            $table->string('email')->unique()->comment('メールアドレス');
            $table->string('tel', 21)->comment('電話番号');
            $table->text('other')->nullable()->comment('その他');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
