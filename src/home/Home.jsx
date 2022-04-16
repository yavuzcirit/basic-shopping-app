import axios from "axios";
import React,{useEffect, useState} from "react";
import ProductItem from "../product/ProductItem";
import Icon from "./Icon"


const Home = () => {
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   async function fetchData(){
     let response=await axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/');
     let myResponse = await response.data;
     console.log(myResponse)
     setProducts(myResponse)
     console.log(myResponse)
   }
   fetchData();
  }, []);


  

  return (
    <div className="flex">
      <div className="flex space-between">
        <div></div>
        <div></div>
      </div>
    <div className="mt-[40px] grid grid-rows-3 grid-cols-3 gap-16 bg-slate-100 h-full mx-[auto]  w-full max-w-[114.4rem] ml-[120px] mb-0">
       {products.map((item)=>(
         <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id}/>
       ))}
    </div>
    <Icon />
    </div>
  )
};

export default Home;
