<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Post/PostIndex', [
            'posts' => Post::paginate(5),
        ]);
    }

    public function create()
    {
        return Inertia::render('Post/PostCreate');
    }

    public function store(Request $request)
    {
        // return dd($request->all());
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'description' => 'required',
            'slug' => 'required|unique:posts,slug',
        ]);

        try {
            DB::transaction(function () use ($request) {
                Post::create([
                    'title' => $request->title,
                    'body' => $request->body,
                    'description' => $request->description,
                    'slug' => $request->slug,
                    'user_id' => auth()->user()->id
                ]);
            });
            return redirect()->route('posts.index')->with('message', 'Post created successfully');
        } catch (\Exception $e) {
            return back()->with('errors', $e->getMessage());
        }
    }

    public function destroy(Post $post)
    {
        try {
            DB::transaction(function () use ($post) {
                $post->delete();
            });
            return redirect()->route('posts.index')->with('message', 'Post deleted successfully');
        } catch (\Exception $e) {
            return back()->with('errors', $e->getMessage());
        }
    }
}
