import './App.css'
import {Route,Routes} from "react-router-dom";
import DashboardPage from './Pages/DashboardPage';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import AddProductPage from './Pages/AddProductPage';
import ChartPage from './Pages/ChartPage';
function App() {
 

  return (
   <Routes>
       <Route exact path='/' element={<DashboardPage/>}/>

   </Routes>
  )
}

export default App
