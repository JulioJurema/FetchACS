import { useState } from "react";
import './CardDevicesItem.css'
import { Link } from "react-router-dom";


interface AllProps{
    props: any;
}

const CardRouterItem: React.FC<AllProps> = ({props}) =>{
    const [device, setDevice] = useState([props]);

    return (
  <div className="cardContainer">
        <Link to={`/devices/${device[0]._id}`} className="cardPreview">
            <p>{device[0].InternetGatewayDevice.LANDevice[1].WLANConfiguration[1].SSID._value}</p>
            <p>{device[0]._deviceId._SerialNumber}</p>
            <p>{device[0]._deviceId._ProductClass}</p>
            <p>{device[0]._deviceId._Manufacturer}</p>
        </Link>
  </div>
);
}

export default CardRouterItem;
