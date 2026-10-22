import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  // Yahan tumhare products bhi search honge - agar products ka data kisi aur file me hai to ye line change kar dena
  // import { products } from "../data/products" karke allItems me add kar sakte ho
  const allSearchable = links;

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    return allSearchable.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSelect = (to) => {
    setSearchOpen(false);
    setQuery("");
    navigate(to);
  };

  return (
    <>
      <div className="bg-[#ffcc00] text-black text-[11px] font-bold py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-10 w-max">
          <span>✦ GET 15% OFF ON ALL ORDERS | USE CODE: AYUR15 ✦</span>
          <span>✦ FREE SHIPPING ON ORDERS ABOVE ₹499 ✦</span>
          <span>✦ 100% AYURVEDIC & CLINICALLY TESTED ✦</span>
          <span>✦ GET 15% OFF ON ALL ORDERS | USE CODE: AYUR15 ✦</span>
          <span>✦ FREE SHIPPING ON ORDERS ABOVE ₹499 ✦</span>
        </div>
      </div>

      <nav className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-3 relative">
          <Link to="/" className="font-black text-xl text-[#0f3d2e]">Ayurveda</Link>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 bg-gray-100 rounded-full grid place-items-center hover:bg-black hover:text-white transition-all"
            >
              <FiSearch />
            </button>
            <Link to="/cart" className="w-9 h-9 bg-gray-100 rounded-full grid place-items-center">
              <FiShoppingCart />
            </Link>
            <button onClick={() => setOpen(true)} className="w-9 h-9 bg-black text-white rounded-full grid place-items-center">
              <HiOutlineDotsVertical />
            </button>
          </div>

          {/* SEARCH DROPDOWN */}
          {searchOpen && (
            <div className="absolute top-[60px] right-6 w-[90vw] md:w-[380px] bg-white rounded-[1.2rem] shadow-2xl border p-3 z-[80]">
              <div className="flex items-center gap-2 bg-[#f5f5f0] rounded-full px-4 h-11">
                <FiSearch className="text-gray-500" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search anything... (Shop, About, Blogs)"
                  className="bg-transparent outline-none text-[14px] w-full"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filtered[0]) handleSelect(filtered[0].to)
                  }}
                />
                <button onClick={() => setSearchOpen(false)}>✕</button>
              </div>

              {query && (
                <div className="mt-3">
                  {filtered.length === 0 ? (
                    <p className="text-[13px] text-center py-4 text-gray-500">No result for "{query}"</p>
                  ) : (
                    filtered.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleSelect(item.to)}
                        className="w-full text-left p-3 rounded-xl hover:bg-green-50 font-bold flex justify-between items-center"
                      >
                        {item.name} <span className="text-[11px] bg-green-100 px-2 py-1 rounded-full">Page</span>
                      </button>
                    ))
                  )}
                  {/* Products search ke liye ye button */}
                  <button
                    onClick={() => handleSelect(`/products?search=${query}`)}
                    className="w-full mt-2 p-3 rounded-xl bg-[#0f3d2e] text-white font-bold text-[13px] text-center"
                  >
                    Search "{query}" in Products →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* OVERLAYS */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-[60]"></div>}
      {searchOpen && <div onClick={() => setSearchOpen(false)} className="fixed inset-0 bg-black/10 z-[40] top-[88px]"></div>}

      <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-xl transition-all duration-300 ${open? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <b>Menu</b>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.name} to={l.to} onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-green-50 font-bold flex justify-between">
                {l.name} <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}