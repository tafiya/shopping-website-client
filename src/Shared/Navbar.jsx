
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { Link,  } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";



const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
 
  const [cart] =useCart()
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      Swal.fire("Logout successfully done!");
    })
    .catch(error=>console.log(error));
  }
    const navOption=<>
    <li><Link className=" text-lg font-semibold md:mr-4" to='/'>Home</Link></li>

    <li><Link className="text-lg " to='dashboard/cart'>
     <FaShoppingCart />
  <div className="badge badge-secondary"> +{cart.length}</div>
</Link></li>
          
    </>
    return (
        <>
             <div className="navbar md:h-20 h-8  text-black fixed z-10 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
             {navOption}
            </ul>
          </div>
         <a className="md:ml-10 italic   text-xl">S t y l e <span className=" text-red-300 font-semibold">H a v e n</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 inline-flex">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
        {
        user?<div className="dropdown dropdown-bottom dropdown-end text-black">
        <label tabIndex={0} className=" m-1"><img src={user.photoURL? user.photoURL:profile} alt="" className=" border rounded-full h-12 w-12" /></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className="text-red-300 uppercase text-base font-semibold">{user.displayName}</a></li>
          <li><a><button className="hover:text-red-600 hover:text-xl hover:font-bold text-lg text-red-300 font-semibold   " onClick={handleLogout}>Logout</button></a></li>
       

        </ul>
      </div> :<Link to='/login'><button className=" hover:btn p-2 rounded-lg text-white  bg-red-200 font-semibold">Join Us</button></Link>
    
      }
     
        </div>
      </div>
        </>
   
    );
};

export default Navbar;







