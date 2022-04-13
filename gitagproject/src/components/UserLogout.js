import React from 'react'
import { useHistory} from "react-router-dom";
function UserLogout() {

    const history = useHistory();
    alert("you have succesfully logout");

    localStorage.removeItem("userId");
    history.push("/")
  return (

    <div>
       
    </div>
  )
}

export default UserLogout