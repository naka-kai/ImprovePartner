<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'checklist_id',
    ];

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }
}
