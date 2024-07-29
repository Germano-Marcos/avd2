import { Outlet } from "react-router-dom";



// Components
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";



import './App.css'


function App() {

  return (
    <>
      <Navbar />
      
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
