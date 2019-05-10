<?php

namespace App\Traits;


use App\Models\Role;
use App\Models\RoleLimit;
use App\Models\RoleAddon;

trait Permissible
{
    public function hasRole($roleName)
    {
        return Role::where("id", $this->role_id)->where("name", strtolower($roleName))->exists() || $this->hasAddon($roleName);
    }

    public function hasPermission($permission)
    {
        if ($role = Role::where("id", $this->role_id)->first()) {

            return $role->permissions()->where("name", strtolower($permission))->exists() || $this->hasAddonPermission($permission);
        }

        return false;
    }

    public function hasAddon($addon)
    {
        return $this->roleAddons()->where("name", strtolower($addon))->exists();
    }

    public function hasAddonPermission($permission)
    {
        $addons = $this->roleAddons()->get();

        foreach($addons as $addon){
            if($addon->permissions()->where("name", strtolower($permission))->exists()) return true;
        }

        return false;
    }

    public function setRole($roleName)
    {
        $roleName = strtolower($roleName);

        if ($role = Role::where("name", $roleName)->first()) {
            $this->role_id = $role->id;
            $this->save();
        }
    }

    public function setAddon($addonName)
    {
        $addonName = strtolower($addonName);

        if($addon = RoleAddon::where("name", $addonName)->first()){
            $this->roleAddons()->attach($addon->id);
        }
    }

    public function getLimit($type)
    {
        if($limit = RoleLimit::where("role_id", $this->role_id)->first()){
            return $limit->{$type};
        }

        return 0;
    }
}