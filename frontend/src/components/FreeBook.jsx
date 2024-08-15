import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import axios from 'axios'


const FreeBook = () => {
  const [freeBook, setFreeBook] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const res = await axios.get('http://localhost:4000/book');
      setFreeBook(res.data);
    }
    getData();
  },[])
  const filterData = freeBook.filter((data) => data.category === "Free");
  // console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mx-10 my-10">
        <h1 className="font-bold text-xl">Free Offered Courses</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
          officia, nisi tempora reiciendis vero necessitatibus, nobis
          consequatur esse error tenetur nam harum sapiente, dolor eum dolorem
          aliquam molestiae iure.
        </p>
      </div>
      <div className="slider-container mx-10 pb-5 flex flex-col gap-40">
        <Slider {...settings}>
          {
            freeBook.map((item)=> (
                <Card
                item={item} 
                key={item.id}
                />
            ))
          }
          
        </Slider>
      </div>
    </>
  );
};

export default FreeBook;
