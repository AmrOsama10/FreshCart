import axios from "axios";
import { Bounce, toast } from "react-toastify"; 


    export async function addProductToWishList(productId) {
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
            productId: productId
        },{
        headers: {
            token: localStorage.getItem('token'),
        }
    })

    toast.success("product added successfully to ❤️", {
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
}

 export async function removeProductFromWishList(productId ,setWishList) {
    try {
      await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setWishList((prevWishList) => ({
        ...prevWishList,
        data: prevWishList.data.filter((product) => product._id !== productId),
      }));
      localStorage.removeItem(`isActive-${productId}`);
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
    } catch (error) {
      console.error("Error removing product:", error);
    }
  }