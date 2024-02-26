
import Swal from "sweetalert2";

import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="md:border md:border-l-orange-100 md:p-4 rounded-lg">
            <div className="flex justify-evenly mb-8 ">
                <button className="md:text-3xl text-2xl bg-red-200 p-2 md:p-3 rounded-xl text-gray-500 font-bold  shadow-lg ">Items: {cart.length} </button>
                {/* <h2 className="md:text-3xl text-2xl"></h2> */}
                <button className="md:text-3xl text-2xl bg-red-200 p-2 md:p-3 rounded-xl text-gray-500 font-bold shadow-lg ">Total: {totalPrice} $ </button>
                {/* <h2 className="md:text-3xl text-2xl">Total Price: {totalPrice}</h2> */}

            </div>
            <div className=" overflow-x-auto ">
                <table className="table table-zebra md:w-full">
                    {/* head */}
                    <thead className="md:text-lg bg-red-100 shadow rounded-xl" >
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className=" md:uppercase md:text-base" >
                                    {item.name}
                                </td>
                                <td className=" text-lg font-semibold"> ${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;