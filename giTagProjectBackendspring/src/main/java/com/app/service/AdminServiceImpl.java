package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FeedBackRepository;
import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SubscriberRepository;
import com.app.dao.UserEntityRepository;
import com.app.pojos.FeedBack;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	
	@Autowired
	private SubscriberRepository subscrRepo;
	@Autowired
	private ProductRepository productRepo;
	@Autowired
	private OrderRepository orderRepo;
	@Autowired
	private UserEntityRepository userRepo;
	@Autowired
	private FeedBackRepository feedRepo;
	@Autowired
	private EmailService emailServ;
	
	@Override
	public List<Subscriber> getAllsubscriberDetails() {
		List<Subscriber> findAll = subscrRepo.findAll();
		return findAll;
	}
	
	@Override
	public String sendMailSubscriber(int id) {
		Subscriber findById = subscrRepo.findById(id).orElseThrow(()->new RuntimeException("no subscriber get"));
		String email = findById.getUser().getEmail();
		emailServ.sendMessageToselller(email);
		//subscrRepo.delete(findById);
		return "message sent to successfully";
	}

	@Override
	public List<Product> getAllProductDetails() {
		List<Product> findAll = productRepo.findAll();
		return findAll;
	}

	@Override
	public List<Order> getAllOrderDetails() {
		List<Order> findAll = orderRepo.findAll();
		return findAll;
	}

	@Override
	public String blockSubscriberLogin(int id) {
		Subscriber findById = subscrRepo.findById(id).orElseThrow(()->new RuntimeException("no subscriber get"));
		UserEntity user = findById.getUser();//
		user.setActive(false);
		userRepo.save(user);
		return "successfully block this subscriber";
	}
	
	@Override
	public String UnblockSubscriberLogin(int id) {
		Subscriber findById = subscrRepo.findById(id).orElseThrow(()->new RuntimeException("no subscriber get"));
		UserEntity user = findById.getUser();//
		user.setActive(true);
		userRepo.save(user);
		return "successfully unblock this subscriber";
	}

	@Override
	public List<FeedBack> getAllFeedbackDetails() {
		List<FeedBack> findAll = feedRepo.findAll();
		return findAll;
	}

}
