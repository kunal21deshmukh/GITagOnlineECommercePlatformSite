package com.app.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dto.CartDetailsDto;
import com.app.dto.CartDto;
import com.app.dto.CartItemDto;
import com.app.dto.FinalOrder;
import com.app.dto.OrderDetails;
import com.app.dto.OrderDetailsList;
import com.app.dto.UpdateCartQtyDto;
import com.app.pojos.Customer;
import com.app.pojos.CustomerCart;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.Role;

@Service
@Transactional
public class CartServiceImpl implements CartService {

	@Autowired
	private ProductRepository prodRepo;
	@Autowired
	private CustomerRepository custoRepo;
	@Autowired
	private CartRepository cartRepo;
	@Autowired
	private OrderRepository orderRepo;
	private double totalcost;
	@Autowired
	private EmailService emailServ;
	@Override
	
	public String addToCart(CartDetailsDto cartdata) {
		int custid=cartdata.getId();
		//get customer
		Customer customer=custoRepo.findById(custid).orElseThrow(()->new RuntimeException("no customer found"));
		int prodid=cartdata.getProdId();
		//get prodcut
		Product product=prodRepo.findById(prodid).orElseThrow(()->new RuntimeException("no prodcut found"));
		int qty=cartdata.getCartquantity();
		CustomerCart cart=new CustomerCart();
		if(customer!=null && product!=null)
		{
		cart.setCreationDate(LocalDate.now());
		cart.setCustomer(customer);
		cart.setProduct(product);
		if(qty==0)
		{
			cart.setCartquantity(1);
		}
		else
			cart.setCartquantity(qty);
		cartRepo.save(cart);
		return "product added to cart succesfully";
		}
		else 
			return "product not added to cart";
	}
//	@Override
//	public List<CustomerCart> getAllCartItems(int id) {
//		
//		return cartRepo.findByCustomerIdOrderByCreationDate(id);
//	}
	
	@Override
	public CartDto listCartItems(int id) {
		List<CustomerCart> cartList = cartRepo.findByCustomerIdOrderByCreationDate(id);
		
		List<CartItemDto> cartItems=new ArrayList<CartItemDto>();
		double totalCost=0;
		for(CustomerCart cart: cartList)     //1   xyz  2  500 ==1000
			                                 //2   abc  4  200 ==800
			                                                 //  1800
		{
			CartItemDto cartItemDto=new CartItemDto(cart);
			totalCost+=cartItemDto.getQuantity()*cart.getProduct().getPrice();
			cartItems.add(cartItemDto);
		}
		
		CartDto cartDto=new CartDto();
		cartDto.setTotalcost(totalCost);
		cartDto.setCartItems(cartItems);
		System.out.println("ur cart data as--------------------> "+cartDto);
		return cartDto;
	}
	
	
	@Override
	public String deleteCartItem(int cartItemId) {
		Optional<CustomerCart> optionalCart=cartRepo.findById(cartItemId);
		if(optionalCart.isEmpty())
		{
			throw new RuntimeException("no cart item with "+cartItemId);
		}
		CustomerCart cart=optionalCart.get();
		if(cart.getCustomer()==null)
		{
			throw new RuntimeException("cart item not belongs to customer");
		}
		//=>cart item is there in db in asso with particular customer
		cartRepo.delete(cart);
		return "Item deleted succesfully";
	}
	
//	@Override
//	public String updateItemQtyPlus(UpdateCartQtyDto cartQtyData) {
//		System.out.println("*****************************************************************************");
//		
//		Product cartProduct = prodRepo.findById(cartQtyData.getProdId()).orElseThrow(()->new RuntimeException("no product present"));//to get product by cart data
//		System.out.println("product details---->"+cartProduct);
//		CustomerCart cartData=cartRepo.findById(cartQtyData.getCartId()).orElseThrow(()->new RuntimeException("no cart present"));
//		System.out.println("cart details---->"+cartData);
//		if(cartQtyData.getQty() >  cartProduct.getProdqty())
//		{
//			return "Please reduce your quantity no stock for this qty";
//		}
//		else
//			cartData.setCartquantity(cartQtyData.getQty()+1);
//		return "qty updated succesfully";
//	}
//	
//	@Override
//	public String updateItemQtyMinus(UpdateCartQtyDto cartQtyData) {
//		Product cartProduct = prodRepo.findById(cartQtyData.getProdId()).orElseThrow(()->new RuntimeException("no product present"));//to get product by cart data
//		System.out.println("product details---->"+cartProduct);
//		CustomerCart cartData=cartRepo.findById(cartQtyData.getCartId()).orElseThrow(()->new RuntimeException("no cart present"));
//		System.out.println("cart details---->"+cartData);
//		if(cartQtyData.getQty() >  cartProduct.getProdqty())
//		{
//			return "Please reduce your quantity no stock for this qty";
//		}
//		else
//			cartData.setCartquantity(cartQtyData.getQty()-1);
//		return "qty updated succesfully";
	//}
	
