import axios from "axios";
import React,{useEffect, useState} from "react";
import ProductItem from "../product/ProductItem";
import Icon from "./Icon"


const Home = () => {
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   async function fetchData(){
    try {
      let response=await axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/');
      let myResponse = await response.data;
      console.log(myResponse)
      setProducts(myResponse)
      console.log(myResponse)
    } catch(error){
      console.log(error)
    }
   }
   fetchData();
  }, []);

  return (
    <div className="flex">
      <div className="flex space-between">
        <div></div>
        <div></div>
      </div>
    <div className="grid grid-rows-3 grid-cols-3 gap-1 mb-[400px] bg-slate-100 h-full mx-[auto]  w-full max-w-[1144px] min-h-[1750px] ml-[120px] mb-0">
       {products
        .map((item)=>(
         <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id}/>
       ))}
    </div>
    <Icon />
    </div>
  )
};

export default Home;
