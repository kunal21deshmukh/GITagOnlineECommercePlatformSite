package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dao.SubCategoryRepository;
import com.app.pojos.SubCategory;
@Service
@Transactional
public class FormServiceImpl implements FormService {
	@Autowired
	private SubCategoryRepository subcatRepo;
	
	@Override
	public List<SubCategory>  findAllSubCatg(int id) {
		return subcatRepo.findByCategId(id);
	}

}