	@Override
	public String updateItemQty(UpdateCartQtyDto cartQtyData) {
		Product cartProduct = prodRepo.findById(cartQtyData.getProdId()).orElseThrow(()->new RuntimeException("no product present"));//to get product by cart data
		System.out.println("product details---->"+cartProduct);
		CustomerCart cartData=cartRepo.findById(cartQtyData.getCartId()).orElseThrow(()->new RuntimeException("no cart present"));
		System.out.println("cart details---->"+cartData);
		
		//to find product from cart
		int productQtyFromMainTable=cartData.getProduct().getProdqty();
		
		Customer custo=custoRepo.findById(cartQtyData.getCid()).orElseThrow(()->new RuntimeException("no customer present"));
		
		if(cartQtyData.getQty() >  productQtyFromMainTable)
		{
			return "Please reduce your quantity no stock for this qty";
		}
		else
		{
			// cartquantity | creation_date | customer_id | product_id
//		cartData.setCartquantity(cartQtyData.getQty());
//		cartData.setProduct(cartProduct);
//		cartData.setCreationDate(LocalDate.now());
//		cartData.setCustomer(custo);
//		cartRepo.save(cartData);
			cartData.setCartquantity(cartQtyData.getQty());
		return "qty updated succesfully";
		}
	}
	
	@Override
	public CartDto getAllSelectedItems(int cartItemId) {
//		String[] split = (cartItemId.split(","));
//		System.out.println("data after spliting as-->"+Arrays.toString(split));
//		for(String s:split)
//		{
//			System.out.println(s);
//			int parseInt = Integer.parseInt(s);
//			System.out.println(parseInt);
//		}
		
		
        CustomerCart cartLis = cartRepo.findById(cartItemId).orElseThrow(()->new RuntimeException("no cart item present") );
		List<CustomerCart> cartList=new ArrayList<CustomerCart>();
		cartList.add(cartLis);
		List<CartItemDto> cartItems=new ArrayList<CartItemDto>();
		double totalCost=0;
		for(CustomerCart cart: cartList)
		{
			CartItemDto cartItemDto=new CartItemDto(cart);
			totalCost+=cartItemDto.getQuantity()*cart.getProduct().getPrice();
			cartItems.add(cartItemDto);
		}
		
		CartDto cartDto=new CartDto();
		cartDto.setTotalcost(totalCost);
		cartDto.setCartItems(cartItems);
		System.out.println("ur cart data as--------------------> "+cartDto);
		return cartDto;
		//return null;
		
	}
//*********************************************	
	
	
	
//	@Override
//	public String addToOrder(FinalOrder order) {
//
//		 //totalcost=0;
//		
//	   order.getData().forEach(c->{
//		   Order custorder=new Order();
//		   custorder.setOrderDate(LocalDate.now());
//		   custorder.setDeliveryDate(LocalDate.now().plusDays(7));
//			custorder.setModeOfpay(order.getModeOfpay());
//			Customer custo=custoRepo.findById(order.getCustid()).orElseThrow(()->new RuntimeException("no customer present") );
//			custorder.setCusto(custo);
//			CustomerCart custCartid= cartRepo.findById(c).orElseThrow(()->new RuntimeException("no cart for this id present") );
//		  CartItemDto cartItemDto=new CartItemDto(custCartid);
//		  totalcost +=(cartItemDto.getQuantity()*custCartid.getProduct().getPrice());
//		  custorder.setCustomerCart(custCartid);
//		  custorder.setTotalAmount(totalcost);
//		  totalcost=0;
//		  orderRepo.save(custorder);
//	   });
//	   
//		return "order details get inserted succesfully";
//	}
	
