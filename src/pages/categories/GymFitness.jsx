import { Link } from 'react-router-dom';
import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx'; 

export default function GymFitness() {
  const filtered = products.filter(p => p.category === "Gym & Fitness");
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Gym & Fitness</p>
      <h1 className="text-[22px] font-bold mt-2">Gym & Fitness</h1>
      <p className="text-[12px] text-gray-600 mt-2">Shilajit, Musli for strength & stamina.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </Layout>
  );
}