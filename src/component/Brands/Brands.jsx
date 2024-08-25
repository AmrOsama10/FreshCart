import { useQuery } from '@tanstack/react-query'
import axios from 'axios';  
import React from 'react'
import LoadingScreen from './../LoadingScreen/LoadingScreen';


export default function Brands() {
  function getBrand() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  let {data,isLoading} = useQuery({
    queryKey:['Brand'],
    queryFn:getBrand,
    select:(data) => data.data.data
  })
  
  

  return <>
    { isLoading ? <LoadingScreen/> : 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16 ">
    {data?.map((product,index)=>{
      return (
        <div key={index} className=" ">
            <div className="bg-white shadow-md rounded-lg ">
                <img
                  className="rounded-t-lg p-8 mx-auto"
                  src={product.image}
                  alt="product image"
                />
              
            </div>
          
        </div>
      );
    })}
    </div>}
    
  </>
}
