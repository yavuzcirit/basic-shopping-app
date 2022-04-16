import React,{useState,useEffect} from "react";
import axios from "axios";

const ProductItem = ({avatar, name, price, id}) => {
  const [selectedItem,setSelectedItem] = useState()

  useEffect(() => {
    function deleteItem(){
      axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${selectedItem}`)
      .then((res)=>console.log(res))
    }
    deleteItem();
   }, [selectedItem]);

  const onDelete = (e) => {
    console.log(e.target.parentElement.id)
    setSelectedItem(e.target.parentElement.id)
  }

  return (
    <div className="px-6 pt-4 pb-2 flex flex-col w-[200px] h-[200px] m-[20px] mt-[40x] cursor-pointer" id={id}>
    <img src={avatar} className="inline-block bg-gray-200 rounded-[20px]  text-sm font-semibold mr-2 mb-2" alt="product" />
    <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">{name}</span>
    <span class="inline-block rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-[10px]">${price}</span>
    <button onClick={(e)=>onDelete(e)} className="bg-[red] text-white w-[50%] ml-[20%] rounded-xl"> Delete</button>
  </div>
  );
};

export default ProductItem;
