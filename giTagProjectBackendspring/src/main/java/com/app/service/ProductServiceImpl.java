package com.app.service;

import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SubCategoryRepository;
import com.app.dao.SubscriberRepository;
import com.app.dto.HomeProductDto;
import com.app.dto.ImageDTO;
import com.app.dto.ProductResponseDto;
import com.app.dto.Productdto;
import com.app.dto.ResponseDTO;
import com.app.dto.SubcategProductDto;
import com.app.dto.UpdateProductDataDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.SubCategory;
import com.app.pojos.Subscriber;


@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository prodRepo;
	@Autowired
	private SubscriberRepository subRepo;
	@Autowired
	private SubCategoryRepository subcatRepo;
	@Autowired
	private CategoryRepository catRepo;
	@Value("${file.upload.location}")
	private String location;
	@Override
	public void addProduct(Productdto u) {
		
		
		Subscriber sub=subRepo.findById(u.getSid()).orElseThrow(()->new RuntimeException("no such subscriber"));
		SubCategory subcat= subcatRepo.findById(u.getSubcateg()).orElseThrow(()->new RuntimeException("no such subcategory"));
		Category catego=subcat.getCateg();
		Product prod=new Product();
		prod.setProdname(u.getProdname());
		prod.setProducDesc(u.getProducDesc());
		prod.setPrice(u.getPrice());
		prod.setProdqty(u.getProdqty());
		prod.setCateg(catego);
		prod.setSubscriber(sub);
		prod.setSubcateg(subcat);
		prod.setImgname(u.getImgname());
		prodRepo.save(prod);
		
		
	}
	
	public List<ProductResponseDto>  retriveData(int id) throws IOException
	{
	   List<Product>  product= prodRepo.findBySubscriberId(id);
	 //  System.out.println(product);
	    //System.out.println("details of prodcut"+product);
	   // ProductResponseDto response =new ProductResponseDto();
	    List<com.app.dto.ProductResponseDto> responseList=new ArrayList<ProductResponseDto>();
		
	    product.forEach(prod->{
	    	System.out.println("--------------service layer-------------------");
	    	ProductResponseDto response =new ProductResponseDto();
	    	System.out.println(prod.getProdname());
	    
	    	Path path = Paths.get(location, prod.getImgname());
	    	response.setId(prod.getId());
	    	response.setPrice(prod.getPrice());
	    	response.setProducDesc(prod.getProducDesc());
	    	response.setProdname(prod.getProdname());
	       // response.setSubcateg(prod.getSubcateg());
	    	response.setProdqty(prod.getProdqty());
	    	//response.setImgname(prod.getImgname());
	   
	    	
	    	try {
			response.setType(Files.probeContentType(path));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    //response.setSubscriber(prod.getSubscriber());
	    //response.setCateg(prod.getCateg());
	    try {
			response.setData(Files.readAllBytes(path));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    System.out.println("product in respone is -------->"+response.getProdname());
	    responseList.add(response);
	    });
	    System.out.println("---------List-----------");

	    return responseList;
	}

	@Override
	public UpdateProductDataDTO retriveprodData(int id) {
		Product product=prodRepo.findById(id).orElseThrow(()->new RuntimeException("no product found"));
		UpdateProductDataDTO updatprod=new UpdateProductDataDTO();
		updatprod.setPrice(product.getPrice());
		updatprod.setProdname(product.getProdname());
		updatprod.setProdqty(product.getProdqty());
		updatprod.setProducDesc(product.getProducDesc());
		return updatprod;
		
	}

	@Override
	public String updateData(UpdateProductDataDTO updateprod) {
		Product product=prodRepo.findById(updateprod.getId()).orElseThrow(()->new RuntimeException("no product found"));
		product.setProdname(updateprod.getProdname());
		product.setPrice(updateprod.getPrice());
		product.setProducDesc(updateprod.getProducDesc());
		product.setProdqty(updateprod.getProdqty());
		return "updated succesfully";
	}
	
	@Override
	public List<SubcategProductDto> getAllSubcategoryProduct(int id) {
		List<Product> product=prodRepo.findBySubcategId(id); //accr to subcat
		
		    List<SubcategProductDto> responseList=new ArrayList<SubcategProductDto>();
			
		    product.forEach(prod->{
		    	System.out.println("--------------service layer-------------------");
		    	SubcategProductDto response =new SubcategProductDto();
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
