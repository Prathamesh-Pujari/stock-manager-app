// src/components/StockTable.jsx
import React from "react";

const StockTable = ({ ingredients }) => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-zinc-100">
        🧪 Ingredient Stock Overview
      </h2>
      <div className="overflow-x-auto rounded-lg border border-zinc-700">
        <table className="min-w-full table-auto bg-zinc-800 text-white">
          <thead className="bg-zinc-700 text-zinc-300">
            <tr>
              <th className="px-6 py-3 border-b border-zinc-700 text-left">
                #
              </th>
              <th className="px-6 py-3 border-b border-zinc-700 text-left">
                Ingredient
              </th>
              <th className="px-6 py-3 border-b border-zinc-700 text-left">
                Quantity
              </th>
              <th className="px-6 py-3 border-b border-zinc-700 text-left">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-700 transition-colors duration-150"
              >
                <td className="px-6 py-3 border-b border-zinc-700">
                  {index + 1}
                </td>
                <td className="px-6 py-3 border-b border-zinc-700 font-medium text-zinc-100">
                  {item.name}
                </td>
                <td className="px-6 py-3 border-b border-zinc-700">
                  {item.quantity}
                </td>
                <td className="px-6 py-3 border-b border-zinc-700">
                  {item.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
