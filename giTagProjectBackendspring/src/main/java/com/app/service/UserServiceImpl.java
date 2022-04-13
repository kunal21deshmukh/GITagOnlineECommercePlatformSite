package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.SubscriberRepository;
import com.app.dao.UserEntityRepository;
import com.app.dto.ResponsePassDto;
import com.app.dto.UserRoleResponse;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Role;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserEntityRepository userRepo;
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private SubscriberRepository subscrRepo;
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private EmailService emailServ;
	
	
	//============================================================================================================
	//to retrive passsword
	@Override
	public ResponsePassDto retrivepass(String email) {
		UserEntity user=userRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("Auth Failed"));
		System.out.println("retrive pass"+user.getPassword());
		emailServ.sendPassForNewRegistration(email, user.getPassword());
		return new ResponsePassDto(user.getPassword());
	}

	//=============================================================================================================
	
	//to authentication
	@Override
	public UserRoleResponse userLoginCheck(String email,String pass) {
		String msg="Authentication fails!!!";
		int usId=0;
		//user get kartoy ---jr null asel tr exception throw hoil naitr user user madhe store hoil
		UserEntity user=userRepo.findByEmailAndPassword(email,pass).orElseThrow(() -> new RuntimeException("Auth Failed"));
		System.out.println("details as"+user.getId()); //to get id of user.
		Set<Role> roles = user.getRoles(); //roles associated with user but presently one user has one role
		List<Role> list = new ArrayList<Role>(roles); //putting in list 
		  
        System.out.println("Element at index 0 is: "
                           + list.get(0));  //role milel
        Role role=list.get(0); //storing role in (Role role)
        System.out.println(role.getId());
		msg="you have succesfully login";
		System.out.println(roles);
		if(user!=null) 
		{ 
			 System.out.println("inside outer if");
			if(role.getId()==2) //if id=2 then as per table user_roles in DB it is customer
			{
				System.out.println("inside customer if");
				Customer cust=custRepo.findByUserId(user.getId()); //getting customer by userid which is FK in customer table
				if(cust!=null)
				{
					usId= cust.getId(); //storing id of customer from customer_tbl in usId and forwarding that usId to front end.
					 System.out.println("customer id "+usId);
					 msg="succesful athentication";
				}
			}
			else if(role.getId()==3)
			{
				Subscriber sub=subscrRepo.findByUserId(user.getId());
				if(sub!=null && sub.getUser().isActive()==true)
				{
					usId= sub.getId();
					System.out.println("subscriber id "+usId);
					msg="succesful athentication";
				}
				else
				{
					msg="you have been block by admin!!! please contact us....";
				}
			} 
			else if(role.getId()==1)
			{
				System.out.println("in admin else if");
				//Admin adminss=new Admin();
				Admin admin=adminRepo.findByUserId(user.getId());
				
				
				System.out.println("admins id ========>"+admin.getAdminName());
				//Admin admin=adminRepo.findById(id).orElseThrow(()->new RuntimeException("no admin present"));
				System.out.println("details of admin-------////--------"+admin.getAdminName());
				if(admin!=null)
				{
					usId= admin.getId();
					System.out.println("subscriber id "+usId);
					msg="succesful athentication";
				}
				
			}
				
			System.out.println("message as  "+msg);
		}
		return new UserRoleResponse(roles,msg,usId);

	}
	//=============================================================================================================
	
}
