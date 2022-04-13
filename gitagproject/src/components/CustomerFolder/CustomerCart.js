
import React from "react";
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import {Button,Modal} from 'react-bootstrap'; 
import {Trash,Pen} from 'react-bootstrap-icons';
/* import { Table , Button } from "react-bootstrap-icons"; */
import BackendService from '../../service/BackendService'
import Navbar from "../Navbar";
// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
// import EditIcon from '@mui/icons-material/Edit';
//import UpdateQuantity from "./UpdateQuantity";
//import { color } from "@mui/system";
//import { Cart } from "react-bootstrap-icons";

const CustomerCart =()=>{
  const[qty, setQuantity] = useState('');
  const[cartIds, setCartIds] = useState('');
  const[productIds, setproductIds] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);//to hide the popup box
  const handleShow = () => setShow(true);//to show the popup box
  const [cartArr, setcartarr] = useState([]);
  const [cost, setCost] = useState([]);
  const [arr,setArr]=useState([]);
  const history = useHistory();
  const crtArr=[];
//get the user
let cid=localStorage.getItem('userId');


const init=()=>{
  console.log("customer id is "+cid);
  BackendService.getAllCartData(cid)
  .then((response) => {
    console.log("cart items", response.data);
    console.log("cart items", response.data.cartItems);
  //  const cartid=response.data.cartItems.id;
  //  const prodid=response.data.cartItems.product.id;
  //  console.log("ur cartid-->"+cartid+"ur prodid--->"+prodid);
    setcartarr(response.data.cartItems); 
    setCost(response.data.totalcost);

console.log("array of items ---->"+cartArr.quantity);
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
}
useEffect(() => {
  init();
}, []);

//to delete item from cart
    const handleDelete = (id) => {
      console.log('Printing cart id', id);
      BackendService.remove(id)
        .then(response => {
          alert('cart item deleted successfully!');
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    }


    const saveQuantity = (cartId,prodId,qty) => {
      
      //const product = {cid,id,prodId,quantity};
      const updateData={cid,qty,prodId,cartId};
      alert("cart id "+cartId);
      alert("productId "+prodId);
      alert("quantity "+qty);
      
            //update
            BackendService.updateCartQty(updateData)
                .then(response => {
                   alert(response.data);
                    //history.push('/category');
                    window.location.reload(false); 
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        
    }

    const AddCheckedItem=(crtid)=>{
          crtArr.push(crtid);
          alert(crtArr);
    }
   
    const placeOrder=()=>{
       /* history.push("/ConfirmOrder",crtArr); */
       history.push({
        pathname: '/ConfirmOrder',
        state: crtArr,
      });
  
    }



    

    if (localStorage.getItem('userId'))
    {
  return(


<div >
<Navbar/>
<br/>
<br/>
{/* <h6>Welcome , {user.username}</h6>
<h5>In Your Cart : <b>{cartArr.length}</b></h5>
<a href="/ViewProduct">continue shopping</a> */}
<table className="table table-striped">
        <thead>
            <tr className="float-center">
                <th></th>
                <th >Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
               
                <th>Delete</th>
                <th>Total</th>
              
            </tr>
        </thead>
        <tbody>
        {
          cartArr.map(cart=>(
          
            <tr key={cart.id} >
              <td><input type="checkbox"  value={cart.id} onClick={()=>AddCheckedItem(cart.id)}/></td>
            <td>{cart.product.prodname}</td>
            <td>{cart.product.price}</td>
            <td>{cart.quantity} 
 
            <div>
            <div onClick={handleShow}><Pen onClick={() => setCartIds(cart.id)}/></div>

            {/* <div onClick={handleShow}><Pen onClick={() => arr.push(setCartIds(cart.id),setproductIds(cart.produt.id))}/></div> */}

        <Modal show={show} onHide={handleClose}>          
            <center><Modal.Title>Update Quantity</Modal.Title></center>
          <Modal.Body>
          <div className="form-group">
                    <input 
                        type="number" 
                        max={5}
                        min={1}
                        className="form-control col-4"
                        id="quantity"
                        value={qty}
                        onChange={(e) => setQuantity(e.target.value) }
                        placeholder="Enter quantity"
                    />
         </div>
          </Modal.Body>
          <Modal.Footer>
            
            {/* <Button variant="primary" onClick={() => saveQuantity(arr[0],arr[1],qty)}> */}
            <Button variant="primary" onClick={() => saveQuantity(cartIds,cart.product.id,qty)}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

            </div></td>

            <td>{/* <Button variant="danger" size="sm" onClick={() => {
                    handleDelete(cart.id);
                  }}> */}
                  <div onClick={() => {
                    handleDelete(cart.id);
                  }}>
  <Trash/></div></td>
  <td>{cart.quantity*cart.product.price}</td>
          </tr>

          )
          )
        }
       
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            {/* <td>Total : {cost}</td> */}
          </tr>
      
        </tbody>
 </table>
 {/* 
 <h6><b>Total</b></h6>
 <hr/> */}
 <center><button className="btn4 btn-primary" style={{width:'200px'}} onClick={() => placeOrder()}>Place Order</button>
 </center>
 </div>

);
}
else
{
  return(
    <div>
      <center>
      <h5>Please Login First</h5>
     <Link to="/LoginPage">
    <button type="button" class="btn btn-primary">Login</button>
    </Link>
    </center>
    </div>
  )
}
}
export default CustomerCart;























// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Button,Dash,Pluslg} from 'react-bootstrap';
// import BackendService from '../../service/BackendService'
// import {Cart4} from 'react-bootstrap-icons';
// function Cart() {
//   let cid=localStorage.getItem('userId');
//   const [cartArr,setCartArr]=useState([]);
//   const [qty, setQty] = useState("");
//   const [cartId,setcartId]= useState("");
//   const [prodId,setprodId]= useState("");
//   const str='';
// const init=()=>{
//   console.log("customer id is "+cid);
//   BackendService.getAllCartData(cid)
//   .then((response) => {
//     console.log("cart items", response.data);
//     console.log("cart items", response.data.cartItems);
//   //  const cartid=response.data.cartItems.id;
//   //  const prodid=response.data.cartItems.product.id;
//   //  console.log("ur cartid-->"+cartid+"ur prodid--->"+prodid);
//     setCartArr(response.data.cartItems); 


// console.log("array of items ---->"+cartArr.quantity);
//   })
//   .catch((error) => {
//     console.log("something went wrong", error);
//   });
// }
// useEffect(() => {
//   init();
// }, []);

// const UpdateQtyPlus=(qtyy1,prodid1,cartid1)=>{
//   const updateData={cid,qty,prodId,cartId};
 
//   setQty(qtyy1);
//   setprodId(prodid1);
//   setcartId(cartid1);
//   console.log("updated qty as--->"+qty);
//   console.log("prodid---->"+prodId);
//   console.log("cartid---->"+cartId);
  

//   BackendService.updateCartQtyPlus(updateData)
//   .then((response) => {
//     alert(response.data);
   
//       init();
   
//   })
//   .catch((error) => {
//     console.log("something went wrong", error);
//   });
// } 

// const UpdateQtyMinus=(qtyy2,prodid2,cartid2)=>{
//   const updateData={cid,qty,prodId,cartId};
 
//    setQty(qtyy2);
//    setprodId(prodid2);
//    setcartId(cartid2);
//    console.log("updated qty as--->"+qty);
//    console.log("prodid---->"+prodId);
//    console.log("cartid---->"+cartId);
   
 
//    BackendService.updateCartQtyMinus(updateData)
//    .then((response) => {
//      alert(response.data);
    
//        init();
    
//    })
//    .catch((error) => {
//      console.log("something went wrong", error);
//    });
//  } 
//   return <div>
   
//    <table className="table table-bordered table-striped">
//           <thead className="thead-dark">
//             <tr>
             
//               <th>Product Name</th>
//               <th>Quantity</th>
              
//               <th>Incr/Decr</th>
//               <th>Price</th>
//               <th>Delete</th>
//               <th>Total Cost</th>
//             </tr>
//           </thead>
//           <tbody>
//           {
//             cartArr.map(cart=>(
//               <tr key={cart.id} >
//               <td>{cart.product.prodname}</td>
//               {/* <td ><input type="number" class="form-control" id="qty"  max={5} min={1} 
//               placeholder={cart.quantity} 
//               value={qty}
//               // onChange={(e,c,p) => UpdateQty(cart.quantity -,cart.id,cart.product.id)}
//               /> */}
//               <td>{cart.quantity} </td>
//               <td>
//               <button  onClick={()=>UpdateQtyPlus(qty,cart.id,cart.product.id)}> + </button> 
//               <button onClick={()=>UpdateQtyMinus(qty,cart.id,cart.product.id)}> - </button> 
//               </td>
             
//               <td>{cart.product.price}</td>

              
//                 <td>
//                 <Button variant="info" type="submit">
//                 Delete
//                 </Button>
//                 </td>
//                 <td>{cart.quantity*cart.product.price}</td>
//               </tr>
//             ))
          
//           }
//               </tbody>
//         </table>






//   </div>;
// }

// export default Cart;
