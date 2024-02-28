import Dashboard from "../Components/Dashboard";

export default function DashboardPage(){
    return(
        <div className="dashboard-page">
            <Dashboard>
            <a className="btn btn-ghost text-xl">Inventory Stats</a><br/>
                <div className="stats shadow">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">31K</div>
                
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Total Store Value</div>
                    <div className="stat-value text-secondary">4,200</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Out of Stock</div>
                    <div className="stat-value">1,200</div>
                   
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">All Categories</div>
                    <div className="stat-value">1,200</div>

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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>10</td>
                            <td>2</td>
                            <td>20</td>
                            <td>Delete</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>10</td>
                            <td>2</td>
                            <td>20</td>
                            <td>Delete</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>10</td>
                            <td>2</td>
                            <td>20</td>
                            <td>Delete</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </Dashboard>
        </div>
    )
}