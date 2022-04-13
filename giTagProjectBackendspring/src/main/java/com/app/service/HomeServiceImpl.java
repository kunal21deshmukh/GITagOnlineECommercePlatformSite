package com.app.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dto.HomeProductDto;
import com.app.dto.ProductResponseDto;
import com.app.pojos.Category;
import com.app.pojos.Product;

@Service
@Transactional
public class HomeServiceImpl implements HomeService {

	
	@Autowired
	private CategoryRepository catRepo;
	@Autowired
	private ProductRepository prodRepo;
	@Value("${file.upload.location}")
	private String location;
	
	@Override
	//to get category in drop down at front
	public List<Category> getAllCateg() {
		
		return catRepo.findAll();
	}

	@Override
	public List<HomeProductDto> getAllProduct() {
		List<Product> subproduct=prodRepo.findAll();
		List<Product> product=new ArrayList<Product>();//one one get added i this list who satisfy the condition
		subproduct.forEach(p->
		{
			
			    if(p.getSubscriber().getRule().getId().equals("7")
				||p.getSubscriber().getRule().getId().equals("8")
				||p.getSubscriber().getRule().getId().equals("9"))
		{
			product.add(p); //adition
		}
		});
			
			
		// List<Product>  product= prodRepo.findBySubscriberId(id);
		 //  System.out.println(product);
		    //System.out.println("details of prodcut"+product);
		   // ProductResponseDto response =new ProductResponseDto();
		    List<HomeProductDto> responseList=new ArrayList<HomeProductDto>();
			
		    product.forEach(prod->{
		    	System.out.println("--------------service layer-------------------");
		    	HomeProductDto response =new HomeProductDto();
		    	System.out.println(prod.getProdname());
		    
		    	Path path = Paths.get(location, prod.getImgname());
		    	response.setId(prod.getId());
		    	response.setPrice(prod.getPrice());
		    	response.setProducDesc(prod.getProducDesc());
		    	response.setProdname(prod.getProdname());
		        response.setImgname(prod.getImgname());
		   
		    	
		    	try {
				response.setType(Files.probeContentType(path));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
		    try {
				response.setData(Files.readAllBytes(path));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    System.out.println("product in respone is -------->"+response.getProdname());//shine wood
		    responseList.add(response);
		    });
		    System.out.println("---------List-----------");
		    responseList.forEach(i ->System.out.println(i.getProdname()));//shine shine
		    return responseList;
	
	}

	@Override
	public List<HomeProductDto> getAllProductByName(String pname) {
		
		System.out.println("*********************************************************************");
		List<Product> subproduct=prodRepo.findByProdname(pname);
		List<Product> product=new ArrayList<Product>();//one one get added i this list who satisfy the condition
//		subproduct.forEach(p->
//		{
//			
//			    if(p.getSubscriber().getRule().getId().equals("7")
//				||p.getSubscriber().getRule().getId().equals("8")
//				||p.getSubscriber().getRule().getId().equals("9"))
//		{
//			product.add(p); //adition
//		}
//		});
			
			
		subproduct.forEach(p->product.add(p));
		    List<HomeProductDto> responseList=new ArrayList<HomeProductDto>();
			
		    product.forEach(prod->{
		    	System.out.println("--------------service layer-------------------");
		    	HomeProductDto response =new HomeProductDto();
		    	System.out.println(prod.getProdname());
		    
		    	Path path = Paths.get(location, prod.getImgname());
		    	response.setId(prod.getId());
		    	response.setPrice(prod.getPrice());
		    	response.setProducDesc(prod.getProducDesc());
		    	response.setProdname(prod.getProdname());
		        response.setImgname(prod.getImgname());
		   
		    	
		    	try {
				response.setType(Files.probeContentType(path));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
		    try {
				response.setData(Files.readAllBytes(path));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    System.out.println("product in respone is -------->"+response.getProdname());//shine wood
		    responseList.add(response);
		    });
		    System.out.println("---------List-----------");
		    responseList.forEach(i ->System.out.println(i.getProdname()));//shine shine
		    return responseList;
	}

	
}
