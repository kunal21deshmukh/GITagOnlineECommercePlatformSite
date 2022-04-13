package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "admin_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Admin extends BaseEntity {
	  
	  private String adminName;
	  @OneToOne
	  @JoinColumn(name="s_id",nullable = false) 
	  private UserEntity user;
	  
}
