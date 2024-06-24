import Title from "../../components/Title/Title";
import { useParams } from 'react-router-dom';

const DeviceInfo: React.FC = () =>{
    let { id } = useParams();

    return(
        <>
            <Title text="Informações do dispositivo" description="Altere as configurações de forma remota"/>
            <p>O id é: {id}</p>
        </>
    )
}


export default DeviceInfo;