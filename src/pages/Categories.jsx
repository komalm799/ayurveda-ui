import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories.js";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1a3c28] py-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/shop?category=${cat.slug}`)}
            className="flex justify-between items-center bg-[#e8e6d1] rounded-[18px] px-4 py-4 cursor-pointer hover:bg-white"
          >
            <span className="font-bold text-[#1a3c28] text-sm">{cat.name}</span>
            <span className="bg-[#2d5a3a] text-white w-6 h-6 rounded-full flex items-center justify-center">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}