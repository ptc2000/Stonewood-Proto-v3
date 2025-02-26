
import { useState } from "react";
import { ProductGrid } from "../components/ProductGrid";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center text-3xl font-bold mb-6">
        New Product Marketing Hub
      </header>
      <SearchBar />
      <ProductGrid />
    </div>
  );
}
