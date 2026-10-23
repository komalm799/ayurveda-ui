import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser, FiMenu } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const currentCategory = new URLSearchParams(location.search).get("category") || "all-products";

  const categories = [
    { name: "All Products", slug: "all-products" },
    { name: "Heart Health", slug: "heart-health" },
    { name: "Liver Health", slug: "liver-health" },
    { name: "Daily Ayurveda", slug: "daily-ayurveda" },
    { name: "Gym & Fitness", slug: "gym-fitness" },
    { name: "Sugar Management", slug: "sugar-management" },
    { name: "Piles Care", slug: "piles-care" },
    { name: "Weight Management", slug: "weight-management" },
    { name: "Women's Health", slug: "womens-health" },
    { name: "Combos", slug: "combos" },
  ];

  const oldLinks = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  const handleCategoryClick = (slug) => {
    setOpen(false);
    if (slug === "all-products") navigate("/products");
    else navigate(`/products?category=${slug}`);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((a, b) => a + (b.quantity || 1), 0));
  }, [open, location]);

  return (
    <>

    {/* 1st LINE - BLUE WALI - EXACT SAME AS AYUVYA */}
    <div className="bg-[#0A1931] text-white text-[11px] tracking-[1px] py-2 overflow-hidden whitespace-nowrap">
      <div className="flex w-max" style={{ animation: "marquee 30s linear infinite" }}>
        <span className="flex items-center">
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
        </span>
        <span className="flex items-center">
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
          <span className="mx-6">As Seen On <b className="text-[#FFD700]">SHARK TANK INDIA</b></span>
        </span>
      </div>
    </div>
      
       <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
             100% { transform: translateX(-50%); }
             }
      `}</style>

      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="h-[56px] flex items-center border-b">
          <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center px-4 relative">
            <div className="flex items-center gap-4">
              <button onClick={() => setOpen(true)} className="text-[22px]"><FiMenu /></button>
              <button onClick={() => setSearchOpen(true)} className="text-[18px]"><FiSearch /></button>
            </div>
            <Link to="/" className="font-bold text-[20px] tracking-[4px] font-light">
                 ΛYUVYΛ
            </Link>


            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative text-[19px]"><FiShoppingBag />{cartCount > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full grid place-items-center">{cartCount}</span>}</Link>
              <Link to="/login" className="text-[20px]"><FiUser /></Link>
            </div>
          </div>
        </nav>

        {!isHomePage && (
          <div className="hidden md:flex gap-6 px-8 py-2.5 border-b bg-white overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button key={cat.slug} onClick={() => handleCategoryClick(cat.slug)} className="whitespace-nowrap text-[13px] font-semibold">{cat.name}</button>
            ))}
          </div>
        )}

        {!searchOpen && <div className="bg-[#FFD400] text-center py-[8px] text-[11px] font-bold">GET UPTO ₹200 OFF & FREE PRODUCT ON ONLINE PAYMENTS*</div>}
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-[60]"></div>}
      
      <div className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[70] shadow-xl transition-all duration-300 overflow-y-auto ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">

        <div className="flex justify-between items-center mb-6"><b className="text-[22px] tracking-[4px] font-bold">ΛYUVYΛ</b><button onClick={() => setOpen(false)} className="text-[22px]">✕</button></div>
          
          <div className="flex flex-col">
            {categories.map((c) => (
              <button key={c.slug} onClick={() => handleCategoryClick(c.slug)} className="text-left py-2.5 text-[16px] font-bold border-b border-gray-50">{c.name}</button>
            ))}
          </div>

          
          <div className="flex flex-col">
            {oldLinks.map((l) => (
              <Link key={l.name} to={l.to} onClick={() => setOpen(false)} className="py-3 px-2 flex justify-between font-medium text-[15px] hover:bg-green-50 rounded">
                {l.name} <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { animation: marquee 18s linear infinite; } .scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </>
  );
}