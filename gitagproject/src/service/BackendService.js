import httpClient from '../http-common';

const create = (data) => {
    return httpClient.post('/customer/register', data);
  };
const getAll = () => {
    return httpClient.get('/subscriber/rules');
  };
  const getSubData = (id) => {
    //http://localhost:8080/subscriber/acc/7
    console.log("id is"+id);
    return httpClient.get('/subscriber/acc/'+`${id}`);
  };//
  const getCustData = (id) => {
    //http://localhost:8080/subscriber/acc/7
    console.log("id is"+id);
    return httpClient.get('/customer/acc/'+`${id}`);
  };//
  const createSub = (data) => {
    return httpClient.post('/subscriber/register', data);
  };
  const updateSubInfo = (data) => {
    return httpClient.put('/subscriber/accountInfoUpdate', data);
  };
  const updateCustInfo = (data) => {
    return httpClient.put('/customer/accountInfoUpdate', data);
  };
  const loginCred=(data)=>{
    return httpClient.post('/login',data);
  }
  const getAccountCust=(id)=>{
    return httpClient.post('/customer/'+`${id}`);
  }
  const getAccountSub=(id)=>{
    return httpClient.post('/subscriber/'+`${id}`);
  }
  const getAllCatg = () => {
    return httpClient.get('/home/categ');
  };
  const getAllProduct = () => {
    return httpClient.get('/home/products');
  };
  const getSubCat = (id) => {
    return httpClient.get('/form/subcatg/'+`${id}`);
  };
  const addProduct=(data)=>{
    return httpClient.post('/image/upload_folder',data);
  };
  const retrivePass=(data1)=>{
    return httpClient.post('/forgotPass',data1);
  };
  const getProductDataTosubscriber=(id)=>{
    return httpClient.get('/image/product/'+`${id}`);
  };
  const getProductData=(id)=>{
    return httpClient.get('/image/product/edit/'+`${id}`);
  };
  const updateProd=(data)=>{
    return httpClient.post('/image/product/edit',data);
  };
  const createCart=(data)=>{
    return httpClient.post('/cart/add',data);
  };
  const getAllCartData=(id)=>{
    return httpClient.get('/cart/allItems/'+`${id}`);
  };
  const remove=(id)=>{
    return httpClient.delete('/cart/'+`${id}`); //  /cart/2
  };
  const updateCartQty=(data)=>{
    return httpClient.put('/cart/edit',data);
  };
  const callToGetSelectedItems=(id)=>{
    return httpClient.get('/cart/AllSelectedItems/'+`${id}`);
  };
  const saveFinallyOrder=(data)=>{
    return httpClient.post('/cart/addOrder',data);
  };
  const getSubCategWiseItems=(id)=>{
    return httpClient.get('/image/subcategory/'+`${id}`);
  };
  const getPlacedOrderData=(id)=>{
    return httpClient.get('/cart/getOrderDetails/'+`${id}`);
  };
  const getAllSubsciber=()=>{
    return httpClient.get('/admin/subscribers');
  }
  const deleteGivenSubsciber=(id)=>{
    return httpClient.delete('/admin/subscriber/'+`${id}`);
  }
  const storeFeedback=(data)=>{
    return httpClient.post('/customer/feedback',data);
  }
const getSerchProduct=(data)=>{
  return httpClient.post('/home/search',data);
}
const getAllProductsInfo=()=>{
  return httpClient.get('/admin/products');
}
const getAllOrderInfo=()=>{
  return httpClient.get('/admin/orders');
}
const blockGivenSubsciber=(id)=>{
  return httpClient.put('/admin/block/'+`${id}`);
}
const unblockGivenSubsciber=(id)=>{
  return httpClient.put('/admin/unblock/'+`${id}`);
}
const getAllFeedbckInfo=()=>{
  return httpClient.get('/admin/feedbck');
}
  export default {getAllFeedbckInfo,unblockGivenSubsciber,blockGivenSubsciber,getAllOrderInfo,getAllProductsInfo,getSerchProduct,storeFeedback,deleteGivenSubsciber,getAllSubsciber,getPlacedOrderData,getSubCategWiseItems,saveFinallyOrder,callToGetSelectedItems,remove,updateCartQty,getAllCartData,createCart,getAllProduct,updateProd,getProductData,getProductDataTosubscriber,addProduct,getSubCat,getCustData,updateCustInfo,getSubData, updateSubInfo,create ,getAll,createSub,getAccountCust,getAccountSub,loginCred,retrivePass,getAllCatg};