import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

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
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-3">
          <Link to="/" className="font-black text-xl text-[#0f3d2e]">Ayurveda</Link>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 bg-gray-100 rounded-full grid place-items-center">
              <FiSearch />
            </button>
            <Link to="/cart" className="w-9 h-9 bg-gray-100 rounded-full grid place-items-center">
              <FiShoppingCart />
            </Link>
            <button onClick={() => setOpen(true)} className="w-9 h-9 bg-black text-white rounded-full grid place-items-center">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
      </nav>

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-[60]"></div>}

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