import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";
import EachItemView from "./EachItemView";


const ItemView = () => {
    const [NewItem,setItem]=useState([]);
    const {id}=useParams();
    const [items]=useItems();
   
    useEffect(()=>{
        const newEvent= items?.find(item=>item._id==id);
        setItem(newEvent);
    },[items,id])
    
    return (
        <div>
            <EachItemView key={id} NewItem={NewItem} ></EachItemView>
        </div>
    );
};

export default ItemView;