import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useEffect } from 'react'
import LoadingScreen from './../LoadingScreen/LoadingScreen';

export default function AllOrders() {
  function getAllOrders() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/orders");
  }



  const { data ,isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: getAllOrders,
    select: (data) => data.data.data[0].cartItems.map((item) => item.product),
  });
console.log(data);

  return (
    <>
    {isLoading?<LoadingScreen/> :<div className="py-32">
      <h1 className="mb-10 text-green-700 text-center text-4xl font-bold font-sans">
            All Orders
          </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  dark:bg-gray-800 dark:border-gray-700 ">
          {data?.map((product, index) => {
      return (
        <div key={index} className="bg-white shadow-xl rounded-xl m-5 ">
          <img
            className="rounded-t-lg p-8"
            src={product.imageCover}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <p className=" font-semibold text-green-600">
              {product.category.name}
            </p>
            <h3 className="text-green-900 font-semibold py-2 text-2xl line-clamp-1">
              {product.title}
            </h3>
          </div>
        </div>
      );
    })} 
      </div>
    </div>}
    </>
  );
}


