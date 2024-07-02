import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Devices from "./pages/Devices/Devices";
import DeviceInfo from "./pages/DeviceInfo/DeviceInfo";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import "./index.css";

const Rotas: React.FC = () => {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/devices/");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: any[] = await response.json();
        setDevices(data);

        //console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="containerScreen">
        <NavBar />
        <div className="alignPages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices devicesList={devices} />} />
            <Route path="/devices/:id" element={<DeviceInfo devices={devices} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Rotas;
