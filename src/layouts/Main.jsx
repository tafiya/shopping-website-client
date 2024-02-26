import { Outlet, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";



const Main = () => {
    const  location=useLocation();
    console.log(location);
    const noFooter =location.pathname.includes('login') ||location.pathname.includes('signup')||location.pathname.includes(`itemView`)||location.pathname.includes(`cart`) ;
    const noHeader =location.pathname.includes('login') ||location.pathname.includes('signup')||location.pathname.includes(`itemView`)||location.pathname.includes(`cart`) ;
    return (
        <div>
                 {noHeader || <Navbar></Navbar>}
           
           <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
             
        </div>
    );
};

export default Main;