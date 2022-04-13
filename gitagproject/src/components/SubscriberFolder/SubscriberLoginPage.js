import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SubscriberLoginPage() {
  return <div className="cust_form">
       <Form.Group className="mb-3" controlId="formBasicempid">
           <Form.Label>email id</Form.Label>
           <Form.Control type="text" placeholder="Enter email id" /> 
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicempid">
           <Form.Label>password</Form.Label>
           <Form.Control type="text" placeholder="Enter password" /> 
       </Form.Group>
       <Link to= "/optionsToSubscriber">
           <div>
       <Button variant="primary" type="submit">
           login
       </Button>
       </div>
       </Link>
  </div>;
}

export default SubscriberLoginPage;

