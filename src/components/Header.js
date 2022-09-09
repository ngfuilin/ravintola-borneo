import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';
import logo from '../images/logo-color.png';

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                <img src={logo} className="logo" alt="logo" />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
