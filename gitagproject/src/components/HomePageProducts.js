import React from 'react'
import { useEffect, useState } from 'react';
import BackendService from '../service/BackendService';
import './HomePageProducts.css';
import { useHistory } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";

function HomePageProducts() {
  let cid=localStorage.getItem('userId');
  const [productArr,setProductArr]=useState([]);
  const cartArr=[];
  const history = useHistory();
  const init = () => {
    BackendService.getAllProduct() //employeeService chi getAll() here we are calling
      .then(response => {
        console.log('getting all categories', response.data);
        setProductArr(response.data); 
      })                            
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  useEffect(() => {
    init();
  }, []);

  
  const routeCart = (id) =>{ 
 //1st we check that product is in our cart or not if yes then alert with proper msg
 //naitr aplyala add to cart chi method call karta yeil
 console.log("in routeCart function");


 if(cid)
 {
 alert("adding ur item in cart");
 }
 else
 {
  alert('clicked'+ ' your id is '+cid +" so pls first login to add item in your cart");
 }
 
    //to pass cart data to backend
      const cartdata={
       id:cid,
       prodId : id,
     }

     //to check custoemr has particular item already in cart
 BackendService.getAllCartData(cid)
 .then(response => {
   //response.data sobat cartItems list yetey ani totalcost
   console.log("data as ---------------->"+response.data.cartItems);

   { (response.data.cartItems).map(p=>(
    //setpid(p.product.id)
  
    cartArr.push(p.product.id)    


   ))}
  




console.log(cartdata.prodId);
if(cartArr.includes(cartdata.prodId))
{
    alert("Ohhh!!! product already exist in the cart");
}

else{
  alert("data is "+cartdata);
  // const product = {product.id,quantity};
  //call to backend to add product in cart
  BackendService.createCart(cartdata)
   .then(response => {
     alert("Product "+response.data+" added successfully!");
       history.push("/cart");
   })
   .catch(error => {
       console.log('something went wrong', error);
       
   } ) 
}
})
.catch(error => {
  console.log('something went wrong', error);
})
     
  }

    return (
    <div>
      <Container>
            <Row>
                {productArr.map((product, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={`data:image/jpeg;base64,${product.data}`} width="200px" className="cartData" />

                            <Card.Body>
                                <Card.Text>Product Name : {product.prodname}</Card.Text>
                                <Card.Text>Description : {product.producDesc}</Card.Text>
                                
                                <Card.Text>Price : Rs.{product.price}</Card.Text>
                                <button onClick={()=>routeCart(product.id)} value={product.id}  className="btn btn-danger">Add to cart</button>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
      {/* {
      <div className='divShift'>
      <table>

              <tr>
                {
           productArr.map(prod=>(
            //  <div className='divBorder'>
                <td  key={prod.id}>
              <p><img src={`data:image/jpeg;base64,${prod.data}`} width="200px" alt={prod.name}/></p>
                <p>Product Name:{prod.prodname}</p>
                <p>Description:{prod.producDesc}</p>
                <p>Price:RS.{prod.price}</p>
                </td>
               // </div>
                ))
                 }
                </tr>
                </table>
                </div>
           } */}
    </div>
  )
}

export default HomePageProducts