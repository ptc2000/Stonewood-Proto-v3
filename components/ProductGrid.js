
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { products } from "../data/products";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="bg-gray-800 p-4 rounded-lg">
          <CardContent>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-400">{product.description}</p>
            <Button className="mt-4 w-full">View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
