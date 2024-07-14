import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Devices from "./pages/Devices/Devices";
import DeviceInfo from "./pages/DeviceInfo/DeviceInfo";
import React, { useEffect, useState } from "react";

import "./index.css";
import LoginPage from "./pages/LoginPage/LoginPage";

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
    <section className="screen">
      <BrowserRouter>
        <div className="containerScreen">
          <div className="alignPages">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/devices" element={<Devices devicesList={devices} />} />
              <Route path="/devices/:id" element={<DeviceInfo devices={devices} />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
        
      </BrowserRouter>
    </section>
  );
};

export default Rotas;
