import React from 'react';
import {useHistory} from "react-router-dom";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
function Statewise() {
  const history=useHistory();
const [states,setStates]=useState("");
  const callState=(id)=>{
    if(id===1)
    {
      setStates('AndraPradesh')
    history.push({
      pathname: '/stateItems',
      state: states,
    });
  }
  if(id===1)
    {
      setStates('Bihar')
    history.push({
      pathname: '/stateItems',
      state: states,
    });
  }
  }
  return <div>
      {/* <h4>i am statewise</h4> */}
      
 

      <div>
  <Dropdown>
        <Dropdown.Toggle variant="dark">
          StateWise
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{callState(1)}}>
            Andra Pradesh
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(2)}}>
            Bihar
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(3)}}>
            Chattisgarh
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(4)}}>
            Goa
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(5)}}>
            Gujrat
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(6)}}>
            Karnataka
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(7)}}>
            Madhya Pradesh
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(8)}}>
            Maharashtra
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>{callState(9)}}>
            Rajsthan
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
  </div>;
}

export default Statewise;
