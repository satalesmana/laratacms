<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentComponent extends Model
{
    protected $table = 'content_component';
    protected $fillabe = ['themes','location','component'];
}
