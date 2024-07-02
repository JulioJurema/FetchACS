import { useState, useEffect } from "react";
import "./HostList.css";
import HostItem from "../HostItem/HostItem";

interface HostListProps {
  props: any[];
}

const HostList: React.FC<HostListProps> = ({ props }) => {

  const objectToVector = Object.entries(props);
  const [hostProps, setHostProps] = useState<any[]>([]);

  useEffect(() => {
    setHostProps(objectToVector);

    //console.log(hostProps);
  }, [props]);

  return (
    <div className="hostListContainer">
      <h3>Dispositivos conectados</h3>
      <div className="hostListAlign">
        {
          hostProps.map((host, index)=>(
            <HostItem key={index} host={host} /> 
          ))
        }
      </div>
    </div>
  );
};

export default HostList;
