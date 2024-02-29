import { useContext, useEffect } from "react";
import Dashboard from "../Components/Dashboard";
import { AppCtx } from "../Context/AppContext";
import { deleteProduct } from "../Helpers/helper";

export default function DashboardPage(){

    const {data}=useContext(AppCtx);
    const quantity=data.reduce((accumulator,value,index,array)=>{
        return accumulator+=value.quantity;
    },0)
    const storeValue=data.reduce((accumulator,value,index,array)=>{
        return accumulator+=value.price;
    },0)
    function deleteProductFromDb(id){
        const data={
            id
        }
        deleteProduct(data).then((result)=>{
            if(result.message==="Delete Product Successfull"){
               console.log("delete product sucessfull")
            }else{
                console.log("Error deleting data")
            }
    }).catch((error)=>{console.log("Error fetching deleting data")});
    }
    return(
        <div className="dashboard-page">
            <Dashboard>
            <a className="btn btn-ghost text-xl">Inventory Stats</a><br/>
                <div className="stats shadow">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">{data.length}</div>
                
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Total Quantity</div>
                    <div className="stat-value">{quantity}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Total Store Value</div>
                    <div className="stat-value">{storeValue}</div>
                   
                </div>
                </div><br/>
                <a className="btn btn-ghost text-xl">Inventory Items</a><br/>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Value</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {data && data?.map((value,index)=>(
                            
                            <tr>
                            <th>{index+1}</th>
                            <td>{value.name}</td>
                            <td>{value.category}</td>
                            <td>{value.price}</td>
                            <td>{value.quantity}</td>
                            <td>{value.price*value.quantity}</td>
                            <td className="delete-button" onClick={()=>{deleteProductFromDb(value._id)
                            window.location.reload();
                            }}>Delete</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
            </Dashboard>
        </div>
    )
}