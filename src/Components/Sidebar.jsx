import { useNavigate } from "react-router-dom"

export default function Sidebar(){
    const navigate=useNavigate();
    return(
        <div className="sidebar-section">
           <ul className="menu bg-base-200 w-38 rounded-box">
                <li><a onClick={()=>navigate("/dashboard")}>Dashboard</a></li>
                <li><a onClick={()=>navigate("/addtoproduct")}>Add Product</a></li>
                <li><a onClick={()=>navigate("/billing")}>Billing</a></li>
                </ul>
        </div>
    )
}