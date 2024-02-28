export default function Topbar(){
    return(
        <div className="topbar-section">
                <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Welcome, Dineshwaran</a>
                </div>
                
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                   Logout  
                    </button>
                </div>
                </div>
        </div>
    )
}