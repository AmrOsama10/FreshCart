import axios from 'axios';
import React, { useEffect, useState } from 'react'

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import CartProduct from '../CartProduct/CartProduct';
import { Link } from 'react-router-dom';


export default function Cart() {
  let [isLoading,setIsLoading] = useState(true)
  let [cart,setCart] = useState(null)

  useEffect(() => {
    getUserCart()
  }, []);

  async function getUserCart() {
    setIsLoading(true);
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token:localStorage.getItem('token')
        },
      }
    ).finally(()=> {
      setIsLoading(false);
    })
    setCart(data);
  }

  function removeCart() {
    axios.delete("https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token:localStorage.getItem('token')
        },
      }
    ).finally(()=>{
      setCart(null);
    })
  }

  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <>
      
        {cart ?
          <div className=" pt-32">
        <h1 className="mb-10 text-green-700 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart?.data.products.map((product, index) => {
              return (
                <CartProduct key={index} product={product} setCart={setCart} cart={cart} />
              
              );
            })}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{cart?.data.totalCartPrice}<span className='text-green-600'> EGp</span></p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className='text-green-600'>0 EGp</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold">{cart?.data.totalCartPrice}<span className='text-green-600'> EGp</span></p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
         {cart?.data.totalCartPrice > 1 ? (
  <Link
    to={"/shippingAddress/" + cart?.data._id}
    className="mt-6 block text-center w-full rounded-md bg-green-700 py-1.5 font-medium text-green-50 hover:bg-green-500"
  >
    Check out
  </Link>
) : (
  <button
    disabled
    className="mt-6 block text-center w-full rounded-md bg-gray-400 py-1.5 font-medium text-gray-200 cursor-not-allowed"
  >
    Check out
  </button>
)}
          </div>
        </div>
        <button onClick={removeCart}  className=" bg-red-500 text-white border-2 px-12 py-2 rounded-lg hover:bg-red-800 mx-auto block  ">Clear</button>
      </div>:<p className="text-center text-4xl font-bold py-32 font-sans text-green-800">No products in your cart</p>}
    </>
  );
}
