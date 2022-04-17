import React,{useState,useEffect} from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductItem = ({avatar, name, price, id}) => {

  const notify = () => toast.success('Item Deleted successfully.');

  const handleDelete = (e) => {
    axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${e.target.parentElement.id}`)
      .then((res)=>console.log(res))
      notify()
  }


  return (
    <div className="px-6 pt-4 pb-2 flex flex-col w-[200px] h-[200px] mt-[120px] ml-[34px] cursor-pointer" id={id}>
      <Link to={`product-details/${id}`}>
      <img src={avatar} className="inline-block bg-gray-200 rounded-[20px]  text-sm font-semibold mr-2 mb-2" alt="product" />
      <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 " >{name}</span>
      <span className="inline-block rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-[10px]">${price}</span>
      </Link>
    <button onClick={handleDelete} className="bg-[red] text-white w-[50%] ml-[20%] rounded-xl">Delete</button>
    <Toaster />
  </div>
  );
};

export default ProductItem;
