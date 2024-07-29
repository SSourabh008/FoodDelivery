import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Add from "./pages/Add/Add"
import Order from "./pages/Order/Order"
import List from "./pages/List/List"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <div>
      <ToastContainer/>
        <Navbar/>
        <hr />
        <div className="app-content">
          <Sidebar/>
          <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/orders" element={<Order/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
