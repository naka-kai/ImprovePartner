<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'manager_first_name',
        'manager_last_name',
        'manager_first_name_kana',
        'manager_last_name_kana',
        'email',
        'tel',
        'other',
    ];
    
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
}
