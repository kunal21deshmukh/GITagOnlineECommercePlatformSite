import React from 'react';
import './Feedback.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function FeedbackSub() {
  return <div>
      <div className='feedtopDiv'></div>
      <div className="feedinner"><h3>Get Feedback</h3></div>
      <div className="feedcenter">
      <div className='feedtopDiv'>
        
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Product name</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="enter product name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Handicrafts</option>
      <option>Sarees</option>
      <option>Toys</option>
      <option>Fruits</option>
      <option>Crafts</option>
      <option>Paintings</option>
      <option>Accesories</option>
     
    </select>
  </div>
  <div class="form-group">
<label for="exampleFormControlInput1">Upload Date</label>
<input type="date" class="form-control" id="exampleFormControlInput1" placeholder="enter upload date"/>
</div>

<Link to= "/">
       <div>
   <Button variant="primary" type="submit">
     See Feedback
   </Button>
   </div>
   </Link>
   
</form>
      </div>
        </div>
  </div>;
}

export default FeedbackSub;
