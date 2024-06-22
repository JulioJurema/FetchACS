import CardRouterItem from "../../components/CardRouterItem/CardRouterItem";
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
      <h1>Devices</h1>
      <span>Gerencie os dispositivos na sua rede.</span>
      <div className="deviceListContainer">
        <div className="deviceListHeader">
          <p>teste</p>
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
