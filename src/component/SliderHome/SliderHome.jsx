import React from 'react'
import Slider from 'react-slick';
import img1 from "../../imgs/img-h1.jpg" //
import img10 from "../../imgs/img-h10.jpg" //
import img11 from "../../imgs/img-h11.jpg"
import img12 from "../../imgs/img-h12.jpg"
import img2 from "../../imgs/img-h2.png"
import img3 from "../../imgs/img-h3.png"
import img4 from "../../imgs/img-h4.png"
import img5 from "../../imgs/img-h5.png"
import img6 from "../../imgs/img-h6.png"
import img7 from "../../imgs/img-h7.png"
import img8 from "../../imgs/img-h8.jpeg"
import img9 from "../../imgs/img-h9.jpeg"
import img13 from "../../imgs/img1.jpg" //

export default function SliderHome() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };


  return (
    <>
      <div className="flex w-1/2 mx-auto ">
        <div className="w-96 hidden md:block px-8">
          <Slider {...settings}>
            <img src={img1} alt="" className=" object-cover w-full" />
            <img src={img10} alt="" className="object-cover w-full " />
            <img src={img13} alt="" className=" object-cover w-full" />
          </Slider>
        </div>
        <div className="hidden md:block">
          <img src={img11} alt="object-cover w-full" />
          <img src={img12} alt="object-cover w-full" />
        </div>
      </div>
      <div className=" w-full py-8 mb-7 hidden md:block">
        <Slider {...settings2}>
          <img src={img2} alt="" className=" h-96 object-cover" />
          <img src={img3} alt="" className=" h-96 object-cover" />
          <img src={img4} alt="" className=" h-96 object-cover" />
          <img src={img5} alt="" className=" h-96 object-cover" />
          <img src={img6} alt="" className=" h-96 object-cover" />
          <img src={img7} alt="" className=" h-96 object-cover" />
          <img src={img8} alt="" className=" h-96 object-cover" />
          <img src={img9} alt="" className=" h-96 object-cover" />
          <img src={img11} alt="" className=" h-96 object-cover" />
          <img src={img12} alt="" className=" h-96 object-cover" />
        </Slider>
      </div>
    </>
  );
}
