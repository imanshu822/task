import React from "react";
import { useState } from "react";
import CardSectioin from "./CardSectioin";
import Banner from "./Banner";

// const plan = {
//   standard: "₹ 1300",
//   Professional: "₹ 2100",
//   Enterprise: "",
//   Standard: "₹ 3200"
// };

// const planinfo = [
//   {
//     title: "Standard",
//     price: "₹ 1300",
//     link: "",
//     desc: "Description",
//   },
//   {
//     title: "Professional",
//     price: "₹ 2100",
//     link: "",
//     desc: "Description",
//   },
// ];
const monthlyPlanCost = [1300, 2100, 3000, 3200];
const yearlyPlanCost = [2600, 4100, 6000, 6400];
function Header(props) {
  const [plan, setPlan] = useState("monthly");

  const handlePlan = () => {
    if (plan == "monthly") {
      setPlan("yearly");
    } else {
      setPlan("monthly");
    }
  };

  return (
    <>
      <div className="w-full flex bg-blue-900 justify-center items-center relative h-10">
        <div className="w-{200px} bg-green-600 p-1 flex gap-2 absolute top-5 h-10 rounded-xl">
          <button
            onClick={handlePlan}
            className={`p-2 rounded-lg flex justify-center items-center ${
              plan == "monthly" ? "bg-green-500 text-black" : "text-white"
            }`}
          >
            <p>Monthly</p>
          </button>
          <button
            onClick={handlePlan}
            className={`p-2 rounded-lg flex justify-center items-center ${
              plan == "yearly" ? "bg-green-500 text-black" : "text-white"
            }`}
          >
            <p>Yearly</p>
          </button>
        </div>
      </div>
      <CardSectioin
        plans={plan == "monthly" ? monthlyPlanCost : yearlyPlanCost}
      />
      <Banner />
    </>
  );
}

export default Header;
