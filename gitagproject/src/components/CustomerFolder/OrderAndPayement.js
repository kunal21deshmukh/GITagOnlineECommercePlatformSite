import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import BackendService from '../../service/BackendService'
import { Border } from 'react-bootstrap-icons';
function OrderAndPayement() {
    const location = useLocation();
    const history = useHistory();
    const [cost1, setCost1] = useState([]);
    const [cost2, setCost2] = useState([]);
    const [cost3, setCost3] = useState([]);
    const [responseArr1, setresponseArr1] = useState([]);
    const [responseArr2, setresponseArr2] = useState([]);
    const [responseArr3, setresponseArr3] = useState([]);
    const [custName, setcustName] = useState("");
    const [custPhoneno, setcustPhoneno] = useState("");
    const [city, setcustcity] = useState("");
    const [state, setcuststate] = useState("");
    const [country, setcustcountry] = useState(""); 
    const [zipCode, setcustzipCode] = useState("");
    const [locations, setlocations] = useState("");
    const [modeOfpay,setModeOfpay]=useState("Cash_On_Delivery");
   // const str="Cash_On_Delivery";
    
    //const [finalCost,setFinalCost]= useState([]);
    let count=1;
    
    let sid=localStorage.getItem('userId');
    const custid=localStorage.getItem('userId');
    console.log("ididiididiidiidid==========="+custid);
        //setstateee(location.state); // it is equal to yourData
        //const accnt={custName,custPhoneno,city,state,country,zipCode,locations};
const data=location.state;

useEffect(() => {
  
    BackendService
      .getCustData(sid)
      .then(response => {
        setcustName(response.data.userName);
        
        setcustPhoneno(response.data.userPhoneno);
        setcustcity(response.data.usercity);
        setcuststate(response.data.userstate);
        setcustcountry(response.data.usercountry);
        setcustzipCode(response.data.userzipCode);
        setlocations(response.data.userlocation);
       // alert("coming to frontend"+response.data.userName);
        console.log("your data -->"+response.data.userName);
        
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  
}, []);
   
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
              
                    
               // resp.push(responseArr);
               // console.log("data as----->"+resp[0]);
                    }
                    if(count==2)
                    {
                        console.log(response.data);
                        setresponseArr2(response.data.cartItems);
                        console.log("resp arr--->"+responseArr2);
                      setCost2(response.data.totalcost);
                      
                        //console.log("data as----->"+resp[0]);
                 
                     
                    }
                    if(count==3)
                    {
                        console.log(response.data);
                        setresponseArr3(response.data.cartItems);
                        console.log("resp arr--->"+responseArr3);
                      setCost3(response.data.totalcost);
                    
                    
                        //resp.push(responseArr);
                        //console.log("data as----->"+resp[0]);
                      
                    }
                    count=count+1;

               })
               .catch(error => {
                 console.log('Something went wrong', error);
               })
     
              
            
            
            ))
        }, [location])

 const UpdateData=()=>{
    history.push({
        pathname: '/updateForOrder/edit',
        state: location.state,
    });
 }

 const FinalOrder=()=>{
    const forder={custid,data,modeOfpay};
BackendService.saveFinallyOrder(forder)
.then(response => {
  alert("Your order get place pls find mail");
 history.push('/yourorder');
})
.catch(error => {
    console.log('Something went wrong', error);
  })
 }

  

 const saveModeofpay=(e)=>
 {
     setModeOfpay(e.target.value);
    alert(modeOfpay);
 }
  return (
    <div>
<br/>
    <center> <h4>Continue Shopping....</h4>
    <br/>
    <br/>
     <div className="row">
      <div className='col-sm-12 col-md-6'>
      
      <div style={{width:'400px'}}>
          
         
          <table >
          <tr><td>Name:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custName"
          value={custName}
          onChange={(e) => setcustName(e.target.value)}/></td></tr>
            
            <tr><td>PhoneNo:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custPhoneno"
          value={custPhoneno}
          onChange={(e) => setcustPhoneno(e.target.value)}/></td></tr>
            <tr><td>City:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="city"
          value={city}
          onChange={(e) => setcustcity(e.target.value)}/></td></tr>
            <tr><td>State:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="state"
          value={state}
          onChange={(e) => setcuststate(e.target.value)}
            /></td></tr>
            <tr><td>Country:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="country"
          value={country}
          onChange={(e) => setcustcountry(e.target.value)}
            /></td></tr>
            <tr><td>Zipcode:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="zipCode"
          value={zipCode}
          onChange={(e) => setcustzipCode(e.target.value)}
          /></td></tr>
            <tr><td>Address:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="location"
          value={locations}
          onChange={(e) => setlocations(e.target.value)}
           /></td></tr>
           <tr><td>Total Cost:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="totalcost" disabled
         value={cost1+cost2+cost3} placeholder={cost1+cost2+cost3}
          
           /></td></tr>
          </table>
          {/* <Link to={`/updateForOrder/edit/${sid}`}>
    <button type="button" class="btn btn-primary">Update</button>
    </Link> */}
    
   
    <button type="button" class="btn btn-primary" onClick={()=>UpdateData()}>Update</button>
   
          </div>

      </div> 
      <div className='col-sm-12 col-md-6'>
      <h2>Hello {custName}</h2>
      <h4>Your Products as below....</h4>
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
         
      
        </tbody>
 </table>
 <br/>
 <table>
     <tr>
 <input type="radio" name="mode" value="Cash_On_Delivery" onClick={(e)=>saveModeofpay(e)}  id="mode"/>   Cash On Delivery
 </tr>
 <tr>
              <input type="radio" name="mode" value= "Net_Banking" id="mode" disabled/ >   Net Banking
              </tr>
              <tr>
              <input type="radio" name="mode" value="Online_Payment" id="mode" disabled/ >   Online Payment
              </tr>
</table>
<table>
    <tr>
<td><input type="text" className="form-control col-12" id="totalcost" style={{width:'100px'}} placeholder={cost1+cost2+cost3} disabled/></td>
<td><button type="button" class="btn btn-primary" onClick={()=>FinalOrder()}>Pay</button></td>
    </tr>
          
          </table>

      </div>
    </div>
    
    </center>


   
    </div>
  )
}

export default OrderAndPayement