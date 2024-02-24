import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


const EachItemView = ({NewItem}) => {
    const {_id,name,price,details,picture}=NewItem;
    const {user}=UseAuth();
    const navigate =useNavigate()
    const location =useLocation()
    const axiosSecure =useAxiosSecure();
    const [refetch]=useCart();

    const handleCart=()=>{
        //send cart to database
        if(user && user.email)
        {
          const cartItem={
            menuId:_id,
            email: user.email,
            name,
            picture,
            price
          }
          axiosSecure.post('/carts',cartItem)
          .then(res=>{
            console.log(res.data)
            if(res.data.insertedId)
            {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is successfully added`,
                showConfirmButton: false,
                timer: 1500
              });
              //refetch cart to update the cart items count
              refetch();
  
            }
          })
        }
        else{
          Swal.fire({
            title: "You are not logged in",
            text: "Please login to add cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Please login"
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state:{from:location}});
         
            }
          });
        }
      }
    return (
        <div>
            
            <div className="my-14 max-w-7xl mx-auto">
        <div className="flex  flex-col  bg-white  text-gray-700 ">
        <div className="  relative rounded-xl bg-clip-border text-gray-700 ">
        <div className=''>
        <img className='rounded-xl  w-full h-96  'src={picture} alt="ui/ux review check"/>
        </div>
      </div>
      <div className="p-6 rounded-b-md text-center">
        <h4 className=" mt-6 block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <p className="my-5 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
         {details}
        </p>
        <p className="text-lg text-slate-500 mb-6">{price}</p>
       
     
          <div>
          <button onClick={handleCart} className="btn btn-outline"> <TiShoppingCart />Add to cart</button> <br />
          
          <Link to='/' className=" "><button><IoCloseSharp size={'2em'}  /></button></Link>

          </div>
          
       
      </div>

        </div>

        </div>
      
        </div>
    );
};

export default EachItemView;