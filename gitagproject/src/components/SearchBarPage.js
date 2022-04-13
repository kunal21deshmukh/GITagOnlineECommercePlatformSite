import React from 'react'
import { useLocation,useHistory } from 'react-router-dom';
import { useEffect,useState } from 'react';
import BackendService from '../service/BackendService';
import Navbar from './Navbar';
//import { useHistory } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
function SearchBarPage() {
    const [productArr,setProductArr]=useState([]);
    let cid=localStorage.getItem('userId');
    const cartArr=[];
    const history = useHistory();
    const location=useLocation();
    //const [pname,setPname]=useState('');
  
    let pname=location.state;
    const data1={pname};
    const init = () => {
      
        console.log("*************"+pname);
       // alert(pname);
        
        console.log("++++++++++++++++++"+data1.pname);
        BackendService
          .getSerchProduct(data1.pname)
          .then(response => {
            
            console.log('getting all categories', response.data);
            setProductArr(response.data); 
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      
    }
    useEffect(() => {
        init();
      }, []);

  
    const routeCart = (id) =>{ 
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

  return (
      
    <div>
        <Navbar/>
       {/* nantar aapan patimage call deu ya navane aani mg tikdun produc info anun card madhe display karar */} 
        <center>
            <br/>
            <br/>
            <h5>Product you searched</h5>
            <br/>
            <br/>
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
        </center>
        
        
        </div>
  )
}

export default SearchBarPage