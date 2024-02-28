import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard({children}){
    return(
        <div class="text-center">
        <div class="row">
          <div class="col">
             <Topbar/>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
           <Sidebar/>
          </div>
          <div class="col-10">
            {children}
          </div>
        </div>
        </div>
    )
}