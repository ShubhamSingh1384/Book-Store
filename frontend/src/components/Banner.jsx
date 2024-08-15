import React from "react";
import banner from "../../public/images/banner.jpg"



const Banner = () => {
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-1 flex my-20 ">
        <div className="w-1/2 px-10">
          <h1 className="text-4xl ">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-400">new everyday!!</span>
          </h1>
          <p className="mt-5 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa
            dicta a perferendis voluptatem animi commodi dolor aspernatur ex
            veniam mollitia, velit rem, quos aperiam sequi obcaecati modi fugiat
            quibusdam?
          </p>
          <label className="input input-bordered flex items-center gap-2 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary mt-5">Secondary</button>
        </div>
        <div className="w-1/2">
            <img src={banner} alt="" width="400px" height="50px"/>
            </div>
      </div>
    </>
  );
};

export default Banner;
