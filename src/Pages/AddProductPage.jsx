import { useContext, useEffect } from "react";
import Dashboard from "../Components/Dashboard";
import { AppCtx } from "../Context/AppContext";
import { addProduct } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";

export default function AddProductPage(){

    const {result,setResult,productName,productCategory,productPrice,productQuantity,setProductName,setProductCategory,setProductQuantity,setProductPrice}=useContext(AppCtx);
    const navigate=useNavigate();
    function addProductToDb(){
        const data={
            name:productName,
            category:productCategory,
            price:productPrice,
            quantity:productQuantity
        }
        addProduct(data).then((result)=>{
            if(result.message==="Add Product Successfull"){
                setResult(result.message);
                setTimeout(()=>{
                    navigate("/dashboard");
                    window.location.reload();
                },2000)
            }else{
                setResult(result.message);
            }
    }).catch((error)=>{
        console.log(error)});
    }
    
    useEffect(()=>{
      setResult("");
      setProductName("");
      setProductPrice("");
      setProductQuantity("")  
    },[])
    return(
        <div className="addProductPage-section">
           <Dashboard>
            <div className="addtoproduct-formsection">
           <input value={productName} onChange={(event)=>setProductName(event.target.value)} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs mt-28" /><br/>
           <input value={productCategory} onChange={(event)=>setProductCategory(event.target.value)} type="text" placeholder="Product Category" className="input input-bordered w-full max-w-xs" /><br/>
           <input value={productPrice} onChange={(event)=>setProductPrice(event.target.value)} type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs" /><br/>
           <input value={productQuantity} onChange={(event)=>setProductQuantity(event.target.value)} type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs" /><br/>
           <button className="btn skeleton mb-2 bg-primary" onClick={()=>addProductToDb()}>Add Product</button>
           {result?<h3>{result}</h3>:""} 
           </div>
           </Dashboard>
        </div>
    )
}