import React from 'react';
import { Link } from 'react-router-dom';

function Customer() {
  return <div>
     {/* <h4>Customer login</h4>  */}
     <Link to="/custForm">
     <div>
     <button type="button" class="btn btn-dark">&nbsp;Register&nbsp;</button>
     </div>
     </Link>
  </div>;
}

export default Customer;
