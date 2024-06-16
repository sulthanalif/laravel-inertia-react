<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/UserIndex', [
            'users' => User::with('roles')->latest()->paginate(5),
        ]);
    }

    public function create()
    {
        return Inertia::render('User/UserCreate', [
            'roles' => Role::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'role' => ['required'],
        ]);

        try {
            DB::transaction(function () use($request) {
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => $request->email
                ]);

                $user->assignRole($request->role);
            });
            return redirect()->route('users.index')->with('message', 'User created successfully!');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    public function destroy(User $user)
    {
        try {
            DB::transaction(function () use ($user) {
                $user->delete();
            });
            return redirect()->route('users.index')->with('message', 'User deleted successfully');
        } catch (\Exception $e) {
            return back()->with('errors', $e->getMessage());
        }
    }
}
