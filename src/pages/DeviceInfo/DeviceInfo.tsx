import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useParams } from 'react-router-dom';
import HostList from "../../components/HostsList/HostList";

interface deviceInfoProps{
    dataDevice: string[];
}

const DeviceInfo: React.FC<deviceInfoProps> = () =>{
    let { id } = useParams();
    const [dataDevice, setDataDevice] = useState([]);

    useEffect(() =>{

        const fetchDataDevice = async ()=> {
            try {
                const response = await fetch(`/api/devices/?query={"_id":%20"${id}"}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                  }
                  const data = await response.json();
                  setDataDevice(data);
          
                  console.log(data);

            } catch (error){
                console.log(error);
            }
        }

        fetchDataDevice();
    }, []);

 
    return(
        <>
            <Title text="Titulo" description="Descrição"/>
            <p>O id é: {id}</p>

            <HostList />
        </>
    )
}


export default DeviceInfo;