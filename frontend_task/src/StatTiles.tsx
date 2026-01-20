import type { Product } from "./App";

const StatTiles = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className=" mt-4 bg-white border rounded p-4">
        <p className="text-sm text-gray-500">Total Products</p>
        <p className="text-2xl font-bold">{products.length}</p>
      </div>
      </>
  );
};
  export default StatTiles;