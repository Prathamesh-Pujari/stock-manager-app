import React, { useState } from "react";

const AddStockForm = ({ ingredients, setIngredients }) => {
  const [selected, setSelected] = useState(ingredients[0]?.name);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = ingredients.map((ing) => {
      if (ing.name === selected) {
        return {
          ...ing,
          quantity: parseFloat(ing.quantity) + parseFloat(amount),
        };
      }
      return ing;
    });

    setIngredients(updated);
    setAmount("");
    alert(`Added ${amount} to ${selected}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div>
        <label className="block text-sm mb-2">Select Ingredient</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-600"
        >
          {ingredients.map((ing, i) => (
            <option key={i} value={ing.name}>
              {ing.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm mb-2">Amount to Add</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-600"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Stock
      </button>
    </form>
  );
};

export default AddStockForm;
