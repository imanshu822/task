import React from "react";
import Card from "./Card";

function CardSectioin({ plans }) {
  return (
    <div className="flex gap-2 px-20 justify-evenly items-center min-h-50dvh w-full py-20 bg-gray-100">
      <Card planPrice={plans[0]} title="Standard" />
      <Card planPrice={plans[1]} title="Proffessional" />
      <Card planPrice={plans[2]} title="Enterprise" />
      <Card planPrice={plans[3]} title="Standard" />
    </div>
  );
}

export default CardSectioin;
