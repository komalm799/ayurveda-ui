import { products } from '../../data/product.js';
import Layout from './Layout.jsx';
import ProductCard from '../../components/ProductCard.jsx';

export default function WomensHealth() {
  const filtered = products.filter(p => p.category === "Women's Health" || p.category === "Womens Health");
  
  return (
    <Layout>
      <p className="text-[11px] text-gray-500">Home / Women's Health</p>
      <h1 className="text-[22px] font-bold mt-2">Women's Health</h1>
      <p className="text-[12px] text-gray-600 mt-2">Shatavari & Lodhra based products for women's wellness.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {filtered.length > 0 ? filtered.map(p => (
          <ProductCard key={p.id} p={p} />
        )) : (
          <p className="col-span-4 text-[13px] text-gray-500 p-10 text-center">No products in Women's Health yet. Add category in product.js</p>
        )}
      </div>
    </Layout>
  );
}