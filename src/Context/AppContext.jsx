import React, { createContext, useEffect, useState } from "react";
import { getProduct } from "../Helpers/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
   
    const [auth,setAuth]=useState("Signin");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const [result,setResult]=useState("");
    const [data,setData]=useState([]);
    const [productName,setProductName]=useState("");
    const [productCategory,setProductCategory]=useState("");
    const [productPrice,setProductPrice]=useState("");
    const [productQuantity,setProductQuantity]=useState("");
    const [userName,setUsername]=useState("");

    useEffect(()=>{
         getProduct(data).then((result)=>{
            if(result.message==="Get Product Successfull"){
                setData(result.data);
            }else{
                console.log("Error getting data")
            }
    }).catch((error)=>{console.log("Error fetching product data")});


    },[])
    return(
       
        <AppCtx.Provider value={
            {   
                auth,setAuth,email,name,pass,setEmail,setName,setPass,result,setResult,data,setData,productName,productCategory,productPrice,productQuantity,setProductName,setProductCategory,setProductPrice,setProductQuantity,userName,setUsername
            }}>{children}</AppCtx.Provider>
    )
}