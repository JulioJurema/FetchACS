import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import './Dashboard.css';



const Dashboard: React.FC = () => {
    
    return(
        <section className="screenDashboard">
            <div className="navDashboardContainer">
                <NavBar />
            </div>
            <div className="dashboardContainer">
                <Title text="Dashboard" description="Monitore sua rede de forma simples."/>    
            </div>
        </section>
    );
};

export default Dashboard;