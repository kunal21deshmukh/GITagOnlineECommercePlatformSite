package com.app.controller;

import java.io.File;


import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.HomeProductDto;
import com.app.dto.ImageDTO;
import com.app.dto.ProductResponseDto;
import com.app.dto.Productdto;
import com.app.dto.ResponseDTO;
import com.app.dto.SubcategProductDto;
import com.app.dto.UpdateProductDataDTO;
import com.app.pojos.Product;
import com.app.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin
@RequestMapping("/image")
public class ImageController {
	@Value("${file.upload.location}")  //property-driven dependency injection
	private String location;

	@Autowired
	private ProductService prodService;
	/* Sample JSON data : dtls : {"email" : "rama@gmail.com", "age" : 27 } */
	// add a method to upload User details in JSON format n multipart image file ,
	// to save in server side folder
	@PostMapping("/upload_folder")
	public ResponseDTO fileUploadInFolder(@RequestParam String jsonobject, @RequestParam MultipartFile file) {
		System.out.println("data " + jsonobject + " " + file.getOriginalFilename() + " " + location);
		try {
			Productdto u = new ObjectMapper().readValue(jsonobject, Productdto.class); //Method to deserialize JSON content from given JSON content String.
		
			file.transferTo(new File(location, file.getOriginalFilename()));
			System.out.println("user dtls " + u);
			prodService.addProduct(u);
		} catch (Exception e) {

			e.printStackTrace();
		}
		
		return new ResponseDTO("File uploaded :" + file.getOriginalFilename(), LocalDateTime.now());
	}
	
	    // Add a method to download image from server side folder to react front end
		@GetMapping("/product/{id}")
		public ResponseEntity<List<ProductResponseDto> > downloadImage(@PathVariable int id) throws IOException {
			//System.out.println("in retrive data-------------------------");
			//prodService.retriveData(id).forEach(p->System.out.println(p.getProdname()));
			//System.out.println("-------------------------------");
			return ResponseEntity.ok(prodService.retriveData(id));

		}

		//add a method to get product details
		@GetMapping("/product/edit/{id}")
		public ResponseEntity<UpdateProductDataDTO> updateProduct(@PathVariable int id) throws IOException
		{
			System.out.println("id as "+id);
			return ResponseEntity.ok(prodService.retriveprodData(id));
		}
		//to update product info
		@PostMapping("/product/edit")
		public ResponseEntity<String> updateProduct(@RequestBody UpdateProductDataDTO upprod) throws IOException
		{
			System.out.println("data coming as "+upprod);
			return ResponseEntity.ok(prodService.updateData(upprod));
		}
		//to get products info when we click on particular subcat button
		@GetMapping("/subcategory/{id}")
		public ResponseEntity<List<SubcategProductDto>> getAllProducts(@PathVariable int id)
		{
			System.out.println("in subcategory product checking");
			return ResponseEntity.ok(prodService.getAllSubcategoryProduct(id));
		}
		
}
