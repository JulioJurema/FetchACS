import './HostDescription.css';


const HostDescription: React.FC = () => {
    return(
        <div className="hostDescriptionContainer">
            <div className="hostImageContainer">
                <img src="../public/roteador.jpg" alt="Foto do roteador" />
            </div>
            <div className='aboutHost'>
                <span>Status</span>
                <span>Ethernet ports</span>
            </div>
        </div>
    )
}


export default HostDescription;