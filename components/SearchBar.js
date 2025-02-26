
import { useState } from "react";
import { Input } from "../components/ui/input";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center mb-6">
      <Input
        placeholder="Search products..."
        className="w-1/2 p-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
