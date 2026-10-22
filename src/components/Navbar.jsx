import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser, FiMenu } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.reduce((a, b) => a + (b.quantity || 1), 0));
    };
    updateCart();
    const interval = setInterval(updateCart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* BLACK BAR - AB CHALEGA */}
      <div className="bg-black text-white py-[7px] text-[11px] font-bold tracking-widest overflow-hidden whitespace-nowrap relative">
        <div className="flex w-max animate-[marquee_15s_linear_infinite] gap-12">
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
          <span>As Seen On <span className="text-[#FFC72C]">SHARK TANK INDIA</span> • </span>
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* HEADER - EK HI BAR RAHEGA */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="h-[56px] flex items-center border-b">
          <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center px-4 relative">
            <div className="flex items-center gap-4">
              <button onClick={() => setOpen(true)} className="text-[22px]"><FiMenu /></button>
              <button onClick={() => setSearchOpen(true)} className="text-[18px]"><FiSearch /></button>
            </div>
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-bold text-[20px] text-[#0f3d2e]">Ayurveda</Link>
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative text-[19px]">
                <FiShoppingBag />
                {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full grid place-items-center font-bold">{cartCount}</span>}
              </Link>
              <Link to="/login" className="text-[20px]"><FiUser /></Link>
            </div>
          </div>
        </nav>
        {!searchOpen && (
          <div className="bg-[#FFD400] text-black text-center py-[8px] text-[11px] font-bold">
            GET EXTRA DISCOUNT <span className="font-medium">ON ONLINE PAYMENT*</span>
          </div>
        )}
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* SIDEBAR */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-[60]"></div>}
      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] shadow-xl transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between"><b>AYURVEDA</b><button onClick={() => setOpen(false)}>✕</button></div>
          <div className="mt-8 flex flex-col gap-1">
            {links.map((l) => (<Link key={l.name} to={l.to} onClick={() => setOpen(false)} className="p-3 hover:bg-green-50 flex justify-between font-medium">{l.name} <span>→</span></Link>))}
          </div>
        </div>
      </div>
    </>
  );
}