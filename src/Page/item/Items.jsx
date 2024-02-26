import useItems from "../../hooks/useItems";
import EachItems from "./EachItems";
import '../item/Item.css';


const Items = () => {
    const [items]=useItems();

    return (
        <div className=" py-4 my-24 max-w-screen-xl mx-auto ">
          
          <div className=" grid md:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-6">
          {
            items.map(item=><EachItems key={item?._id} item={item}></EachItems>)
          } 

          </div>
         
            
        </div>
    );
};

export default Items;