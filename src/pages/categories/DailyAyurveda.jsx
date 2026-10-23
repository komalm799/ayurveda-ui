import { Link } from 'react-router-dom';
import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx';

export default function DailyAyurveda() {
  const filtered = products.filter(p => p.category === "Daily Ayurveda");
  
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Daily Ayurveda</p>
      <h1 className="text-[22px] font-bold mt-2">Daily Ayurveda</h1>
      <p className="text-[12px] text-gray-600 mt-2 max-w-[900px] leading-[18px]">
        Ashwagandha, Shilajit for daily immunity. Our daily Ayurvedic essentials to boost energy, immunity and overall wellness naturally.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </Layout>
  );
}