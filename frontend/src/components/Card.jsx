import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        <div className="card bg-base-100 w-96 shadow-xl m-7">
          <figure>
            <img
              className="pt-5"
              src={item.image}
              alt={item.title}
              width="200px"
              height="200px"
            />
          </figure>
          <div className="card-body transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
