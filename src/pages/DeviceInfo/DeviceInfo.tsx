import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useParams } from 'react-router-dom';
import HostList from "../../components/HostsList/HostList";
import './DeviceInfo.css'

interface Device {
  _id: string;
  _deviceId: {
    _Manufacturer: string;
    _SerialNumber: string;
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
      <Title text={dataDevice._deviceId._Manufacturer} description={dataDevice._deviceId._SerialNumber} />
      <HostList props={hosts} />
    </div>
  );
};

export default DeviceInfo;
