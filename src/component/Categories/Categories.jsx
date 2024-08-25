import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import LoadingScreen from './../LoadingScreen/LoadingScreen';



export default function Categories() {
  
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  let { data ,isLoading } = useQuery({
    queryKey: ["allCategory"],
    queryFn: getCategories,
    select:(data)=>data.data.data
  });
  
  return (
    <>

{ isLoading ? <LoadingScreen/> :
<div className="flex justify-center items-center py-32">
  
  <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
    <div className="flex flex-col jusitfy-center items-center space-y-10">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-green-700 ">Shop By Category</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
        
        { data?.map((product ,index) => {
          return (
            <>
              <div key={index} className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 hover:shadow-sm hover:shadow-green-700  transition-shadow duration-500 ease-in">
                  
                  <Link to={'/productCategories/' + product._id}>
                    <img
                    className="w-96 h-96 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  </Link>
                  <div className="p-5">
                    <h5 className="text-green-700 font-bold text-2xl tracking-tight mb-2 text-center">
                      {product.name}
                    </h5>
                  </div>
                </div>
              </div>
            </>
          ); 
        })}
        
      </div>
    </div>
  </div>
</div>}

    </>
  );
}
