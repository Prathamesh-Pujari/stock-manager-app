import React from "react";
import AddStockForm from "../components/AddStockForm";

const AddStock = ({ ingredients, setIngredients }) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-zinc-100">
        📥 Add Ingredient Stock
      </h1>
      <AddStockForm ingredients={ingredients} setIngredients={setIngredients} />
    </div>
  );
};

export default AddStock;
