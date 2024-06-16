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
        if (auth()->user()->roles->first()->name == 'admin' || auth()->user()->roles->first()->name == 'editor') {
            return Inertia::render('Post/PostIndex', [
                'posts' => Post::with('user')->latest()->paginate(5),
            ]);
        } else if (auth()->user()->roles->first()->name == 'writer') {
            return Inertia::render('Post/PostIndex', [
                'posts' => Post::where('user_id', auth()->user()->id)->with('user')->latest()->paginate(5),
            ]);
        }
    }

    public function create()
    {
        return Inertia::render('Post/PostCreate');
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug);
        return Inertia::render('Post/PostShow', [
            'post' => $post->with('user')->first(),
        ]);
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

    public function edit($slug)
    {
        $post = Post::where('slug', $slug)->where('user_id', auth()->user()->id)->first();
        return Inertia::render('Post/PostEdit', [
            'post' => $post
        ]);
    }

    public function update(Request $request, $slug)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:posts,slug,',
            'body' => 'required',
            'description' => 'required',
        ]);

        try {
            DB::transaction(function () use ($request, $slug) {
                $post = Post::where('slug', $slug)->where('user_id', auth()->user()->id)->first();
                $post->update([
                    'title' => $request->title,
                    'body' => $request->body,
                    'description' => $request->description,
                    'slug' => $request->slug
                ]);
            });
            return redirect()->route('posts.index')->with('message', 'Post updated successfully');
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
