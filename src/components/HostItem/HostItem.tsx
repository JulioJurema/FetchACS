import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./HostItem.css"

interface HostItemProps {
  host: any;
}

const HostItem: React.FC<HostItemProps> = ({ host }) => {
  const [hostDescription, setHostDescription] = useState(host);

  useEffect(() => {
    setHostDescription(host);
  }, [host]);

  return (
    <div className={hostDescription[1]?.MACAddress?._value ? "hostItem" : "hostItem hide"}>
      <div className="infoContainer">
        <h4>{hostDescription[1]?.HostName?._value || '" "'}</h4>
        <span>{hostDescription[1]?.MACAddress?._value || '" "'}  </span>
      </div>
      <div className="delContainer">
        <button><BiDotsHorizontalRounded size={20}/></button>
      </div>
    </div>
  );
};

export default HostItem;
