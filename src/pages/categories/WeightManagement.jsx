import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx';

export default function WeightManagement() {
  const filtered = products.filter(p => p.category === "Weight Management");
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Weight Management</p>
      <h1 className="text-[22px] font-bold mt-2">Weight Management</h1>
      <p className="text-[12px] text-gray-600 mt-2">Healthy weight gain with Ayurveda.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </Layout>
  );
}