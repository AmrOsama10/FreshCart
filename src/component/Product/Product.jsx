import React, { useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../AddProductToCart";
import { addProductToWishList, removeProductFromWishList } from "../../AddProductToWishList";
import { Bounce, toast } from "react-toastify";


export default function Product({ product }) {
 const [isActive, setIsActive] = useState(() => {
   const saved = localStorage.getItem(`isActive-${product._id}`);
   return saved === "true"; 
 });

 const handleClick = () => {
   setIsActive((prevIsActive) => {
     const newIsActive = !prevIsActive;
     localStorage.setItem(`isActive-${product._id}`, newIsActive);
     return newIsActive;
   });
 };

 const handleCombinedClick = () => {
   if (isActive) {
     removeProductFromWishList(product._id);
     toast.success("product has been removed successful", {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
     });
     handleClick();
   } else {
     addProductToWishList(product._id);
     handleClick();
   }
 };


  return (
    <>
      <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl max-w-sm ">
          <Link to={"/productDetails/" + product._id}>
            <img
              className="rounded-t-lg p-8"
              src={product.imageCover}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <p className=" font-semibold text-green-600">
              {product.category.name}
            </p>
            <Link to={"/productDetails/" + product._id}>
              <h3 className="text-green-900 font-semibold py-2 text-2xl line-clamp-1">
                {product.title}
              </h3>
            </Link>
            {/* <p className=" line-clamp-2 py-1">{product.description}</p> */}
            <div className=" flex justify-between items-center">
              <RatingStars rating={product.ratingsAverage} />
              <i className={`fa-solid fa-heart text-xl cursor-pointer ${isActive ? "text-red-500" : "text-gray-800"}`}onClick={handleCombinedClick}></i>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl text-gray-700 ">
                {product.price}
                <span className="font-sans text-green-600"> EGp</span>
              </span>
              <button
                onClick={() => {
                  addProductToCart(product._id);
                }}
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
