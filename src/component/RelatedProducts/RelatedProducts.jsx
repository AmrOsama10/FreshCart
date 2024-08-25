import React from 'react'
import { Link } from 'react-router-dom';
// import Slider  from 'react-slick';
import { addProductToCart } from '../../AddProductToCart';




export default function RelatedProducts({ products }) {
  return (
    <div className="my-52 ">
        <h3 className="text-green-700 text-2xl py-10 font-medium">More Products</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product , index) => (
          <div key={index} className="w-full max-w-sm mx-auto p-2 py-10 overflow-hidden">
            <div className="shadow-md rounded-md ">
                <div
              className="flex items-end justify-end h-56 w-full bg-no-repeat bg-contain bg-center "
              style={{ backgroundImage: `url(${product.imageCover})` }}
            >
              <button onClick={()=>{addProductToCart(product._id);}} className="p-2 rounded-full bg-white text-green-600 mx-5-mb-4 border border-green-300  hover:bg-green-300 focus:outline-none">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <Link to= {'/productDetails/'+product._id}>
              <h3 className="text-green-800 uppercase line-clamp-1 py-2 font-sans text-xl">{product.title}</h3>
              </Link>
              
              <span className="text-gray-800 mt-2 text-lg">{product.price} <span className='text-green-600'>EGp</span></span>
            </div>
            </div>
            
          </div>
        ))}
        </div>
      </div>
  )
}
