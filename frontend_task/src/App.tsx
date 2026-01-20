import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import Navbar from "./Navbar";
import StatTiles from "./StatTiles";

export type Product ={
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

function App(){
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 800, category: "A" ,stock:10},
    { id: 2, name: "Charger", price: 120, category: "B",stock:2},
    { id: 3, name: "Table", price: 300, category: "C",stock:0 }]);

  const [search, setSearch] = useState<string>("");


  const addProduct = (product:Product)=>{
    setProducts([...products, product]);
  };

  const deleteProduct = (id:number)=>{
    setProducts(products.filter((p)=>p.id!=id));
  };

  const filteredProducts = products.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className="p-4">
      <Navbar/>
      
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 mt-4 mb-4 w-full"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

      <ProductForm addProduct={addProduct}/>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {filteredProducts.map((product)=>(
          <ProductCard key={product.id} {...product} deleteProduct={deleteProduct}/> ))}

      </div>
      <StatTiles products={products}/>
    </div>
  );
}


export default App;
