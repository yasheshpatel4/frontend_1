const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Swift Shop</h1>

      <ul className="hidden md:flex gap-6 text-sm">
        <li className="cursor-pointer hover:text-slate-300">Dashboard</li>
        <li className="cursor-pointer hover:text-slate-300">Product</li>
        <li className="cursor-pointer hover:text-slate-300">Inventory</li>
      </ul>
    </nav>
  );
};

export default Navbar;
