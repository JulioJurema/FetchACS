import React, { useState } from 'react';
import CardRouterItem from "../../components/CardDevicesItem/CardDevicesItem";
import Title from "../../components/Title/Title";
import './Devices.css';
import NavBar from '../../components/NavBar/NavBar';

interface Device {
  id: string;
  name: string;
}

interface DevicesProps {
  devicesList: Device[];
}

const Devices: React.FC<DevicesProps> = ({ devicesList }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Manipulador de eventos para atualizar o termo de pesquisa
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    if(searchTerm != ""){
      console.log("teste");
    }
  };

  return (
    <section className='screenDevices'>
      <div className='navDevicesContainer'>
        <NavBar />
      </div>
      <div className="devicesContainer">
        <Title text="Dispositivos" description="Gerencie os dispositivos na sua rede." />
        <div className="deviceListContainer">
          <div className="deviceListHeader">
            <input
              className="searchDevices"
              type="text"
              placeholder="Pesquisar dispositivos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="legendList">
            <p>SSID</p>
            <p>MAC</p>
            <p>Modelo</p>
            <p>Fabricante</p>
          </div>
          <div className="deviceList">
            {devicesList.map((device, index) => (
              <CardRouterItem key={index} props={device} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
