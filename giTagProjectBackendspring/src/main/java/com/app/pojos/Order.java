package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Order extends BaseEntity{

	private LocalDate orderDate;
	private LocalDate deliveryDate;
	private double totalAmount;
private String modeOfpay;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "custo_id",nullable = false)
    private Customer custo;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_orderItem_id",nullable = false)
    private CustomerCart customerCart;
	
	
}
