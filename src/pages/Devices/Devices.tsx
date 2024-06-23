import CardRouterItem from "../../components/CardDevicesItem/CardDevicesItem";
import Title from "../../components/Title/Title";
import './Devices.css';


interface Device {
  id: string;
  name: string;
}
interface DevicesProps {
  devicesList: Device[];
}

const Devices: React.FC<DevicesProps> = ({ devicesList }) => {
  return (
    <section className="devicesContainer">
      <Title text="Dispositivos" description="Gerencie os dispositivos na sua rede."/>
      <div className="deviceListContainer">
        <div className="deviceListHeader">
          <input className="searchDevices"
            type="text"
            placeholder="Pesquisar dispositivos..."
          />
        </div>
        <div className="deviceList">
          {devicesList.map((device, index) => (
            <CardRouterItem key={index} props={device} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
