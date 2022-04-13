package com.app.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

		@Autowired
		private JavaMailSenderImpl emailSender;

		public void sendEmailForNewRegistration(String email,String pass) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("gitag12345onlineservice@gmail.com");
			message.setTo(email);
			message.setSubject(" Thank you for Registering with us!");
			message.setText(" Welcome to GI Tag ethnic products!!! Thank you for Registering with us! Your password is "+pass +" "+"Please proceed to login page=> http://localhost:3000/LoginPage");
			emailSender.send(message);
		}
		public void sendPassForNewRegistration(String email,String pass) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("gitag12345onlineservice@gmail.com");
			message.setTo(email);
			message.setSubject(" Thank you for Registering with us!");
			message.setText(" Welcome to GI Tag ethnic products!!!  Your retrieved password is "+pass +" "+"Please proceed to login page=> http://localhost:3000/LoginPage");
			emailSender.send(message);
		}
		@Override
		public void sendMessageToselller(String email) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("gitag12345onlineservice@gmail.com");
			message.setTo(email);
			message.setSubject(" Thank you for Registering with us!");
			message.setText(" Welcome to GI Tag ethnic products!!!  Please Improve your service....orelse you will be blocked");
			emailSender.send(message);
		}
		@Override
		public void sendInfoAboutOrder(String email,LocalDate deliver) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("gitag12345onlineservice@gmail.com");
			message.setTo(email);
			message.setSubject(" Thank you for Registering with us!");
			message.setText(" Welcome to GI Tag ethnic products!!!  your ordder has been confired Thank you for shopping It will deliver on "+deliver);
			emailSender.send(message);
		}
		
		

}
