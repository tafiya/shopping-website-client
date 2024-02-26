import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import '../layouts/Dashboard.css'
import useCart from "../hooks/useCart";




const Dashboard = () => {
    const [cart] = useCart();


    return (
        <div className="  ">
            <div className="dropdown  md:hidden">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                    {

                        <>


                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                            </li>

                        </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            <div className=" flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-red-100 header_div  ">
                    <ul className="menu p-4">
                        {

                            <>


                                <li>
                                    <NavLink className="lg:text-xl md:text-lg font-semibold" to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>

                            </>
                        }
                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink className="lg:text-xl md:text-lg font-semibold" to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="w-full   md:flex-1 p-8">
                    <Outlet></Outlet>
                </div>

            </div>


        </div>

    );
};

export default Dashboard;