import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../data/categories.js';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="bg-[#fffcf0] min-h-screen">
      <div className="max-w-[1350px] mx-auto flex">
        <div className="hidden md:block w-[220px] shrink-0 p-6">
          <p className="text-[11px] tracking-[2px] text-gray-400 font-bold mb-4">CATEGORIES</p>
          <div className="space-y-1">
            {categories.map(cat => (
              <Link key={cat.path} to={cat.path} className={`block text-[13px] py-2.5 px-3 rounded mb-1 ${pathname===cat.path ? 'bg-[#fff3e0] text-[#b85c00] font-bold' : 'text-[#333] hover:bg-gray-100'}`}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white md:border-l">
          <div className="p-5 md:p-7">{children}</div>
        </div>
      </div>
    </div>
  );
}