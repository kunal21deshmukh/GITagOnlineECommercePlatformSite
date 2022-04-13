import React from 'react'
import { useEffect, useState } from 'react';
import { useParams,Link,useHistory } from "react-router-dom";
import BackendService from '../service/BackendService';
import { Card, Row, Col, Container } from "react-bootstrap";
import './subcat.css'
import Navbar from './Navbar';
function SubCategoryWiseItems() {
    const {id} = useParams(); 
    const [productArr,setProductArr]=useState([]);
    const cartArr=[];
    let cid=localStorage.getItem('userId');
    const history=useHistory();
const init=()=>{

    BackendService.getSubCategWiseItems(id)
    .then((response=>{
       console.log(response.data);
  
        setProductArr(response.data);
    }))
    .catch((error) => {
        console.log("something went wrong", error);
      });

}
 useEffect(() => {
        init();
      }, []);

      
      const routeCart = (id) =>{ 
        if(cid!=null)
        {
        //1st we check that product is in our cart or not if yes then alert with proper msg
        //naitr aplyala add to cart chi method call karta yeil
        console.log("in routeCart function");
       
       
        alert('clicked'+ ' your id is '+cid);
           //to pass cart data to backend
             const cartdata={
              id:cid,
              prodId : id,
            }
       
            //to check custoemr has particular item already in cart
        BackendService.getAllCartData(cid)
        .then(response => {
         
          console.log("data as ---------------->"+response.data.cartItems);
       
          { (response.data.cartItems).map(p=>(
           //setpid(p.product.id)
         
           cartArr.push(p.product.id)    
       
       
          ))}
          console.log(cartdata.prodId);
          if(cartArr.includes(cartdata.prodId))
          {
              alert("product already exist in the cart");
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
        else{
           
            
           <Link to="/LoginPage">
          <button type="button" class="btn btn-primary">Login</button>
          </Link>
         
    
        }             
    }
    
  return (
    <div >
        <Navbar/>
        <br/>
        <div >
       <center> <h3 className="pt-3 font-weight-bold">Subcategory Items</h3></center>
       <center><hr></hr></center>

       <Container>
            <Row>
                {productArr.map((product, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={`data:image/jpeg;base64,${product.data}`} width="200px" className="cartData" />

                            <Card.Body>
                                <Card.Text>Prodcut Name : {product.prodname}</Card.Text>
                                <Card.Text>Description : {product.producDesc}</Card.Text>
                                
                                <Card.Text>Price : Rs.{product.price}</Card.Text>
                                <button onClick={()=>routeCart(product.id)} value={product.id}  className="btn btn-danger">Add to cart</button>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        </div>
    </div>


  )
}

export default SubCategoryWiseItems