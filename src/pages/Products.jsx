import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Ashwagandha Capsules', category: 'Daily Ayurveda', price: 399, oldPrice: 599, rating: 4.8, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Herbal Wellness Powder', category: 'Daily Ayurveda', price: 499, oldPrice: 699, rating: 4.6, image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Natural Skin Care', category: 'Skin Care', price: 299, oldPrice: 449, rating: 4.7, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Herbal Hair Care', category: 'Hair Care', price: 349, oldPrice: 499, rating: 4.5, image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Herbal Care Essentials', category: 'Herbal Care', price: 449, oldPrice: 649, rating: 4.6, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Daily Wellness Kit', category: 'Wellness', price: 599, oldPrice: 799, rating: 4.9, image: 'https://images.unsplash.com/photo-1608571423902-eed4a94d8108?w=500' },
  { id: 7, name: 'Gym & Fitness Booster', category: 'Gym & Fitness', price: 699, oldPrice: 999, rating: 4.8, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80' },
  { id: 8, name: 'Liv Cleanse Shots', category: 'Liver Health', price: 1299, oldPrice: 1599, rating: 4.7, image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80' },
  { id: 9, name: 'Sugar Management Care', category: 'Sugar Management', price: 599, oldPrice: 899, rating: 4.6, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80' },
  { id: 10, name: 'Piles Care Ayurvedic', category: 'Piles Care', price: 499, oldPrice: 749, rating: 4.5, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80' },
  { id: 11, name: 'Heart Health Support', category: 'Heart Health', price: 649, oldPrice: 899, rating: 4.8, image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=500&q=80' },
  { id: 12, name: 'Weight Management Kit', category: 'Weight Management', price: 799, oldPrice: 1199, rating: 4.9, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80' },
  { id: 13, name: 'Popular Combos Pack', category: 'Combos', price: 999, oldPrice: 1499, rating: 4.9, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80' },
];

const categoryInfo = {
  'All Products': { title: 'Ayurvedic Products', desc: 'Discover Raghaveda, your Gateway to Natural Wellness. Our carefully selected range of Ayurvedic health supplements and herbal health care products, crafted by expert vaidyas.' },
  'Heart Health': { title: 'Heart Health', desc: 'Support your heart wellness with Ayurvedic herbs like Arjuna, Ashwagandha. Our heart health products help maintain healthy cholesterol and blood pressure naturally.' },
  'Liver Health': { title: 'Liver Health', desc: 'Support your liver wellness with our range of Ayurvedic liver health products. Formulated to complement a balanced lifestyle and detox your liver naturally.' },
  'Daily Ayurveda': { title: 'Daily Ayurveda', desc: 'Daily Ayurvedic essentials for everyday balance, immunity and wellness. Made with pure herbs for daily use and holistic health.' },
  'Gym & Fitness': { title: 'Gym & Fitness', desc: 'Ayurvedic wellness products for gym and fitness enthusiasts. Boost strength, stamina and muscle recovery with Ashwagandha and Shilajit.' },
  'Sugar Management': { title: 'Sugar Management', desc: 'Manage blood sugar naturally with Karela, Jamun, Gudmar. Our Sugar Management range supports healthy glucose levels.' },
  'Piles Care': { title: 'Piles Care', desc: 'Natural Ayurvedic care for Piles with soothing herbs. Get relief from discomfort and support healthy digestion.' },
  'Weight Management': { title: 'Weight Management', desc: 'Healthy weight management with Ayurveda. Boost metabolism and burn fat naturally with our weight management kit.' },
  'Combos': { title: 'Popular Combos', desc: 'Save more with our best-selling Ayurvedic combos curated for complete wellness and family health.' },
  'Skin Care': { title: 'Skin Care', desc: 'Natural Ayurvedic skin care for glowing and healthy skin, free from chemicals and toxins.' },
  'Hair Care': { title: 'Hair Care', desc: 'Ayurvedic hair care solutions to reduce hair fall and boost hair growth naturally.' },
};

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = Object.keys(categoryInfo);

  const handleAddToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    const found = existing.find(item => item.id === product.id);
    if (found) {
      found.qty = (found.qty || 1) + 1;
    } else {
      existing.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(existing));
    alert(`${product.name} Added to Cart 🛒`);
  };

  const filteredProducts = products.filter((p) => {
    const catMatch = selectedCategory === 'All Products' || p.category === selectedCategory;
    const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  const current = categoryInfo[selectedCategory];

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-[4%] py-6 flex flex-col md:flex-row gap-8">
        
        <aside className="w-full md:w-[200px] flex-shrink-0">
          <h3 className="text-[11px] font-bold tracking-[1.5px] text-gray-400 mb-4">CATEGORIES</h3>
          <ul className="space-y-1">
            {categories.map(cat => (
              <li key={cat}>
                <button onClick={() => setSelectedCategory(cat)}
                  className={`text-left w-full py-2.5 px-3 text-[13px] rounded-md ${selectedCategory === cat ? 'text-[#c96a2c] font-bold bg-[#fff7f0] border-l-2 border-[#c96a2c]' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex-1">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[13px] text-gray-500"><Link to="/" className="underline">Home</Link> &gt; <span className="text-black font-medium">{selectedCategory}</span></div>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400 text-sm">🔍</span>
              <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search in this category..." className="w-[200px] pl-8 pr-3 py-2 text-[12px] border rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#c96a2c]" />
            </div>
          </div>

          <h1 className="text-[24px] font-bold text-black">{current.title}</h1>
          <p className="text-[13px] text-gray-600 mt-2 leading-5">{current.desc}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden flex flex-col">
                <Link to={`/products/${product.id}`} className="block bg-[#fdf8f3] h-[180px]"><img src={product.image} className="w-full h-full object-contain p-2" alt={product.name} /></Link>
                <div className="p-3 text-center flex flex-col flex-1">
                  <h3 className="text-[12px] font-medium line-clamp-2 min-h-[30px]">{product.name}</h3>
                  <p className="font-bold mt-1 text-[13px]">₹ {product.price}</p>
                  
                  {/* Buttons */}
                  <div className="mt-2 flex flex-col gap-2 mt-auto">
                    <Link to={`/products/${product.id}`} className="block bg-[#1a3d2e] text-white text-[11px] py-2 rounded text-center">View Product</Link>
                    <button onClick={() => handleAddToCart(product)} className="w-full bg-white border border-[#1a3d2e] text-[#1a3d2e] text-[11px] py-2 rounded font-bold hover:bg-[#1a3d2e] hover:text-white transition-all">Add to Cart +</button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#f9faf6] p-6 rounded-xl">
            <h2 className="font-bold">What is {current.title} Ayurvedic Medicine?</h2>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">Our {current.title} products are made with 100% pure herbs, clinically tested and trusted by thousands of customers. Choose Raghaveda for authentic Ayurveda.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Products;