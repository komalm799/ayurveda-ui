import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx';

export default function HeartHealth() {
  const filtered = products.filter(p => p.category === "Heart Health");
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Heart Health</p>
      <h1 className="text-[22px] font-bold mt-2">Heart Health</h1>
      <p className="text-[12px] text-gray-600 mt-2">Arjuna, Ashwagandha & Guggul for cholesterol & BP.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </Layout>
  );
}