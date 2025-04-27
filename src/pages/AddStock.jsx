import React from "react";
import AddStockForm from "../components/AddStockForm";

const AddStock = ({ ingredients, setIngredients }) => {
  return (
    <div className="add-stock-container bg-zinc-900">
      <div className="max-w-md w-full p-8 bg-zinc-800 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">
          📥 Add Ingredient Stock
        </h1>
        <AddStockForm
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </div>
    </div>
  );
};

export default AddStock;
