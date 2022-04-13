package com.app.pojos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "customer_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer extends BaseEntity
{
  @NotEmpty(message = "name cannot be blank")
  @Length(min = 4,max = 40,message = "invalid name length!!!")
  @Column(length = 30)
  private String custName;
  
  @Column(length = 30)
  private String custPhoneno;
  @Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;
	@Column(length = 20,name="zip_code")
	private String zipCode;
	@Column(length = 500,name="address")
	@NotEmpty(message = "location must be supplied")
  private String location;
 
	  @OneToOne(fetch = FetchType.EAGER)
	  @JoinColumn(name="s_id",nullable = false) 
	  private UserEntity user;
	  
  
  
}
