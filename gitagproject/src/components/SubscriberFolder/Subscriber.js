import React from 'react';
import { Link } from 'react-router-dom';

function Subscriber() {
  return <div>
    {/*   <h4>subscriber page</h4> */}
    <Link to='/subscriberForm'>
    <button type="button" class="btn btn-success">Login</button>
    </Link>
  </div>;
}

export default Subscriber;

