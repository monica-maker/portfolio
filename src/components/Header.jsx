import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "/src/components/styles/Header.css";


export default function Header() {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <div className="header">
                <nav className="nav1">
                    <div className="logo">
                        <h1>MDee</h1>
                    </div>
                    <div className="in">

                        <div className={`menu ${show ? "show" : ""}`}>
                            <ul>
                                <li key="home"><a href="#">Home</a></li>
                                <li key="service"><a href="#">Service</a></li>
                                <li key="portfolios"><a href="#">Portfolios</a></li>
                                <li key="testimonials"><a href="#">Testimonials</a></li>
                            </ul>
                            <div className={`chat_button ${show ? "show" : ""}`}>
                                <button><h4>Let's Talk.</h4></button>
                            </div>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <MenuIcon className="icon" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
