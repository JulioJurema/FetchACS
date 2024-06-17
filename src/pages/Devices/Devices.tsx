import React, { useEffect, useState } from "react";
import CardRouterItem from "../../components/CardRouterItem/CardRouterItem";
import './Devices.css'

const Devices: React.FC = () => {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/devices");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: any[] = await response.json();
        setDevices(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="devicesContainer">
      <h1>Devices</h1>
      <span>Gerencie os dispositivos na sua rede.</span>
      <div className="deviceListContainer">
        <div className="deviceListHeader">
          <p>teste</p>
        </div>
        <div className="deviceList">
          {devices.map((device, index) => (
            <CardRouterItem key={index} props={device}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
