import React, { useState } from "react";

const packages = [
  "Sartiro Basic",
  "Sartiro Lite",
  "Sartiro Standard",
  "Sartiro Professional",
  "Sartiro Expert",
];

function Banner(props) {
  let features = props.features;
  const [openStates, setOpenStates] = useState(features.map(() => false));

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const packageTotals = packages.map((_, packageIndex) => {
    let count = 0;
    let total = 0;
    features.forEach((feature) => {
      feature.items.forEach((item) => {
        total++;
        if (item.availability[packageIndex]) {
          count++;
        }
      });
    });
    return Math.floor((count / total) * 100);
  });
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <h1 className="text-3xl font-bold mb-2">
        To get the best, Compare with the best.
      </h1>
      <p className="text-xl mb-4">Our packages fulfill your business needs.</p>
      <table className="w-full container mx-auto">
        <thead className="bg-blue-200">
          <tr className="text-left">
            <th className="px-4 py-2">Features</th>
            {packages.map((pkg, i) => (
              <th key={i} className="text-center">
                {pkg}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <React.Fragment key={i}>
              <tr className="border-t-2" onClick={() => handleOpen(i)}>
                <td className="py-2 font-medium" colSpan={packages.length + 1}>
                  {feature.category}
                </td>
              </tr>
              {feature.items.map((item, j) => (
                <tr key={j} className={openStates[i] ? "" : "hidden"}>
                  <td className="pl-10 py-1">{item.name}</td>
                  {item.availability.map((available, k) => (
                    <td className="text-center" key={k}>
                      {available ? "✅" : "❌"}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
        <tfoot className="bg-gray-200">
          <tr className="text-left">
            <th className="px-4 py-2">Total</th>
            {packageTotals.map((total, i) => (
              <th key={i} className="text-center">
                {total}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Banner;
