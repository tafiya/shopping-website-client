import { Outlet, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";



const Main = () => {
    const  location=useLocation();
    console.log(location);
    const noHeaderFooter =location.pathname.includes('login') ||location.pathname.includes('signup')||location.pathname.includes(`itemView`) ;
    return (
        <div>
                 {noHeaderFooter || <Navbar></Navbar>}
           
           <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
             
        </div>
    );
};

export default Main;