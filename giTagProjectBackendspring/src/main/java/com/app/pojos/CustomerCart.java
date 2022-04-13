package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "customer_cart_details_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerCart extends BaseEntity {
	
	 @ManyToOne //ask mam to make policy lazy or as default eager---eager
	 @JoinColumn(name = "product_id",nullable = false)
	 private Product product;
	 @ManyToOne //ask mam to make policy lazy or as default eager---eager
	 @JoinColumn(name = "customer_id",nullable = false)
	 private Customer customer;
	 private int cartquantity;
	 private LocalDate creationDate;
}
