<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Sulthan',
            'email' => 'sulthan.dev@gmail.com',
            'password' => 'password',
        ]);
        User::factory(10)->create();
    }
}
