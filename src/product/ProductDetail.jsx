import React,{useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const {id} = useParams();
  console.log("Coming ID" , id)
  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    async function fetchData(){
     try {
       let response=await axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`);
       let product = await response.data;
       console.log(product)
       setSelectedItem(product)
     } catch(error){
       console.log(error)
     }
    }
    fetchData();
   }, []);


  return (
    <div className="flex flex-col mt-[60px] mb-[400px] ml-[130px] mr-[130px]">
      <div className="flex mb-[30px]">
        <img className="w-[300px] h-[250px] rounded-lg" src={selectedItem?.avatar} alt="product" />
      <div className="flex flex-col ml-[40px]">
        <p className="text-[30px] font-700">{selectedItem?.name}</p>
        <p className="mt-[180px] text-[18px] font-400">$ {selectedItem?.price}</p>
      </div>
     </div>
     <div className="border-t-4 border-black w-[90%] ml-[20px]"></div>
     <p className="mt-[30px] w-[90%]">{selectedItem?.description}</p>
      
    </div>
  );
};

export default ProductDetail;
