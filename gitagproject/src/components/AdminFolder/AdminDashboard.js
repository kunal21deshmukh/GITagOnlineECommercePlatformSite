import React from 'react'
import { Card, Row, Col, Container,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function AdminDashboard() {
  return (
    <div>
        <br/>
        <br/>
        <center><h2 style={{color:"red"}}>Admin Dashboard!!!</h2></center>
       
        <hr/>
        <br/>
        <br/>
        <br/>

         <div className="row">
      <div className='col-sm-12 col-md-3'>
        <Container>
            <Row>
                
            <Col >
                        <Card style={{backgroundColor:"#edeaee"}}>
                            
                           
                            <Link to= "/admin">
                            <Card.Body > 
                              <center>Subscriber Information</center> 
                            </Card.Body>
                           
                            </Link>
                            

                        </Card>
                    </Col>
                
            </Row>
        </Container>
        </div>
        <div className='col-sm-12 col-md-3'>
        <Container>
            <Row>
                
            <Col >
                        <Card style={{backgroundColor:"#edeaee"}}>
                            
                           
                            <Link to= "/product">
                            <Card.Body > 
                              <center>Product Information</center> 
                            </Card.Body>
                           
                            </Link>
                            

                        </Card>
                    </Col>
                
            </Row>
        </Container>
</div>
        <div className='col-sm-12 col-md-3'>
        <Container>
            <Row>
                
            <Col >
                        <Card style={{backgroundColor:"#edeaee"}}>
                            
                           
                            <Link to= "/order">
                            <Card.Body > 
                              <center>Order Information</center> 
                            </Card.Body>
                           
                            </Link>
                            

                        </Card>
                    </Col>
                
            </Row>
        </Container>
        
</div>
<div className='col-sm-12 col-md-3'>
        <Container>
            <Row>
                
            <Col >
                        <Card style={{backgroundColor:"#edeaee"}}>
                            
                           
                            <Link to= "/feedbackInfo">
                            <Card.Body > 
                              <center>Feedback Information</center> 
                            </Card.Body>
                           
                            </Link>
                            

                        </Card>
                    </Col>
                
            </Row>
        </Container>
        </div>

</div>
<center>
    <br/>
    <br/>
        <Link to="/userLogout">
                <Button variant="info" type="submit">
                Logout
                </Button>
                </Link>
                </center>
    </div>
  )
}

export default AdminDashboard