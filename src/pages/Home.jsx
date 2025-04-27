import React from "react";
import StockTable from "../components/StockTable";

const Home = ({ ingredients }) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <StockTable ingredients={ingredients} />
    </div>
  );
};

export default Home;
