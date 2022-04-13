package com.app.pojos;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product extends BaseEntity{
  
    @Column(length = 30)
	private double price;
    @Column(length = 300)
	private String producDesc;
    @Column(length = 300)
   	private String prodname;
    @Column(length = 20)
    @Min(value = 0)
   	private int prodqty;
    @Column(length = 60)
   	private String imgname;
    @ManyToOne//(fetch = FetchType.LAZY)
    @JoinColumn(name = "subcateg_id",nullable = false)
    private SubCategory subcateg;
    @ManyToOne//(fetch = FetchType.LAZY)
    @JoinColumn(name = "categ_id",nullable = false)
    private Category categ;
    
    @ManyToOne//(fetch = FetchType.LAZY)//changable to eager if want
    @JoinColumn(name = "sub_id",nullable = false)
    private Subscriber subscriber;
}
