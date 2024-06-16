import React, { useEffect, useState } from "react";

const Devices: React.FC = () => {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/devices");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: any[] = await response.json();
        setDevices(data);

        console.log(devices);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Devices</h2>
      <ul>
        {devices.map((device, index) => (
          <li key={index}>{JSON.stringify(device._deviceId._SerialNumber)}</li>
        ))}
      </ul>
    </>
  );
};

export default Devices;
