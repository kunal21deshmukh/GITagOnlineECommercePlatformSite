package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Role;

import com.app.pojos.UserRole;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	//finder method to load role by rolename
		Optional<Role> findByRole(UserRole roleName);
}
