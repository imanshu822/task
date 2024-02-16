import React from "react";

function Card(props) {
  return (
    <div className="bg-white border-gray-300 border-2 w-1/5 flex flex-col justify-evenly min-h-[400px] items-center rounded-lg py-10 px-8">
      <h1 className="text-black text-lg font-medium capitalize">
        {props.title || "Title"}
      </h1>
      <h3 className="text-3xl text-bold">$ {props.planPrice || "Amount"}</h3>
      <p>{"Link"}</p>
      <button className="border-orange-400 border-2 bg-white text-orange-400 font-medium px-5 text-center py-1 rounded">
        START FREE TRAIL
      </button>
      <p className="text-center px-5">{"Description"}</p>
      <p className="text-blue-500 underline text-md">
        {">"}
        <span>Show More</span>
      </p>
    </div>
  );
}

export default Card;
