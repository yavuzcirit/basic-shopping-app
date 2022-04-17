import React,{useState,useEffect} from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({
    id:"",
    name: "",
    price:"",
    category:"",
    description:"",
    avatar:"",
    developerEmail:"",
  });

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }


  const notify = () => toast('Item Created successfully.');

  const createItem =async () => {
    await axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', product)
    .then(function (response) {
      console.log(response);
      notify();
    })
    .then(routeChange())
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    async function fetchData(){
     try {
       let response=await axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/');
       let categories = await response.data;
       console.log(categories)
       setCategories(categories)
       console.log(categories)
     } catch(error){
       console.log(error)
     }
    }
    fetchData();
   }, []);

  return( 
  <div className="bg-slate-100 h-full  flex w-full max-w-[114.4rem] flex flex-col mb-[200px] mt-[50px] ml-[34%]">
<form onSubmit={createItem}>
<input className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px]" type='text' placeholder='Product Name' value={product.id} onChange={(e)=>{
      setProduct({...product, id: e.target.value} )
    }} required/>
<input className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px]" type='text' placeholder='Product Name' value={product.name} onChange={(e)=>{
      setProduct({...product, name: e.target.value} )
    }} required/>
    <input className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px]" type='number' min={0} max={99999999} placeholder='Price' value={product.price} onChange={(e)=>{
      setProduct({...product, price: e.target.value} )
    }} required/>
    <input className="flex w-[400px] h-[125px] rounded-xl mb-[20px] pl-[8px]" type='text' placeholder='Description' value={product.description} onChange={(e)=>{
      setProduct({...product, description: e.target.value} )
    }} required/>
    <input className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px]" type='text' placeholder='Image URL' value={product.avatar} onChange={(e)=>{
      setProduct({...product, avatar: e.target.value} )
    }} required/>
    <input className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px]" type='text' placeholder='Developer Email' value={product.developerEmail} onChange={(e)=>{
      setProduct({...product, developerEmail: e.target.value} )
    }} required/>
    <select className="flex w-[400px] h-[50px] rounded-xl mb-[20px] pl-[8px] pr-[8px]" value={product.category} onChange={(e)=>{
      setProduct({...product, category: e.target.value} )
    }} required>
      <option value="" disabled selected hidden>Please Choose...</option>
      {categories.map((item)=>(<option>{item.name}</option>))}
    </select>
    <button type="submit" className="w-[200px] h-[50px] bg-[green] text-white rounded-xl ml-[100px]">Add Product</button>
</form>
    <Toaster />
  </div>
  );
};

export default CreateProduct;
