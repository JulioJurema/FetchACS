import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Devices from "./pages/Devices/Devices"


import "./index.css"
import NavBar from "./components/NavBar/NavBar"

const Rotas: React.FC = () => {
    

  return (
    <BrowserRouter>
      <div className="containerScreen">
        <NavBar />
        <div className="alignPages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Rotas
