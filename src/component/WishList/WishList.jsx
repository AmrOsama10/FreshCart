
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addProductToCart } from '../../AddProductToCart';
import {  removeProductFromWishList } from '../../AddProductToWishList';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


export default function WishList() {
  const [wishList, setWishList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setIsLoading(true);
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setWishList(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // async function removeProduct(productId) {
  //   try {
  //     await axios.delete(
  //       `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
  //       {
  //         headers: {
  //           token: localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     setWishList((prevWishList) => ({
  //       ...prevWishList,
  //       data: prevWishList.data.filter((product) => product._id !== productId),
  //     }));
  //     localStorage.removeItem(`isActive-${productId}`);
  //     toast.success("product has been removed successful", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //     });
  //     setWishList(data);
  //   } catch (error) {
  //     console.error("Error removing product:", error);
  //   }
  // }

  return (
    <>
      {isLoading ? (
        <LoadingScreen />) : (
        <div className=" pt-32">
          <h1 className="mb-10 text-green-700 text-center text-2xl font-bold">
            WishList Items
          </h1>
          <div className="mx-auto max-w-8xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
  <div className="rounded-lg md:w-2/3">
    {wishList?.data.map((product, index) => {
      return (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4"
        >
          <div className="flex flex-col items-center sm:flex-row sm:items-center">
            <img
              src={product.imageCover}
              alt="product-image"
              className="w-full rounded-lg sm:w-40 sm:mb-0 mb-4"
            />
            <div className="sm:ml-4 flex flex-col items-center sm:items-start">
              <h2 className="text-lg font-bold text-green-800 text-center sm:text-left">
                {product.title}
              </h2>
              <p className="mt-1 py-3 text-xl text-gray-900 text-center sm:text-left">
                <span className="text-green-600">$ </span>
                {product.price}
              </p>
              <p
                onClick={() => {
                  removeProductFromWishList(product._id, setWishList);
                }}
                className="cursor-pointer text-red-500 text-center sm:text-left"
              >
                <i className="fa-regular fa-trash-can px-1"></i>Remove
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              addProductToCart(product._id);
            }}
            className="mt-4 sm:mt-0 font-sans border-2 border-green-400 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white hover:border-none"
          >
            add to cart
          </button>
        </div>
      );
    })}
  </div>
</div>

        </div>
      )}
    </>
  );
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { addProductToCart } from '../../AddProductToCart';
// import { Bounce, toast } from 'react-toastify';
// import { useQuery } from '@tanstack/react-query';
// import LoadingScreen from '../LoadingScreen/LoadingScreen';


// export default function WishList() {
// // let [wishList, setWishList] = useState(null);

// // useEffect(() => {
// //   getProducts();
// // }, []);

//   async function getProducts() {
//     try {
//         let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
//             headers: {
//                 token: localStorage.getItem("token"),
//             }
//         });
//         // setWishList(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// const { data, isLoading } = useQuery({
//   queryKey: ["WishList"],
//   queryFn: getProducts,
//   select:(data)=>data.data.data
// });

// async function removeProduct(productId) {
//     try {
//         let {data} =  await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
//             headers: {
//                 token: localStorage.getItem("token"),
                
//             },
//         });
//         localStorage.removeItem(`isActive-${productId}`);
//           toast.success("product has been removed successful", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             transition: Bounce,
//           });
//         // setWishList(data);
//     } catch (error) {
//         console.error("Error removing product:", error);
//     }
// }


//   return (
//       <>
//       { isLoading ? <LoadingScreen/> :<div className=" pt-32">
//             <h1 className="mb-10 text-green-700 text-center text-2xl font-bold">WishList Items</h1>
//           <div className="mx-auto max-w-8xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//           <div className="rounded-lg md:w-2/3">
//             {data?.data.map((product, index) => {
//                 return (
//                   <div key={index} className="flex justify-between items-center py-4">
//                     <div className="flex items-center ">
//                       <img
//                         src={product.imageCover}
//                         alt="product-image"
//                         className="w-full rounded-lg sm:w-40 mx-3"
//                       />
//                       <div className="mt-5 sm:mt-0">
//                         <h2 className="text-lg font-bold text-green-800">
//                           {product.title}
//                         </h2>
//                         <p className="mt-1 py-3 text-xl text-gray-900">
//                           <span className="text-green-600">$ </span>
//                           {product.price}
//                         </p>
//                         <p onClick={()=>{removeProduct(product._id)}} className=' cursor-pointer text-red-500'><i className="fa-regular fa-trash-can px-1"></i>Remove</p>
                      
//                       </div>
//                     </div>
//                     <div className="">
//                       <button onClick={()=>{addProductToCart(product._id)}} className=' font-sans border-2 border-green-400 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white hover:border-none'>add to cart</button>
//                     </div>
//                   </div>
//                 );})}
//         </div>
//       </div>
//     </div>}
//     </>
//   )
// }
