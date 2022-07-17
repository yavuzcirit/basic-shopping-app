import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductItem from "../product/ProductItem";
import Icon from "./Icon";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/");
        let myResponse = await response.data;
        console.log(myResponse);
        setProducts(myResponse);
        console.log(myResponse);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const options = ["Electronic", "Furnitures", "Clothing", "Accessories"];

  return (
    <>
      {loading ? (
        <div className="flex flex-col">
          <div className="absolute top-[120px] right-[128px]">
            <select
              title="Click to Choose Category"
              clearable
              className="w-[300px] mr-[100px] h-[60px] rounded-[17px] text-left p-[7px] box-shadow cursor-pointer"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                Choose Category...
              </option>
              {options.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-rows-3 grid-cols-3  bg-slate-100 h-full mx-[auto]  w-full max-w-[1144px] min-h-[1750px] ml-[300px] mb-[400px]">
            {category
              ? products.filter((item) => item.category === category).map((item) => <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id} />)
              : products.map((item) => <ProductItem avatar={item.avatar} name={item.name} price={item.price} id={item.id} key={item.id} />)}
          </div>
          <Icon />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
