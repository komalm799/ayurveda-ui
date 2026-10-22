import { Link } from "react-router-dom";

export default function Categories() {
  const items = [
    "Weight Management",
    "Sugar Management",
    "Daily Ayurveda",
    "Popular Combos"
  ];

  return (
    <div className="w-full bg-[#102e22] py-4">
      
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 px-4">
        {items.map((name) => (
          <Link
            key={name}
            to="/products"
            className="bg-[#f5f1e6] hover:bg-white text-black px-5 py-[10px] rounded-full flex items-center gap-3 text-[13px] font-bold tracking-wide transition-all"
          >
            {name}
            <span className="bg-black text-white w-6 h-6 rounded-full grid place-items-center text-[12px]">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}