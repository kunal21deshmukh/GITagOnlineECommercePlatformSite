import React from 'react'
import { useEffect, useState } from 'react';
import { useParams,Link,useHistory } from "react-router-dom";
import BackendService from '../service/BackendService';
import { Card, Row, Col, Container } from "react-bootstrap";
import './subcat.css'
import Navbar from './Navbar';
function Subcategory() {
    const[subcategoryArr,setSubCategoryArr]=useState([]);
    const {id} = useParams();   
  const history=useHistory();
   // alert("your id is "+id);
    const init=()=>{
        console.log("in getsub catg"+id);
        //e.preventDefault();
        BackendService.getSubCat(id)
        .then((response) => {
          console.log("sub category items", response.data);
          setSubCategoryArr(response.data);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
      }
      useEffect(() => {
        init();
      }, []);

      

  return (
   <div >
     <div >
     <Navbar/>
     </div>
       <br/>
       <br/>
       <br/>
       <br/>
      {/* {
          <table align="center">
              <tr>
                  {
   subcategoryArr.map(subcatg =>(
     <Link to="/">
     <td><button type="button" class="btn btn-default btn-lg btn-primary">{subcatg.subCategName}</button> </td>
     </Link>
   ))
}
   </tr>
   </table>
   
      } */}
       <Container>
            <Row>
                



                { subcategoryArr.map((subcatg,k) =>(
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card style={{backgroundColor:"#edeaee"}}>
                            {/* <Card.Img src={`data:image/jpeg;base64,${product.data}`} width="200px" /> */}
                            {/* <Card.Img src={MysoreAgarbatti} width="200px" /> */}
                           
                            <Link to= {`/subCategoryWiseItems/${subcatg.id}`}>
                            <Card.Body > 
                              <center>{subcatg.subCategName}</center> 
                            </Card.Body>
                           
                            </Link>
                            

                        </Card>
                    </Col>
                ))}





            </Row>
        </Container>
   </div>
  )
}

export default Subcategory;
