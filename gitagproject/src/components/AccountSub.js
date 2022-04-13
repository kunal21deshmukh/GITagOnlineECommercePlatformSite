import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function AccountSub() {
  return <div>
     <div>
  <Dropdown>
        <Dropdown.Toggle variant="dark">
          Your Account
        </Dropdown.Toggle>
        <Dropdown.Menu>
         
          
        
          <Dropdown.Item href="/accountInfoSub/:id"> {/* //1 */}
            Account Info
          </Dropdown.Item>
         
         

          <Dropdown.Item href="/userLogout">
            Logout
          </Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      </div>

  </div>;
}

export default AccountSub;
