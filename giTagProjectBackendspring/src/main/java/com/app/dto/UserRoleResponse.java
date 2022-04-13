package com.app.dto;

import java.util.Set;

import com.app.pojos.Role;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserRoleResponse {

	private Set<Role> roles;
	private String msg;
	private int useId;
}
