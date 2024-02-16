import React from "react";

function Card(props) {
  return (
    <div
      className={`bg-white border-gray-300 border-2 w-1/5 flex flex-col justify-evenly min-h-[400px] items-center rounded-lg py-10 px-8 customEffect ${
        props.isActive ? "active" : ""
      }`}
      onClick={props.onClick}
    >
      <h1 className="text-black text-2xl font-medium capitalize">
        {props.title}
      </h1>
      <h3 className="text-5xl font-bold">₹ {props.planPrice || "Amount"}</h3>
      <p>{"Link"}</p>
      <button
        className={`border-orange-400 border-4 bg-white text-orange-400 font-bold text-xl px-2 text-center py-1 rounded hover:bg-orange-400 hover:text-white hover:border-blue-500 ${
          props.title === "Enterprise"
            ? "bg-orange-400 text-orange-400 border-blue-500"
            : ""
        }`}
      >
        START FREE TRIAL
      </button>
      <p className="text-center px-5">{"Description"}</p>
      <p className="text-blue-500 underline text-md">Show More</p>
    </div>
  );
}

export default Card;
