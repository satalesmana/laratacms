<?php

namespace App\Http\Controllers;

use App\Testimonials;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    public function index(Request $request){
        return Testimonials::get();
    }
}