	@Override
	public String addToOrder(FinalOrder order) {

		 //totalcost=0;
		
	   order.getData().forEach(c->{ //45 //47
		   Order custorder=new Order(); //new object every time
		   custorder.setOrderDate(LocalDate.now());
		   custorder.setDeliveryDate(LocalDate.now().plusDays(7));
			custorder.setModeOfpay(order.getModeOfpay());
			Customer custo=custoRepo.findById(order.getCustid()).orElseThrow(()->new RuntimeException("no customer present") );
			custorder.setCusto(custo);
			CustomerCart custCartid= cartRepo.findById(c).orElseThrow(()->new RuntimeException("no cart for this id present") );
		 Product product = custCartid.getProduct();
		 product.setProdqty(custCartid.getProduct().getProdqty()-custCartid.getCartquantity()); //3-2=1 1 is store product table 
		 prodRepo.save(product); //dirty checking
			CartItemDto cartItemDto=new CartItemDto(custCartid);
		  totalcost +=(cartItemDto.getQuantity()*custCartid.getProduct().getPrice());
		  custorder.setCustomerCart(custCartid);
		  custorder.setTotalAmount(totalcost);//195
		  totalcost=0;
		  emailServ.sendInfoAboutOrder((custo.getUser().getEmail()),(LocalDate.now().plusDays(7)));
		  orderRepo.save(custorder);
	   });
	   
		return "order details get inserted succesfully";
	}
	
	//**********************************************************
	@Override
	public OrderDetailsList orderData(int id) {
		List<Order>  order = orderRepo.findByCustoId(id);
		OrderDetailsList orderDetailList=new OrderDetailsList();
		List<OrderDetails> dataOrderd=new ArrayList<OrderDetails>();
		for(Order placedOrder:order )
		{
			OrderDetails orderDet=new OrderDetails();
			LocalDate orderDate = placedOrder.getOrderDate();
			LocalDate todyaDate=LocalDate.now();
			String modeOfpay = placedOrder.getModeOfpay();
			double totalAmount = placedOrder.getTotalAmount();
			int cartquantity = placedOrder.getCustomerCart().getCartquantity(); //to get qty
			String prodname = placedOrder.getCustomerCart().getProduct().getProdname(); //to get product name
			int subscrId=placedOrder.getCustomerCart().getProduct().getSubscriber().getId();
			String custName = placedOrder.getCusto().getCustName();
			String deliAddr = placedOrder.getCusto().getCity()+" "+placedOrder.getCusto().getLocation();
			LocalDate deliveryDate=placedOrder.getDeliveryDate();
			orderDet.setCustName(custName);
			orderDet.setProdName(prodname);
			orderDet.setDeliveryAddr(deliAddr);
			orderDet.setMode(modeOfpay);
			orderDet.setOrderDate(orderDate);
			orderDet.setTCost(totalAmount);
			orderDet.setQty(cartquantity);
			orderDet.setSubscriberId(subscrId);
			int diff=Period.between(todyaDate, deliveryDate).getDays();
			String difference=Integer.toString(diff);
		System.out.println(difference);
			if(diff==7 || diff==6 || diff==5 || diff==4)
			{
				orderDet.setDeliveryMsg("Your order will be delivered on "+deliveryDate);
				orderDet.setDifference(difference);
				dataOrderd.add(orderDet);
			}
			
			if(diff==3)
			{
				orderDet.setDeliveryMsg("Your order will be delivered within 3 days");
				orderDet.setDifference(difference);
				dataOrderd.add(orderDet);
				
			}
			if(diff==2)
			{
				orderDet.setDeliveryMsg("Your order will be delivered within 2 days ");
				orderDet.setDifference(difference);
				dataOrderd.add(orderDet);
				
			}
			if(diff==1)
			{
				orderDet.setDeliveryMsg("Your order will be delivered tommorow ");
				orderDet.setDifference(difference);
				dataOrderd.add(orderDet);
			}
			if(diff==0 || diff<0)
			{
				orderDet.setDeliveryMsg("Your order get delivered on given delivery address which is  "+deliAddr);
				orderDet.setDifference("0");
				dataOrderd.add(orderDet);
			}
			
		}
		orderDetailList.setOrderData(dataOrderd);
		return orderDetailList;
	}

}
