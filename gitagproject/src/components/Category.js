import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import {  useHistory, useParams } from "react-router-dom";
import BackendService from '../service/BackendService';
const Category=()=> {

  const[categoryArr,setCategoryArr]=useState([]);

  const init = () => {
    BackendService.getAllCatg() //employeeService chi getAll() here we are calling
      .then(response => {
        console.log('getting all categories', response.data);
        setCategoryArr(response.data); //response madhe je tumche details yetayt te setEmployees mule employees[]
      })                            //madhe add hotayt
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  useEffect(() => {
    init();
  }, []);



  return <div>
      <div>
  <Dropdown>
        <Dropdown.Toggle variant="dark">
          Category Wise
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
        {
        categoryArr.map(catg=>(
          
          <Dropdown.Item href={`/subcategory/${catg.id}`}>
            {catg.categName}
          </Dropdown.Item>
          
          ))}
        </Dropdown.Menu>
       
      </Dropdown>
        
      </div>

  </div>;
}

export default Category;
