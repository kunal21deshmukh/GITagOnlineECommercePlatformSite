package com.app.dto;

import java.util.List;

import com.app.pojos.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FinalOrder {

	private int custid;
	private List<Integer> data;
	private String modeOfpay;
}
