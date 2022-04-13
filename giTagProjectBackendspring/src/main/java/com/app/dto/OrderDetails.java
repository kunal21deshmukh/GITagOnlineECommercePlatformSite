package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDetails {
 
	private String custName;
	private String prodName;
	private LocalDate orderDate;
	private int qty;
	private double tCost;
	private String deliveryMsg;
	private String mode;
	private String deliveryAddr;
	private String difference;
	private int subscriberId;
}
