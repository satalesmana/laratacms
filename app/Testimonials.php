<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Testimonials extends Model
{
    use SoftDeletes;
    protected $table = "testimonials";
    protected $filable=['name','foto','jabatan','testimonials'];
    
    
}
