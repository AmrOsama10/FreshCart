// import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import image from "../../imgs/flat-people-asking-questions-illustration.png";
import LoadingScreen from '../LoadingScreen/LoadingScreen';


export default function ProductCategories() {
    const { catId } = useParams();
    const [productCAat, setProductCAat] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // function getProductsCat() {
    //     return axios.get(
    //         `https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`
    //     );
    // }

    // let {data , isLoading } = useQuery({
    //     queryKey:['productCategory'],
    //     queryFn:getProductsCat,
    //     select:(data)=>data.data.data,
    // })


    async function getProductsCat() {
        setIsLoading(true)
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`);
        setProductCAat(data.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getProductsCat();
    }, [catId]);
    
    if (isLoading ) {
        return <LoadingScreen />;
    }

    return (
    <>
        {productCAat && productCAat.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-32">
                    {productCAat.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>
            ) : <div className="w-1/2 mx-auto  py-32">
                    <h1 className="text-center text-green-600 text-4xl font-sans py-5">No products available</h1>
                    <img className='w-full mx-auto' src={image} alt="" />
                </div>
            
            
        }
    </>
);}
