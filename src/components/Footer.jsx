import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full mt-12">


      {/* BEST DISCLAIMER  */}
<div className="w-full bg-[#fdfcf8] border-t border-[#f0eee6]">
  <div className="max-w-[1200px] mx-auto px-4 md:px-[7%] py-8">
    <p className="text-[11px] md:text-[12px] leading-[19px] text-[#8a8d88] text-center">
      <span className="font-bold text-[#6b6e68]">Disclaimer:</span> Our Ayurvedic formulations are rooted in traditional wellness practices and are intended to support your overall well-being. 
      They are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary based on body type, lifestyle and consistent usage. 
      Please consult your Ayurvedic physician or healthcare professional before starting any new supplement, especially if you are pregnant, nursing, have a medical condition or allergies. 
      Please check the ingredient list carefully. This information is for educational purposes only and is not a replacement for professional medical advice.
    </p>
  </div>
</div>
      
      {/* ===== 1. TOP BANNER  ===== */}
      <div className="relative w-full h-[180px] md:h-[220px] bg-[#c2c67e] flex items-center justify-center overflow-hidden">
        
        {/* Left Flowers */}
        <div className="absolute left-0 bottom-0 top-0 w-[200px] md:w-[300px] pointer-events-none">
          <img 
            src="https://i.ibb.co/3sR0kY0/flower-left.png" 
            alt=""
            className="w-full h-full object-contain object-left"
            style={{display:'none'}}
          />
          {/* SVG Fallback - Orange Flowers */}
          <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
            <g>
              {/* Orange big flower */}
              <ellipse cx="20" cy="80" rx="28" ry="32" fill="#f4a261"/>
              <ellipse cx="20" cy="80" rx="12" ry="14" fill="#1a1a1a"/>
              <circle cx="20" cy="80" r="3" fill="white" opacity="0.8"/>
              {/* Small orange */}
              <ellipse cx="65" cy="85" rx="18" ry="16" fill="#f4a261"/>
              <ellipse cx="65" cy="60" rx="14" ry="18" fill="#e8a040"/>
              {/* Red flowers */}
              <circle cx="45" cy="130" r="24" fill="#e85d3f"/>
              <circle cx="45" cy="130" r="12" fill="#1a1a1a"/>
              <circle cx="45" cy="130" r="2" fill="white"/>
              <circle cx="45" cy="125" r="1.5" fill="white"/>
              <circle cx="50" cy="132" r="1.5" fill="white"/>
              
              <circle cx="95" cy="155" r="18" fill="#e85d3f"/>
              <circle cx="95" cy="155" r="8" fill="#1a1a1a"/>
              
              {/* Black leaves */}
              <path d="M30 180 Q60 160 110 140" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
              <ellipse cx="95" cy="180" rx="32" ry="12" fill="#1a1a1a" transform="rotate(-20 95 180)"/>
              <ellipse cx="115" cy="165" rx="28" ry="10" fill="#1a1a1a" transform="rotate(-15 115 165)"/>
              <ellipse cx="125" cy="145" rx="24" ry="9" fill="#1a1a1a" transform="rotate(-10 125 145)"/>
              <path d="M10 220 Q30 180 40 130" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Right Flowers */}
        <div className="absolute right-0 bottom-0 top-0 w-[200px] md:w-[300px] pointer-events-none scale-x-[-1]">
          <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
            <g>
              <ellipse cx="20" cy="80" rx="28" ry="32" fill="#f4a261"/>
              <ellipse cx="20" cy="80" rx="12" ry="14" fill="#1a1a1a"/>
              <circle cx="45" cy="130" r="24" fill="#e85d3f"/>
              <circle cx="45" cy="130" r="12" fill="#1a1a1a"/>
              <circle cx="95" cy="155" r="18" fill="#e85d3f"/>
              <circle cx="95" cy="155" r="8" fill="#1a1a1a"/>
              <path d="M30 180 Q60 160 110 140" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
              <ellipse cx="95" cy="180" rx="32" ry="12" fill="#1a1a1a" transform="rotate(-20 95 180)"/>
              <ellipse cx="115" cy="165" rx="28" ry="10" fill="#1a1a1a" transform="rotate(-15 115 165)"/>
            </g>
          </svg>
        </div>

        {/* Center AYUVYA - White */}
        <h2 className="relative z-10 text-[42px] md:text-[64px] font-extralight tracking-[12px] md:tracking-[18px] text-white font-sans">
          ΛYUVYΛ<span className="text-[12px] align-super">®</span>
        </h2>
      </div>

      {/* ===== 2. MAIN FOOTER - Light Cream ===== */}
      <div className="bg-[#fdf8e7] px-6 md:px-[7%] py-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Follow Us */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-[#1e3a2a] text-[18px] mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-7 h-7 bg-[#1e3a2a] text-white rounded-full flex items-center justify-center text-[14px]">f</a>
              <a href="#" className="w-7 h-7 bg-[#1e3a2a] text-white rounded-full flex items-center justify-center">◎</a>
              <a href="#" className="w-7 h-7 bg-[#1e3a2a] text-white rounded-full flex items-center justify-center">▶</a>
              <a href="#" className="w-7 h-7 bg-[#1e3a2a] text-white rounded-full flex items-center justify-center">P</a>
            </div>
            <p className="text-[#1e3a2a] text-[13px] leading-6 font-medium">
              © AYURVEDA HOUSE PRIVATE LIMITED<br/>INC 2026<br/>
              <span className="mt-2 block">34 A Ground Floor, Hauz Khas Fort Rd,<br/>Hauz Khas, New Delhi, Delhi 110016</span>
            </p>
            
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-[#1e3a2a] text-[16px] mb-4">Categories</h3>
            <div className="flex flex-col gap-2 text-[13px] text-[#1e3a2a]">
              <Link to="/products">Gym & Fitness</Link>
              <Link to="/products">Liver Health</Link>
              <Link to="/products">Daily Ayurveda</Link>
              <Link to="/products">Sugar Management</Link>
              <Link to="/products">Piles Care</Link>
              <Link to="/products">Heart Health</Link>
              <Link to="/products">Weight Management</Link>
              <Link to="/products">Combos</Link>
            </div>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-bold text-[#1e3a2a] text-[16px] mb-4">Customer Services</h3>
            <div className="flex flex-col gap-2 text-[13px] text-[#1e3a2a]">
              <Link to="/contact">Contact Us</Link>
              <Link to="#">Create a Ticket</Link>
              <Link to="#">FAQs</Link>
              <Link to="#">Track Order</Link>
              <Link to="#">Refer a Friend</Link>
            </div>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-bold text-[#1e3a2a] text-[16px] mb-4">Terms & Condition</h3>
            <div className="flex flex-col gap-2 text-[13px] text-[#1e3a2a]">
              <Link to="#">Terms & Condition</Link>
              <Link to="#">Shipping Policy</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-[#1e3a2a] text-[16px] mb-4">About</h3>
            <div className="flex flex-col gap-2 text-[13px] text-[#1e3a2a]">
              <Link to="/about">About Us</Link>
              <Link to="#">Media & Awards</Link>
              <Link to="#">Certificates</Link>
              <Link to="#">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      {/* === 3. BOTTOM BAR - Dark Green with Leaf Pattern - BOLD ===== */}
      <div className="relative bg-[#1a3526] px-6 py-4 overflow-hidden">
        {/* Faint leaf pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="w-full h-full" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q60 40 50 90 Q40 40 50 10' fill='%23ffffff'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px'}}></div>
        </div>
        
        <p className="relative z-10 text-center text-white text-[13px] md:text-[14px] font-bold tracking-wide">
          © 2026 AYURVEDA HOUSE PRIVATE LIMITED All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;