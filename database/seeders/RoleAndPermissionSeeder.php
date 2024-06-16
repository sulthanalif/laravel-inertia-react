<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create roles
        $adminRole = Role::create(['name' => 'admin']);
        $writerRole = Role::create(['name' => 'writer']);
        $editorRole = Role::create(['name' => 'editor']);

        // Create permissions
        $createPermission = Permission::create(['name' => 'create']);
        $editPermission = Permission::create(['name' => 'edit']);
        $deletePermission = Permission::create(['name' => 'delete']);
        $showPermission = Permission::create(['name' => 'show']);

        // Attach permissions to roles
        $adminRole->givePermissionTo([$createPermission, $editPermission, $deletePermission, $showPermission]);
        $writerRole->givePermissionTo([$createPermission, $showPermission]);
        $editorRole->givePermissionTo([$editPermission, $showPermission]);


    }
}
