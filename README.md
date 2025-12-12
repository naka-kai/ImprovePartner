# ImprovePartner

**作業時間の分析ができるタスク管理ツール**

### マイタスク
- フロントのみ
<img width="1917" height="613" alt="mytask" src="https://github.com/user-attachments/assets/c8bb539e-2ab5-4342-86e6-6e8f864bb6fd" />

### プロジェクト
- フロントのみ
<img width="1917" height="613" alt="project" src="https://github.com/user-attachments/assets/edd2aaf2-8fb0-44cf-b4fa-f4ac3c8e45c0" />

## 環境

- Laravel
- Sail
- Tailwindcss
- React
- TypeScript

## 情報

- プロジェクト：http://localhost/

- テスト管理者アドレス：admin_test@test.com
- テスト管理者パス：password

- テストメンバーアドレス：member_test@test.com
- テストメンバーパス：password

## 使い方（全てプロジェクトルートで）

### 初期インストール

```bash
$ sail build --no-cache
```

### 次回以降コンテナ起動

```bash
$ sail up -d
```

### npm install
```bash
$ npm i
```

### vite立ち上げ

```bash
$ npm run dev
```

### マイグレーションの実行

```bash
$ sail php artisan migrate
```

### コンテナ停止

```bash
$ sail down
```

### すべてのテーブルを削除後にマイグレーション・シーダの実行

```bash
$ sail php artisan migrate:fresh --seed
```

### シーダの実行

```bash
$ sail php artisan db:seed
```

### Laravelキャッシュクリア

#### 設定ファイル(config/)のキャッシュをクリア
```bash
$ sail php artisan optimize:clear
```
#### アプリケーションレベルのキャッシュをクリア
```bash
$ sail php artisan cache:clear
```
#### アプリケーションのルートキャッシュをクリア
```bash
$ sail php artisan route:clear
```
#### ビューのキャッシュをクリア
```bash
$ sail php artisan view:clear
```
#### または上記4つを一気に実行
```bash
$ sail php artisan optimize:clear
```
