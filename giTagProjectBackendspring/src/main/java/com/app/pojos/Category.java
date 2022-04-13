package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "category_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Category extends BaseEntity {

	@Column(length = 30,unique = true)
	private String categName;
	@Column(length = 300)
	private String categDescrip;
	
}
