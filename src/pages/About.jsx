import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="bg-[#fffdf8] min-h-screen text-[#254c35]">
      
      {/* HERO  */}
      <section className="max-w-[1300px] mx-auto px-[7%] py-[60px] md:py-[90px] grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-[#78934d] text-[11px] font-bold tracking-[3px]">ABOUT AYURVEDA • EST. 2026</p>
          <h1 className="mt-4 text-[38px] md:text-[56px] font-black leading-[0.95]">
            Ancient Wisdom <br />For <span className="text-[#78934d] font-serif italic font-normal">Modern Life.</span>
          </h1>
          <p className="mt-6 text-[#687266] leading-8 text-[15px] max-w-[480px]">
            We started with a simple question - Why are we putting chemicals on our body in the name of wellness? 
            Ayurveda was the answer, and we made it simple, effective & accessible for you.
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/products" className="px-7 py-3.5 bg-[#254c35] text-white rounded-full text-sm font-bold hover:bg-[#1a3826] transition">
              Shop Collection
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              </div>
              <p className="text-[12px] font-bold leading-tight">Trusted by<br/>10k+ Customers</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600" className="w-full h-[320px] object-cover rounded-[2rem] mt-8" alt="ayurveda" />
          <img src="https://images.unsplash.com/photo-1608571423902-eed4a94d8d42?q=80&w=600" className="w-full h-[320px] object-cover rounded-[2rem]" alt="herbs" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#254c35] text-white">
        <div className="max-w-[1300px] mx-auto px-[7%] py-8 grid grid-cols-3 divide-x divide-white/10 text-center">
          <div><h3 className="text-3xl font-bold">100%</h3><p className="text-[11px] tracking-[2px] text-white/60 mt-1">NATURAL ORIGIN</p></div>
          <div><h3 className="text-3xl font-bold">0%</h3><p className="text-[11px] tracking-[2px] text-white/60 mt-1">HARMFUL CHEMICALS</p></div>
          <div><h3 className="text-3xl font-bold">Lab</h3><p className="text-[11px] tracking-[2px] text-white/60 mt-1">TESTED FORMULAS</p></div>
        </div>
      </section>

      {/* OUR STORY - Pro */}
      <section className="max-w-[1300px] mx-auto px-[7%] py-[80px] grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80" alt="story" className="w-full h-[500px] object-cover rounded-[2rem]" />
          <div className="absolute -bottom-6 -right-6 bg-[#f5f3e8] p-6 rounded-2xl shadow-xl max-w-[220px]">
            <p className="text-4xl">🌿</p>
            <p className="text-sm font-bold mt-2 leading-snug">Directly sourced from organic farms in Kerala</p>
          </div>
        </div>
        <div>
          <p className="text-[#78934d] text-[11px] font-bold tracking-[3px]">OUR JOURNEY</p>
          <h2 className="text-[34px] font-bold leading-tight mt-3">We Didn't Just Create Products, We Revived a Ritual.</h2>
          <p className="text-[#687266] leading-8 mt-5 text-[14.5px]">In a market full of chemical-laden products with ayurvedic labels, we found a gap. Real Ayurveda was lost. We collaborated with 3rd generation Vaidyas from Kerala to bring back authentic formulations.</p>
          <ul className="mt-6 space-y-3 text-[14px]">
            <li className="flex gap-3"><span className="text-[#78934d]">✓</span> No Parabens, Sulphates, Mineral Oil</li>
            <li className="flex gap-3"><span className="text-[#78934d]">✓</span> Ethically Sourced & Cruelty Free</li>
            <li className="flex gap-3"><span className="text-[#78934d]">✓</span> Clinically Tested on Real People, Not Animals</li>
          </ul>
          <Link to="/products" className="inline-block mt-8 px-7 py-3.5 border border-[#254c35] rounded-full text-sm font-bold hover:bg-[#254c35] hover:text-white transition">
            Explore Our Process
          </Link>
        </div>
      </section>

      {/* VALUES - Professional Cards */}
      <section className="bg-[#f5f3e8] py-[80px] px-[7%]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-[32px] font-bold">Rooted In Values, Backed By Science</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-8 rounded-[1.5rem] border border-black/5">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=200" className="w-16 h-16 rounded-full object-cover mb-5" alt="" />
              <h3 className="font-bold text-[18px]">Nature Inspired</h3>
              <p className="text-[#737b70] text-[14px] leading-7 mt-2">Every herb is hand-picked, sun-dried and cold-processed to keep its potency intact.</p>
            </div>
            <div className="bg-white p-8 rounded-[1.5rem] border border-black/5">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=200" className="w-16 h-16 rounded-full object-cover mb-5" alt="" />
              <h3 className="font-bold text-[18px]">Mindful Wellness</h3>
              <p className="text-[#737b70] text-[14px] leading-7 mt-2">We don't sell products, we promote a daily ritual for balance and peace.</p>
            </div>
            <div className="bg-white p-8 rounded-[1.5rem] border border-black/5">
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=200" className="w-16 h-16 rounded-full object-cover mb-5" alt="" />
              <h3 className="font-bold text-[18px]">Honest & Transparent</h3>
              <p className="text-[#737b70] text-[14px] leading-7 mt-2">Full ingredient list on the front, not hidden. What you see is what you apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1300px] mx-auto px-[7%] py-[60px]">
        <div className="bg-[#254c35] rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight relative z-10">Ready to Start Your<br/>Ayurvedic Journey?</h2>
          <Link to="/products" className="inline-block mt-6 px-8 py-4 bg-[#ffcc00] text-black rounded-full font-bold relative z-10">
            Shop Now →
          </Link>
          <img src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400" className="absolute right-0 top-0 h-full w-[40%] object-cover opacity-20" alt="" />
        </div>
      </section>
    </main>
  );
}

export default About;