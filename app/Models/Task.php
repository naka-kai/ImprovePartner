<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_stop',
        'title',
        'status',
        'priority',
        'scheduled_start_day',
        'scheduled_end_day',
        'working_hours',
        'estimated_time',
        'think_estimated_time',
        'progress_rate',
        'description'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function files(): HasMany
    {
        return $this->hasMany(File::class);
    }

    public function checklists(): BelongsToMany
    {
        return $this->belongsToMany(Checklist::class);
    }
}
