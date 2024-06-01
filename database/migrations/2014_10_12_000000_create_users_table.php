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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('last_name', 255)->comment('姓');
            $table->string('first_name', 255)->comment('名');
            $table->string('last_name_kana', 255)->comment('セイ');
            $table->string('first_name_kana', 255)->comment('メイ');
            $table->string('tel', 255)->comment('電話番号');
            $table->date('birthday')->comment('生年月日');
            $table->text('other')->nullable()->comment('その他');
            $table->integer('isAdmin')->default(0)->comment('管理者フラグ(0: メンバー, 1: 管理者)');
            $table->string('email')->unique()->comment('メールアドレス');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->comment('パスワード');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
