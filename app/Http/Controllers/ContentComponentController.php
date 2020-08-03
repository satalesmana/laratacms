<?php

namespace App\Http\Controllers;

use App\ContentComponent;
use Illuminate\Http\Request;

class ContentComponentController extends Controller
{
    public function index()
    {
        return ContentComponent::get();
    }
}
