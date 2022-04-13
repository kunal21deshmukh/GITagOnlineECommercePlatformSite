package com.app.controller;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.CartDetailsDto;
import com.app.dto.CartDto;
import com.app.dto.FinalOrder;
import com.app.dto.OrderDetailsList;
import com.app.dto.UpdateCartQtyDto;
import com.app.pojos.CustomerCart;
import com.app.service.CartService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cart")
public class CartController 
{
	@Autowired
	private CartService cartService;
	
	public CartController() {
		System.out.println("in cart controllers");
	}

	//add method to add product into cart
	@PostMapping("/add")
	public ResponseEntity<String> addToCart(@RequestBody CartDetailsDto cart)
	{
		System.out.println("in add to cart checking");
		return ResponseEntity.ok(cartService.addToCart(cart));
	}
	
	//add method to get all cart product
//	@GetMapping("/allItems/{id}")
//	public ResponseEntity<List<CustomerCart> > getAllCartItems(@PathVariable int id)//customer chi id
//	{
//		System.out.println("in all cart items checking");
//		return ResponseEntity.ok(cartService.getAllCartItems(id));
//	}
	
	  //add method to get all cart product
		@GetMapping("/allItems/{id}")//id of customer 
		public ResponseEntity<CartDto> getAllCartProducts(@PathVariable int id)//customer chi id
		{
			System.out.println("in all cart items checking");
			return ResponseEntity.ok(cartService.listCartItems(id));
		}
		
	
	//add a method to delete item from cart
	@DeleteMapping("/{cartItemId}")//cart_prodcut id 
	public ResponseEntity<String> deleteCartItem(@PathVariable int cartItemId)
	{
		return ResponseEntity.ok(cartService.deleteCartItem(cartItemId));
	}
	

	//add a method to update quntity of item in cart
	@PutMapping("/edit")
    public ResponseEntity<String> updateCartItemQuantity(@RequestBody UpdateCartQtyDto cartQtyData)
	{
		System.out.println("////////////////////////////////////////////////////////////////////////");
		return ResponseEntity.ok(cartService.updateItemQty(cartQtyData));
	}
	
	@GetMapping("/AllSelectedItems/{cartItemId}")
	public ResponseEntity<CartDto> getAllSelectedCartProducts(@PathVariable  int cartItemId )
	{
		System.out.println("data coming from front as-->"+cartItemId);
		
		
		return ResponseEntity.ok(cartService.getAllSelectedItems(cartItemId));
	}
	
	
	//add method to add order to link with customer
		@PostMapping("/addOrder")
		public ResponseEntity<String> confirmOrder(@RequestBody FinalOrder order)
		{
			System.out.println("in order placing controller");
			return ResponseEntity.ok(cartService.addToOrder(order));
		}
		
	//add a method to get order details of customer
		@GetMapping("/getOrderDetails/{custId}")
		public ResponseEntity<OrderDetailsList> getPlacedOrderDetails(@PathVariable int custId)
		{
			System.out.println("in order details getting controller");
			return ResponseEntity.ok(cartService.orderData(custId));
		}
		
		
}
