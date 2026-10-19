import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Ashwagandha Capsules', category: 'Daily Ayurveda', price: 399, oldPrice: 599, rating: 4.8, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Herbal Wellness Powder', category: 'Daily Ayurveda', price: 499, oldPrice: 699, rating: 4.6, image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Natural Skin Care', category: 'Skin Care', price: 299, oldPrice: 449, rating: 4.7, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Herbal Hair Care', category: 'Hair Care', price: 349, oldPrice: 499, rating: 4.5, image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Herbal Care Essentials', category: 'Herbal Care', price: 449, oldPrice: 649, rating: 4.6, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Daily Wellness Kit', category: 'Wellness', price: 599, oldPrice: 799, rating: 4.9, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80' },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Daily Ayurveda', 'Skin Care', 'Hair Care', 'Herbal Care', 'Wellness'];

  const filteredProducts = products.filter((p) => {
    const cat = selectedCategory === 'All' || p.category === selectedCategory;
    const search = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return cat && search;
  });

  return (
    <main className="bg-[#fffdf8] min-h-screen">
      {/* Hero */}
      <section className="py-[60px] px-[7%] text-center bg-gradient-to-br from-[#f5f3e8] to-[#e7edda]">
        <p className="text-[#70844c] text-[11px] font-bold tracking-[2px]">NATURE • WELLNESS • BALANCE</p>
        <h1 className="text-[34px] md:text-[44px] font-black text-[#254c35] mt-4">Shop All Products</h1>
        <p className="max-w-[650px] mx-auto mt-3 text-[#626c60] text-[15px]">Explore our collection of nature-inspired wellness and self-care products.</p>
      </section>

      <section className="max-w-[1300px] mx-auto px-[7%] py-10">
        {/* Heading + Search */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-6">
          <div>
            <h2 className="text-[22px] font-bold text-[#254c35]">Our Collection</h2>
            <p className="text-[12px] text-[#737b70]">{filteredProducts.length} products found</p>
          </div>
          <input type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search products..."
            className="w-full md:w-[280px] p-3 text-sm border border-[#dce3d5] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#78934d]" />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold border transition ${selectedCategory === cat? 'bg-[#254c35] text-white border-[#254c35]' : 'bg-white text-[#254c35] border-[#dce3d5] hover:bg-[#254c35] hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map(product => {
            const off = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            return (
              <article key={product.id} className="bg-white border border-[#e5e8dc] rounded-xl overflow-hidden hover:shadow-lg transition hover:-translate-y-1">
                <Link to={`/products/${product.id}`} className="relative block h-[190px] md:h-[240px] bg-[#f5f1e6]">
                  <span className="absolute top-3 left-3 bg-[#1a3d2e] text-white text-[10px] font-bold px-2 py-1 rounded">{off}% OFF</span>
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover"
                    onError={(e) => e.target.src = "https://images.unsplash.com/photo-1608571423902-eed4a94d8108?w=500"} />
                </Link>
                <div className="p-4">
                  <p className="text-[11px] text-[#8a9a6a] font-bold">{product.category}</p>
                  <h3 className="font-bold text-[#1a3d2e] text-[14px] mt-1 line-clamp-1">{product.name}</h3>
                  <p className="text-[11px] text-gray-500 mt-1">⭐ {product.rating} / 5</p>
                  <div className="flex gap-2 items-center mt-2">
                    <span className="font-bold text-[#1a3d2e]">₹{product.price}</span>
                    <span className="text-xs line-through text-gray-400">₹{product.oldPrice}</span>
                  </div>
                  <Link to={`/products/${product.id}`} className="block text-center mt-3 w-full bg-[#1a3d2e] text-white py-2.5 rounded-lg text-[12px] font-bold hover:bg-black">View Product →</Link>
                </div>
              </article>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#e5e8dc] rounded-xl mt-6">
            <h3 className="text-lg font-bold text-[#254c35]">No products found</h3>
            <p className="text-sm text-gray-500 mt-1">Try another search or category.</p>
            <button onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
              className="mt-4 px-6 py-2 bg-[#254c35] text-white rounded-md text-sm">Show All Products</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;