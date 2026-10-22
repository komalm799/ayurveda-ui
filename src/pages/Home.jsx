import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaLeaf, FaWeight, FaHeartbeat, FaSeedling, FaGift, FaStar, FaFire, FaHeart, FaShoppingCart } from "react-icons/fa";
import hero1 from "../assets/hero1.webp";
import letsgain from "../assets/letsgain.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import Categories from "./Categories.jsx";
import { homeproduct } from "../data/homeproduct.js";
import sugarQuiz from "../assets/sugarQuiz.jpg"
import weightQuiz from "../assets/weightQuiz.jpg"
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [tab, setTab] = useState("Best Sellers");
  const navigate = useNavigate();

  const imgs = [hero1, letsgain, hero2, hero3, hero4];

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % 5), 3000);
    return () => clearInterval(t);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const cleanPrice = parseInt(String(product.price).replace(/[^0-9]/g,"")) || 0;
    const productToAdd = { ...product, price: cleanPrice };
    
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      cart.push({ ...productToAdd, quantity: 1 });
    } else {
      exists.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };

  const handleShopNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const handleAddToCartClick = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#fffdf8]">

      {/* 1. HERO SLIDER   */}
      <div className="relative w-full h-[380px] md:h-[420px] overflow-hidden bg-black">
        <Link to="/products">
          <img src={imgs[slide]} alt="banner" className="w-full h-full object-cover object-center" />
        </Link>
        <button onClick={()=>setSlide(s=> (s-1+5)%5)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 w-9 h-9 rounded-full grid place-items-center"><FaArrowLeft size={14}/></button>
        <button onClick={()=>setSlide(s=> (s+1)%5)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 w-9 h-9 rounded-full grid place-items-center"><FaArrowRight size={14}/></button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {[0,1,2,3,4].map(n=>(
            <button key={n} onClick={()=>setSlide(n)} className={`h-2 rounded-full transition-all ${n===slide? "w-6 bg-white":"w-2 bg-white/60"}`}></button>
          ))}
        </div>
      </div>

      {/* 2. MARQUEE -line */}
      <div className="bg-[#0f3d2e] text-[#d6e8c5] py-2.5 text-[11px] tracking-widest overflow-hidden whitespace-nowrap">
       <div className="animate-marquee flex gap-10 w-max">
        <span>✦ Ancient Wisdom, Modern Formulations ✦ Crafted by Certified Ayurveda Experts ✦</span>
        <span>✦ Ancient Wisdom, Modern Formulations ✦ Crafted by Certified Ayurveda Experts ✦</span>
        <span>✦ Ancient Wisdom, Modern Formulations ✦ Crafted by Certified Ayurveda Experts ✦</span>
       </div>
      </div>

      <Categories onSelect={(slug) => console.log(slug)} />

      {/* 4. HIGH QUALITY - UPDATED */}
      <div className="bg-[#fcfcf8] py-10 px-5 text-center">
        <h2 className="font-bold text-[22px] text-[#0f3d2e] flex items-center justify-center gap-2">
          <FaLeaf className="text-[#78934d]"/> High-Quality Ingredients. Honest Formulations.
        </h2>
        <div className="flex justify-center gap-2 mt-6">
          {["Best Sellers","New Launches","Popular Combos"].map(t => (
            <button key={t} onClick={()=>setTab(t)} className={`px-5 py-1.5 rounded-full text-xs border font-bold transition-all ${tab===t ? "bg-black text-white border-black" : "bg-white text-gray-600 border-gray-300"}`}>{t}</button>
          ))}
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-left">
          {homeproduct[tab].map(p => (
            <div key={p.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="relative bg-[#f5f1e6] p-3">
                <div className="absolute top-2 right-2 bg-black text-white text-[9px] w-9 h-9 rounded-full grid place-items-center font-bold z-10">{p.off}</div>
                <button onClick={(e)=>handleAddToCartClick(p,e)} className="absolute top-2 left-2 bg-white w-8 h-8 rounded-full grid place-items-center shadow z-10 hover:bg-black hover:text-white transition"><FaShoppingCart size={12}/></button>
                <Link to={`/product/${p.id}`}><img src={p.image} alt={p.name} className="h-28 w-full object-contain" /></Link>
              </div>
              <div className="p-3">
                <Link to={`/product/${p.id}`}><h3 className="text-xs font-bold line-clamp-1 hover:underline">{p.name}</h3></Link>
                <p className="text-[11px] text-gray-500 mt-1">{p.reviews} Reviews</p>
                <p className="text-sm font-black mt-1">{p.price} <span className="text-gray-400 line-through text-xs">{p.oldPrice}</span></p>
                <button onClick={()=>handleShopNow(p)} className="w-full mt-3 bg-black text-white text-xs py-2 rounded-full font-bold hover:bg-[#0f3d2e]">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/products" className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full text-xs font-bold">Shop All Products</Link>
      </div>

      {/* 5.5 - ROOTED IN RESULTS - */}
      <div className="w-full bg-[#f8f0e0] grid md:grid-cols-2 items-center overflow-hidden mt-10">
        <div className="p-8 md:p-12 lg:px-16">
          <h2 className="text-[22px] md:text-[28px] font-black text-[#1a1a1a] leading-tight">Ancient Wisdom. Modern Wellness.</h2>
          <p className="text-[13px] md:text-[14px] text-[#4a4a4a] mt-4 leading-[1.6] max-w-[450px]">Ayuvya is a return to balance in a world that's forgotten how to pause. Born from the roots of Indian ayurvedic & herbal wisdom and refined by modern science, Ayuvya creates potent, honest, and effective formulations that fit seamlessly into your life.</p>
          <Link to="/products" className="inline-block mt-6 bg-[#1e3a2e] text-white text-[12px] font-black tracking-wider px-6 py-2.5 rounded-full">SHOP ALL</Link>
        </div>
        <div className="relative h-[260px] md:h-[380px] w-full bg-[#1e3a2e]">
          <img src="https://rehab-centre.org.uk/tenancy/assets/images/v2-13nwwl-mhu2d.jpg" alt="Ayuvya Ayurveda" className="w-full h-full object-cover opacity-90"/>
          <div className="absolute inset-0 flex items-center justify-center"><h1 className="text-white text-[40px] md:text-[60px] font-light tracking-[8px] opacity-80">AYUVYA</h1></div>
        </div>
      </div>

      {/* 6 - TRUST / FEATURES GRID */}
      <div className="w-full bg-[#faf8f3] py-8 md:py-12">
        <div className="max-w-[1300px] mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-[16px] p-5 md:p-6 flex gap-4 items-start border border-[#f2e8cc] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-[#fdf3df] rounded-full flex items-center justify-center text-[18px]">❤️</div>
            <div><h3 className="text-[16px] font-black leading-tight">Support of 30,00,000+</h3><h4 className="text-[13px] font-bold text-black mt-1">Happy Customers</h4><p className="text-[12.5px] text-[#555] mt-1.5 leading-[1.5]">Loved across India by people who've experienced real, visible change.</p></div>
          </div>
          <div className="bg-white rounded-[16px] p-5 md:p-6 flex gap-4 items-start border border-[#e3efe0] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-[#e8efe6] rounded-full flex items-center justify-center text-[18px]">🌿</div>
            <div><h3 className="text-[16px] font-black leading-tight">Unique</h3><h4 className="text-[13px] font-bold text-black mt-1">Blend of Ayurvedic & Herbal Ingredients</h4><p className="text-[12.5px] text-[#555] mt-1.5 leading-[1.5]">Each batch undergoes strict quality checks to ensure safety, purity, and effectiveness.</p></div>
          </div>
          <div className="bg-white rounded-[16px] p-5 md:p-6 flex gap-4 items-start border border-[#e3efe0] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-[#e8efe6] rounded-full flex items-center justify-center text-[18px]">🔬</div>
            <div><h3 className="text-[16px] font-black leading-tight">Science + Ayurveda</h3><h4 className="text-[13px] font-bold text-black mt-1">Clinically Studied Ingredients</h4><p className="text-[12.5px] text-[#555] mt-1.5 leading-[1.5]">Formulated using herbs backed by scientific studies and time-tested Ayurvedic principles.</p></div>
          </div>
          <div className="bg-white rounded-[16px] p-5 md:p-6 flex gap-4 items-start border border-[#f2e8cc] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-[#fdf3df] rounded-full flex items-center justify-center text-[18px]">🍃</div>
            <div><h3 className="text-[16px] font-black italic leading-tight">Pure & Natural</h3><h4 className="text-[13px] font-bold text-black mt-1">Trusted by Experts</h4><p className="text-[12.5px] text-[#555] mt-1.5 leading-[1.5]">Created by qualified modern vaidyas, ayurvedic experts and refined by modern wellness experts for today's lifestyle.</p></div>
          </div>
          <div className="bg-[#1e3a2e] rounded-[16px] p-5 md:p-6 flex gap-4 items-start shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-white/15 rounded-full flex items-center justify-center text-[18px]">⭐</div>
            <div><h3 className="text-[16px] font-black italic leading-tight text-[#e6c88e]">1,00,000+ Reviews</h3><h4 className="text-[13px] font-bold text-white mt-1">Clean, Conscious, Cruelty-Free</h4><p className="text-[12.5px] text-white/70 mt-1.5 leading-[1.5]">No toxins, no shortcuts, no harsh chemicals, just care that respects your Vata, Pitta, Kapha.</p></div>
          </div>
          <div className="bg-[#fdf3df] rounded-[16px] p-5 md:p-6 flex gap-4 items-start border-2 border-dashed border-[#e6c88e] hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
            <div className="min-w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center text-[18px]">🦈</div>
            <div><h3 className="text-[16px] font-black leading-tight">Shark Tank Approved</h3><h4 className="text-[13px] font-bold text-black mt-1">As Seen on Shark Tank India</h4><p className="text-[12.5px] text-[#555] mt-1.5 leading-[1.5]">Loved and trusted by millions, featured for our authentic Ayurvedic approach.</p></div>
          </div>
        </div>
      </div>

      {/* 5. ROOTED + QUIZ */}
      <div className="max-w-[1100px] mx-auto px-5 py-10">
        <div className="text-center mb-8"><h2 className="text-[28px] md:text-[36px] font-black mt-3 text-[#1e3a2e]">Find Your Perfect <span style={{color: "#7a9a3a"}} className="font-medium"> Ayurvedic Match</span></h2></div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="group relative bg-[#1e3a2e] rounded-[20px] p-7 overflow-hidden flex justify-between items-center">
            <div><span className="bg-[#c8f135] text-black text-[10px] font-black px-2.5 py-1 rounded-full">WEIGHT GAIN QUIZ</span><h3 className="font-bold text-[20px] leading-[1.2] mt-3 text-white max-w-[200px]">Can't gain weight no matter what you eat?</h3><p className="text-[12px] text-white/60 mt-2">Get personalized Ayurvedic solution in 60 sec</p><button className="mt-5 bg-white text-black px-5 py-2 rounded-full text-[11px] font-black">TAKE QUIZ →</button></div>
            <img src={weightQuiz} alt="weight" className="w-[110px] h-[110px] object-contain bg-white/10 rounded-full p-2" />
          </div>
          <div className="group relative bg-[#f5f1e6] rounded-[20px] p-7 overflow-hidden flex justify-between items-center border border-[#e8e0c8]">
            <div><span className="bg-black text-white text-[10px] font-black px-2.5 py-1 rounded-full">DIABETES QUIZ</span><h3 className="font-bold text-[20px] leading-[1.2] mt-3 text-[#1e3a2e] max-w-[200px]">Take charge of your sugar levels naturally</h3><p className="text-[12px] text-black/50 mt-2">Ayurveda backed plan for you</p><button className="mt-5 bg-[#1e3a2e] text-white px-5 py-2 rounded-full text-[11px] font-black">TAKE QUIZ →</button></div>
            <img src={sugarQuiz} alt="sugar" className="w-[110px] h-[110px] object-contain bg-white rounded-full p-2" />
          </div>
        </div>
      </div>

      {/* 7 - SHOP WHAT YOU SEE */}
      <div className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1300px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8"><h2 className="text-[24px] md:text-[32px] font-bold text-black">Shop What You See</h2><p className="text-[13px] md:text-[14px] text-[#555] mt-2">Watch. Understand. Choose better. Each product tells its own story.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[1,2,3,4].map(i=>(
              <div key={i} className="relative rounded-[12px] overflow-hidden bg-black aspect-[9/14]">
                <div className="absolute top-0 left-0 right-0 bg-black text-white text-[9px] font-bold tracking-wider py-1.5 px-2 flex z-20"><span className="bg-white text-black px-1 rounded-sm mr-1">As Seen On</span> SHARK TANK INDIA</div>
                <video src={i%2===0 ? "https://www.w3schools.com/html/movie.mp4" : "https://www.w3schools.com/html/mov_bbb.mp4"} autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8 - INSTAGRAM FEED */}
      <div className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1300px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8"><p className="text-[13px] md:text-[14px] font-semibold tracking-widest text-black/70 uppercase">@AYUVYAYURVEDA</p><h2 className="text-[22px] md:text-[28px] font-normal text-black mt-1">see you at the 'gram</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600" alt="Berries" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600" alt="Drinks" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /><div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] p-1 text-center">4 Drinks To End Your Day Right</div></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=600" alt="Fatty liver" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /><div className="absolute top-2 left-2 bg-[#c93a2a] text-white text-[11px] font-bold px-2 py-1 rounded">Fatty liver foods</div></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600" alt="Juice" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=600" alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=600" alt="Ayuvya Glass" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /><div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] font-bold rounded">AYUVYA</div></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=600" alt="Honey Ghee" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /><div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#ffeb3b] text-black text-[11px] font-bold px-3 py-1 rounded">Honey + Ghee</div></a>
            <a href="https://www.instagram.com/ayuvyaayurveda/" target="_blank" className="relative aspect-square overflow-hidden bg-gray-100 group"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600" alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></a>
          </div>
        </div>
      </div>
            
      <BlogPreview/>
    </div>
  );
}