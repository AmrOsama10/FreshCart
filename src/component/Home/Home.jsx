import axios from 'axios';
import React from 'react'
import Product from '../Product/Product';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import SliderHome from '../SliderHome/SliderHome';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  // const [products,setProducts] = useState([])
  // const [isLoading,setIsLoading] = useState(true)

  // useEffect(() => {
  //   getProducts();
  // },[]);

  // async function getProducts() {
  //   setIsLoading(true);
  //   let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  //   setProducts(data.data)
  //   setIsLoading(false);
    
  // }

  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { data, isLoading } = useQuery({
    queryKey: ["productHome"],
    queryFn: getProducts,
    select:(data)=>data.data.data
  });

  return (
    <>
    
      { isLoading ? <LoadingScreen/> :
      <div className="py-32">
        <SliderHome/>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
        ;
      </div>
      </div>}
    
    </>
  );
}
