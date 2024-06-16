<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        if (auth()->user()->roles->first()->name == 'admin') {
            return Inertia::render('Dashboard', [
                'counts' => [
                    'users' => User::count(),
                    'posts' => Post::count(),
                ]
            ]);
        } else if (auth()->user()->roles->first()->name == 'writer') {
            return Inertia::render('Dashboard', [
                'counts' => [
                    'posts' => Post::where('user_id', auth()->user()->id)->count(),
                ]
            ]);
        }
    }
}
