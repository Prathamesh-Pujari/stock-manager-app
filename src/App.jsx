import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddStock from "./pages/AddStock";
import ingredientsData from "./data/ingredients";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState(ingredientsData);

  return (
    <Router>
      <nav className="bg-zinc-900 text-white p-4 flex justify-between">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/add-stock" className="hover:underline">
          Add Stock
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home ingredients={ingredients} />} />
        <Route
          path="/add-stock"
          element={
            <AddStock
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
