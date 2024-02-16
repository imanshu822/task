import React from "react";
import { useState } from "react";

function Banner(props) {
  const [open1, setopen1] = useState(false);
  const handleClick1 = () => {
    if (open1) {
      setopen1(false);
    } else {
      setopen1(true);
    }
  };
  const [open2, setopen2] = useState(false);
  const handleClick2 = () => {
    if (open2) {
      setopen2(false);
    } else {
      setopen2(true);
    }
  };
  const [open3, setopen3] = useState(false);
  const handleClick3 = () => {
    if (open3) {
      setopen3(false);
    } else {
      setopen3(true);
    }
  };
  const [open4, setopen4] = useState(false);
  const handleClick4 = () => {
    if (open4) {
      setopen4(false);
    } else {
      setopen4(true);
    }
  };
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-xl text-bold">
          To get the best, Compare with the best.
        </h1>
        <p className="text-sm">Our packages fulfill your business needs.</p>
      </div>
      <div className="container w-full mx-auto flex flex-col justify-center items-center">
        <table className="w-full">
          <thead className="bg-blue-100 w-full flex justify-between">
            <th className="text-left w-[300px]">Features</th>
            <th>Sanjiro Basic</th>
            <th>Sanjiro Lite</th>
            <th>Sanjiro Standard</th>
            <th>Sanjiro Proffessional</th>
            <th>Sanjiro Expert</th>
          </thead>
        </table>
        <div className="text-left w-full font-bold flex flex-col justify-start items-center">
          <h1 onClick={handleClick1} className="w-full text-left">
            Sales Management
          </h1>
          <div className={`container px-10 ${open1 ? "block" : "hidden"}`}>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full flex justify-between">
                  <td className="text-left w-[200px]">Invoice</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 onClick={handleClick2} className="w-full text-left">
            Purchase Management
          </h1>
          <div className={`container px-10 ${open2 ? "block" : "hidden"}`}>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full flex justify-between">
                  <td className="text-left w-[200px]">Invoice</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 onClick={handleClick3} className="w-full text-left">
            Inventory Management
          </h1>
          <div className={`container px-10 ${open3 ? "block" : "hidden"}`}>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full flex justify-between">
                  <td className="text-left w-[200px]">Invoice</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 onClick={handleClick4} className="w-full text-left">
            Financial Reports
          </h1>
          <div className={`container px-10 ${open4 ? "block" : "hidden"}`}>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full flex justify-between">
                  <td className="text-left w-[200px]">Invoice</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
