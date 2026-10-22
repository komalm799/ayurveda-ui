import { Link } from "react-router-dom";
import weightQuiz from "../assets/weightQuiz.jpg";
import sugarQuiz from "../assets/sugarQuiz.jpg";

export default function Categories() {
  const items = [
    { title1: "Weight", title2: "Management", img: weightQuiz },
    { title1: "Sugar", title2: "Management", img: sugarQuiz },
    { title1: "Daily", title2: "Ayurveda", img: weightQuiz },
    { title1: "Shop Popular", title2: "Combos", img: sugarQuiz },
  ];

  return (
    <div className="w-full bg-[#102e22] py-2.5 md:py-3.5 overflow-hidden">
      
      {/* TOP MOVING TEXT */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-3">
        <div className="flex items-center gap-10 md:gap-16 animate-marquee text-white text-[11px] md:text-[12px] font-medium tracking-wide">
          <span>☘️ Made to Support Your Wellness Journey</span>
          <span>⚗️ Ancient Wisdom, Modern Formulations</span>
          <span>🧑‍⚕️ Crafted by Certified Ayurvedic Experts</span>
          <span>☘️ Made to Support Your Wellness Journey</span>
        </div>
      </div>

      {/* 4 CARDS */}
      <div className="max-w-7xl mx-auto px-3 md:px-5">
        <div className="grid grid-cols-2 lg:flex lg:justify-center gap-2.5 md:gap-3.5">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to="/products"
              className="group bg-[#efeee0] rounded-[14px] md:rounded-[16px] flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 w-full lg:w-[268px] h-[72px] md:h-[82px] relative overflow-hidden transition-all hover:bg-white hover:-translate-y-[2px] hover:shadow-md"
            >
              <div className="flex flex-col leading-[13px] md:leading-[17px] z-10">
                <span className="text-[12px] md:text-[13.5px] font-bold text-black">{item.title1}</span>
                <span className="text-[12px] md:text-[13.5px] font-bold text-black">{item.title2}</span>
              </div>

              <div className="absolute right-[36px] md:right-[42px] top-1/2 -translate-y-1/2 w-[68px] md:w-[88px] h-[52px] md:h-[66px]">
                <img src={item.img} alt={item.title1} className="w-full h-full object-contain object-right" />
              </div>

              {/* Green Arro */}
              <span className="absolute right-[6px] md:right-[8px] top-1/2 -translate-y-1/2 bg-[#7f9e7b] text-white w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full grid place-items-center text-[14px]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
          display: flex;
        }
      `}</style>
    </div>
  );
}