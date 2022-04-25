import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../product/ProductItem";
import Icon from "./Icon";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/");
        let myResponse = await response.data;
        console.log(myResponse);
        setProducts(myResponse);
        console.log(myResponse);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const options = ["Electronic", "Furnitures", "Clothing", "Accessories"];

  return (
    <div className="flex flex-col">
      <div className="absolute top-[120px] right-[128px]">
        <select
          className="w-[180px] mr-[30px]"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          {options.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-rows-3 grid-cols-3  bg-slate-100 h-full mx-[auto]  w-full max-w-[1144px] min-h-[1750px] ml-[160px] mb-0">
        {category
          ? products.filter((item) => item.category === category).map((item) => <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id} />)
          : products.map((item) => <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id} />)}
      </div>
      <Icon />
    </div>
  );
};

export default Home;
