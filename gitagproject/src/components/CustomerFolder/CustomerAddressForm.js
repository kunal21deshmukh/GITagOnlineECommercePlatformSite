import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomerForm.css'
function CustomerAddressForm() {
  return <div>
      <div className="cust_form">
     
     <Form>
      <Form.Group className="mb-3" controlId="formBasicempid">
          <Form.Label>city</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicempid">
          <Form.Label>state</Form.Label>
          <Form.Control type="text" placeholder="Enter your state" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicempid">
          <Form.Label>address</Form.Label>
          <Form.Control type="text" placeholder="Enter residential address" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicempid">
          <Form.Label>zipcode</Form.Label>
          <Form.Control type="text" placeholder="Enter zipcode" /> 
      </Form.Group>
      <Link to= "/">
           <div>
       <Button variant="primary" type="submit">
           submit
       </Button>
       </div>
       </Link>
      </Form>
      </div>
  </div>;
}

export default CustomerAddressForm;
