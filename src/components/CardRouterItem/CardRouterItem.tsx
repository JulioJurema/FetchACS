import { useState } from "react";
import './CardRouterItem.css'


interface AllProps{
    props: any;
}

const CardRouterItem: React.FC<AllProps> = ({props}) =>{
    const [device, setDevice] = useState([props]);
    const [showData, setShowData] = useState<boolean>(true);

    const handleClick = () => {
        setShowData(!showData);
    }

    return (
        <div className="cardContainer">
            {showData ? (
                <div className="cardPreview" onClick={handleClick}>
                    <p>{device[0].InternetGatewayDevice.LANDevice[1].WLANConfiguration[1].SSID._value}</p>
                    <p>{device[0]._deviceId._SerialNumber}</p>
                    <p>{device[0]._deviceId._ProductClass}</p>
                    <p>{device[0]._deviceId._Manufacturer}</p>
                </div>
            ) : (
                <div className="cardExtended">
                    <p>teste</p>
                    <button onClick={handleClick}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default CardRouterItem;
