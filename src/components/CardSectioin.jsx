import React, { useState } from "react";
import Card from "./Card";
import Banner from "./Banner";

const features1 = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, true, false, false, false] },
      {
        name: "Pro-Forma Invoice/Estimates",
        availability: [true, true, false, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
];
const features2 = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Pro-Forma Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [true, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
];
const features3 = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Pro-Forma Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [true, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [true, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
];
const features4 = [
  {
    category: "Sales Management",
    items: [
      { name: "Invoice", availability: [false, false, true, true, true] },
      {
        name: "Pro-Forma Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [false, true, true, true, true] },
    ],
  },
  {
    category: "Purchase Management",
    items: [
      { name: "Invoice", availability: [false, true, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [false, true, true, true, true],
      },
      {
        name: "Sale-Challan",
        availability: [false, false, false, false, false],
      },
    ],
  },
  {
    category: "Inventory Management",
    items: [
      { name: "Invoice", availability: [true, false, true, true, true] },
      {
        name: "Invoice/Estimates",
        availability: [true, true, true, true, true],
      },
      { name: "Sale-Challan", availability: [true, true, true, true, true] },
    ],
  },
];

const features = [features1, features2, features3, features4];
const planName = ["Standard", "Professional", "Enterprise", "Standard"];
function CardSection({ plans }) {
  const [selectedFeatures, setSelectedFeatures] = useState(features3);

  const handleClick = (index) => {
    setSelectedFeatures(features[index]);
  };

  return (
    <>
      <div className="flex gap-2 px-20 justify-evenly items-center min-h-50dvh w-full py-20 bg-gray-100">
        {plans.map((plan, index) => (
          <Card
            key={index}
            onClick={() => handleClick(index)}
            planPrice={plan}
            title={planName[index]}
          />
        ))}
      </div>
      <Banner features={selectedFeatures} />
    </>
  );
}

export default CardSection;
