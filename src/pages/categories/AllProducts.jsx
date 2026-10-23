import { useState } from 'react';
import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx'; // <-- Ye line add ki

export default function AllProducts() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / All Products</p>
      <h1 className="text-[22px] font-bold mt-2">Ayurvedic Products</h1>
      <p className="text-[12px] text-gray-600 mt-1 max-w-[900px] leading-[18px]">
        Discover Ayuvya, your Gateway to Natural Wellness. Our carefully selected range of Ayurvedic health supplements and herbal health care products, crafted by expert vaidyas.
        <button onClick={() => setShowMore(!showMore)} className="text-[#3a6ea5] font-bold ml-1">
          {showMore ? " Show Less" : " Learn More on Ayurvedic Products..."}
        </button>
      </p>

      {/* ===== CARD - AB EK JAGAH SE AYEGA ===== */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {products.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {/* Niche ka pura text tumhara same rahega */}
      <div className="mt-12 border-t border-[#ece6d5] pt-10">
        <div className="max-w-[950px] mx-auto space-y-8">
          <div>
            <h2 className="text-[20px] font-bold text-[#111]">Understanding Ayurvedic Medicine</h2>
            <p className="text-[12.5px] text-gray-600 mt-3 leading-[20px]">
              Ayurvedic medicine, with its roots in ancient India, is more than just a method of treating illness it's a way of life...
            </p>
          </div>
          {/* ... baaki tumhara Benefits, Integrating, FAQs wala pura text same ... */}
        </div>
      </div>
    </Layout>
  );
}