package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "sub_category_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SubCategory extends BaseEntity {

	@Column(length = 40)
	private String subCategName;
	
	@ManyToOne//(fetch = FetchType.LAZY)
    @JoinColumn(name = "categ_id",nullable = false)
    private Category categ;
	

}
