package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "rule_tbl") //this is for admin so no any validations here
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Rule  {
	@Id
   @Column(length = 30)
	private String id;
   @Column(length = 30)
   private String description;
   @Column(length = 30)
   private String duration; 
   @Column(length = 30)
   private double charges;
}
