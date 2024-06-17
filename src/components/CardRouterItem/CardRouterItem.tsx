import { useState } from "react";


interface AllProps{
    props: any;
}

const CardRouterItem: React.FC<AllProps> = ({props}) =>{
    const [device, setDevice] = useState([props]);

    return (
        <div>
            <span>{device[0]._deviceId._SerialNumber}</span>
            <span>{device[0]._deviceId._SerialNumber}</span>
        </div>
    );
}

export default CardRouterItem;

