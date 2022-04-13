import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import BackendService from '../../service/BackendService';
import Navbar from '../Navbar';
function ConfirmOrder() {
    const location = useLocation();
    //const [stateee,setstateee]=useState("");
    const history = useHistory();
    const [cost1, setCost1] = useState([]);
    const [cost2, setCost2] = useState([]);
    const [cost3, setCost3] = useState([]);
    const [responseArr1, setresponseArr1] = useState([]);
    const [responseArr2, setresponseArr2] = useState([]);
    const [responseArr3, setresponseArr3] = useState([]);
    const [finalCost,setFinalCost]= useState([]);
   // const [cartid,setCartid]=useState("");
    let count=1;
    
    let cid=localStorage.getItem('userId');
        //setstateee(location.state); // it is equal to yourData
   
        useEffect(() => {
           // console.log(location.state); 
           // alert(location.state);

        
           // console.log("dattttttttttttttta "+itemArr);
            location.state.map(item=>(
             
                BackendService.callToGetSelectedItems(item)
                .then(response => {
                    if(count==1)
                    {
                console.log(response.data);
                setresponseArr1(response.data.cartItems);
               
                console.log("resp arr--->"+responseArr1);
               
              setCost1(response.data.totalcost);
             // localStorage.setItem('item1', JSON.stringify(cartid));
             // setFinalCost(cost1);
                    
               // resp.push(responseArr);
               // console.log("data as----->"+resp[0]);
                    }
                    if(count==2)
                    {
                        console.log(response.data);
                        setresponseArr2(response.data.cartItems);
                        console.log("resp arr--->"+responseArr2);
                      setCost2(response.data.totalcost);
                        //resp.push(responseArr);
                        //console.log("data as----->"+resp[0]);
                    //    setFinalCost(cost1+cost2);
                   // localStorage.setItem('item2', JSON.stringify(response.data.cartItems.id));
                    }
                    if(count==3)
                    {
                        console.log(response.data);
                        setresponseArr3(response.data.cartItems);
                        console.log("resp arr--->"+responseArr3);
                      setCost3(response.data.totalcost);
                    //  setFinalCost(cost1+cost2+cost3);
                        //resp.push(responseArr);
                        //console.log("data as----->"+resp[0]);
                    //    localStorage.setItem('item3', JSON.stringify(response.data.cartItems.id));
                    }
                    count=count+1;

               })
               .catch(error => {
                 console.log('Something went wrong', error);
               })
     
              
            
            
            ))
        }, [location])

        console.log(responseArr1);
        console.log(responseArr2);
        console.log(responseArr3);
       //setFinalCost(cost1+cost2+cost3);
       
      //alert(finalCost);


 
  const placeOrder=()=>{
    /* history.push("/ConfirmOrder",crtArr); */
   // setFinalCost(cost1+cost2+cost3);

    alert("Redirecting to Payment mode..........");
     history.push({
      pathname: '/OrderAndPayement',
      state: location.state,
  });

 }


  return (
    <div>
      <Navbar/>
        <br/>
        <br/>
       
       <center><h3>Please confirm Your order</h3></center> 
        <hr></hr>
        <table className="table table-striped">
        <thead>
            <tr className="float-center">
               
                <th >Product Name</th>
                <th>Price</th>
                <th>Quantity</th>   
                <th>Total</th>
              
            </tr>
        </thead>
        <tbody>
        {
          responseArr1.map(carttt=>(
          
            <tr key={carttt.id} >
             
            <td>{carttt.product.prodname}</td>
            <td>{carttt.product.price}</td>
            <td>{carttt.quantity}</td>
            <td>{carttt.quantity*carttt.product.price}</td>
           
          </tr>

          )
          )
        }

{
          responseArr2.map(carttt=>(
          
            <tr key={carttt.id} >
             
            <td>{carttt.product.prodname}</td>
            <td>{carttt.product.price}</td>
            <td>{carttt.quantity}</td>
            <td>{carttt.quantity*carttt.product.price}</td>
           
          </tr>

          )
          )
        }
       {
          responseArr3.map(carttt=>(
          
            <tr key={carttt.id} >
             
            <td>{carttt.product.prodname}</td>
            <td>{carttt.product.price}</td>
            <td>{carttt.quantity}</td>
            <td>{carttt.quantity*carttt.product.price}</td>
           
          </tr>

          )
          )
        }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td  >Total : {cost1+cost2+cost3} </td>
          </tr>
      
        </tbody>
 </table>

 <center><button className="btn4 btn-primary" style={{width:'200px'}}  onClick={() => placeOrder()} >Confirm Order</button>
 <Link to= "/CustomerCart">
         
 <button className="btn4 btn-primary" style={{width:'200px'}} >Back</button>
 </Link>
 </center>
    </div>

    
  )
}

export default ConfirmOrder

/*  onClick={(e) => setFinalCost(e.target.value)} value={cost1+cost2+cost3} */

/* onClick={() => placeOrder()} */