import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AppCtx } from "../Context/AppContext";

export default function Topbar(){

    const navigate=useNavigate();

    const {setResult,userName,setUsername}=useContext(AppCtx);

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("userData"));
        setUsername(data.data[0].name);
    },[])
    return(
        <div className="topbar-section">
                <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Welcome, {userName}</a>
                </div>
                
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={()=>{
                        setResult("");
                        navigate("/")}}>
                   Logout  
                    </button>
                </div>
                </div>
        </div>
    )
}