import { Link } from 'react-router-dom';
import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx';

export default function Combos() {
  const filtered = products.filter(p => p.category === "Combos" || p.category === "Combo");
  
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Combos</p>
      <h1 className="text-[22px] font-bold mt-2">Combos</h1>
      <p className="text-[12px] text-gray-600 mt-2 max-w-[900px] leading-[18px]">
        Best value Ayurvedic combos at special prices. Our carefully curated combos bring together our most effective Ayurvedic formulations for complete wellness.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.length ? filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        )) : (
          <p className="col-span-4 text-[13px] text-gray-500 py-10 text-center">No combo products yet. Add category: "Combos" in product.js</p>
        )}
      </div>
    </Layout>
  );
}