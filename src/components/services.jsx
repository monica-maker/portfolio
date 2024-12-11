import "/src/components/styles/services.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function Middle(){
    return(
        <>
        <div className="services">
            <div className="service">
                <h1>Services</h1>
                <p className="a">Here area the services we are providing to you.</p>
            </div>
            <div className="cards_container">
                <div className="cards">
                    <DashboardIcon/>
                    <h4>UI/UX Designing</h4>
                </div>
                <div className="cards">
                    <DashboardIcon/>
                    <h4>App UI/UX</h4>
                </div>
                <div className="cards">
                    <DashboardIcon/>
                    <h4>Web Development</h4>
                </div>
                <div className="cards">
                    <DashboardIcon/>
                    <h4>Graphic Designing</h4>
                </div>
                <div className="cards">
                    <DashboardIcon/>
                    <h4>Product Designing</h4>
                </div>
                <div className="cards">
                    <DashboardIcon/>
                    <h4>Social Media Posts</h4>
                </div>
            </div>
                <button className="b2">View All</button>
        </div>
        </>
    )
}