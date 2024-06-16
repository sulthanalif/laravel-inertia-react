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
        $admin = User::create([
            'name' => 'Sulthan',
            'email' => 'sulthan.dev@gmail.com',
            'password' => 'password',
        ]);
        $admin->assignRole('admin');

        $writers = User::factory(5)->create();
        foreach ($writers as $writer) {
            $writer->assignRole('writer');
        }

        $editors = User::factory(5)->create();
        foreach ($editors as $editor) {
            $editor->assignRole('editor');
        }

    }
}
