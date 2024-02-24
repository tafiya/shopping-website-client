import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import '../item/Item.css';
import { TiShoppingCart } from "react-icons/ti";
import UseAuth from '../../hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
const EachItems = ({item}) => {
    const {_id,name,price,details,picture}=item;
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
        <div className='card  card-compact w-96 bg-base-100 shadow-xl'>
           <div className="card_effect h-3/4">
		<img className="pic1 " src={picture} />
		<div className="card_effect_in">
			<img src={picture} className=''/>
      <Link className='text-center' to={`itemView/${_id}`}>Quick Look</Link>
			
		</div>   
        </div>
        <div className="card-body bg-red-50 items-center h-1/4">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button onClick={handleCart} className="btn btn-outline"> <TiShoppingCart />Add to cart</button>
    </div>
	</div>
        </div>
    );
};

export default EachItems;