import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useParams } from 'react-router-dom';
import HostList from "../../components/HostsList/HostList";
import './DeviceInfo.css'
import HostDescription from "../../components/HostDescription/HostDescription";

interface Device {
  _id: string;
  _deviceId: {
    _Manufacturer: string;
    _ProductClass: string;
  };
  InternetGatewayDevice: {
    LANDevice: {
      [key: string]: {
        Hosts: {
          Host: any[];
        };
      };
    };
  };
}

interface DeviceInfoProps {
  devices: Device[];
}

const DeviceInfo: React.FC<DeviceInfoProps> = ({ devices }) => {
  let { id } = useParams<{ id: string }>();
  const [dataDevice, setDataDevice] = useState<Device | null>(null);

  useEffect(() => {
    const device = devices.find((device) => device._id === id);
    if (device) {
      setDataDevice(device);
    }
  }, [id, devices]);

  if (!dataDevice) {
    return <p>Loading...</p>;
  }

  const hosts = dataDevice.InternetGatewayDevice.LANDevice["1"].Hosts.Host;

  return (
    <div className="containerDashHost">
      <div className="dashAlign">
        <Title text={dataDevice._deviceId._Manufacturer} description={dataDevice._deviceId._ProductClass} />
        <div className="dashSpaceCards">
          <HostList props={hosts} />
        </div>
        
      </div>
      <div className="descriptionAlign">
        <HostDescription />
      </div>
    </div>
  );
};

export default DeviceInfo;
