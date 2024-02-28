export default function Sidebar(){
    return(
        <div className="sidebar-section">
           {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Dashboard</button>
           <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add Product</button>
           <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Chart</button> */}
           <ul className="menu bg-base-200 w-38 rounded-box">
                <li><a>Dashboard</a></li>
                <li><a>Add Product</a></li>
                <li><a>Graph</a></li>
                </ul>
        </div>
    )
}