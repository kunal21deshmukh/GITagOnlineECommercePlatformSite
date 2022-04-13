package com.app.service;

import java.time.LocalDate;

public interface EmailService {

	void sendEmailForNewRegistration(String email,String pass);
	void sendPassForNewRegistration(String email,String pass);
	void sendMessageToselller(String email);
	void sendInfoAboutOrder(String email,LocalDate deliver);
}
