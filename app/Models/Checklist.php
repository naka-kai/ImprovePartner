<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Checklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
    ];

    public function task(): BelongsToMany
    {
        return $this->belongsToMany(Task::class);
    }

    public function checklist_content(): HasMany
    {
        return $this->hasMany(ChecklistContent::class);
    }
}
