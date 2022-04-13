package com.app.service;

import com.app.dto.ResponsePassDto;
import com.app.dto.UserRoleResponse;

public interface UserService {

	ResponsePassDto retrivepass(String email);

	UserRoleResponse userLoginCheck(String email,String pass);
}
