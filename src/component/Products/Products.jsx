import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from '../Product/Product';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Products() {
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
    const {data , isLoading} = useQuery({
      queryKey:['products'],
      queryFn:getProducts,
      select:(data)=>data.data.data
    })

    return (
      <>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data?.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </div>
          </div>
        )}
      </>
    );
}
