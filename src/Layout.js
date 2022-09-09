import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContactUs } from './components/ContactUs';

const Layout=() => {

    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    ) 
};

export default Layout;