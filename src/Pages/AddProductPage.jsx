import Dashboard from "../Components/Dashboard";

export default function AddProductPage(){
    return(
        <div className="addProductPage-section">
           <Dashboard>
            <div className="addtoproduct-formsection">
           <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" /><br/>
           <input type="text" placeholder="Product Category" className="input input-bordered w-full max-w-xs" /><br/>
           <input type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" /><br/>
           <input type="text" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs" /><br/>
           <button className="btn btn-neutral">Ghost</button>
           </div>
           </Dashboard>
        </div>
    )
}