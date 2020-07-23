<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendmailRequest;
use App\Jobs\SendEmailMessagesJob;
use App\Mail\SendEmailMessages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WebclientController extends Controller
{
    public function index()
    {
        return view('app');
    }

    public function sendMail(SendmailRequest $request){
        $msg=[];
        $email = new SendEmailMessages($request->all());
        try {
            Mail::to(explode(',',env('MAIL_APPLIST')))->send($email);
            $msg = ['status' => 'error', 'message' => 'Messages successfully send to Administrator'];

        } catch (\Exception $e) {
             $msg = ['status' => 'error', 'message' => 'Failed to send email.' . $e->getMessage()];
        }

        return $msg;
    }

}
