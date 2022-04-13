package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "feedback_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FeedBack extends BaseEntity {

	@ManyToOne 
	 @JoinColumn(name = "customer_id",nullable = false)
	 private Customer customer;
	@ManyToOne 
	 @JoinColumn(name = "subscr_id",nullable = false)
	 private Subscriber subscriber;
	private int rating;
	private String productName;
}
