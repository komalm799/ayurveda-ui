export const products = Array.from({ length: 42 }, (_, i) => {
  const baseList = [
    { name: "Ayuvya Lets Gain & i-Gain+ Combo", cat: "Weight Management", price: 1399, oldPrice: 1968, rating: 4.6, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop" },
    { name: "Ayuvya Diabo Plus Shots", cat: "Sugar Management", price: 999, oldPrice: 1199, rating: 4.6, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=500&fit=crop" },
    { name: "Ayuvya Cholest Pro Juice", cat: "Heart Health", price: 749, oldPrice: 899, rating: 4.5, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop" },
    { name: "Ayuvya Liv Cleanse Shots", cat: "Liver Health", price: 1299, oldPrice: 1599, rating: 4.7, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop" },
    { name: "Ayuvya Ashwagandha Capsules", cat: "Daily Ayurveda", price: 399, oldPrice: 599, rating: 4.5, image: "https://images.unsplash.com/photo-1608571423902-eed4a94d8108?w=500&h=500&fit=crop" },
    { name: "Ayuvya Shilajit Gold Resin", cat: "Gym & Fitness", price: 899, oldPrice: 1299, rating: 4.8, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Ayuvya Pyl-Ease Piles Kit", cat: "Piles Care", price: 999, oldPrice: 1299, rating: 4.5, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=500&h=500&fit=crop" },
    { name: "Ayuvya Herbal Hair Oil", cat: "Hair Care", price: 499, oldPrice: 699, rating: 4.7, image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&h=500&fit=crop" },
    { name: "Ayuvya Glo Mask", cat: "Skin Care", price: 499, oldPrice: 699, rating: 4.6, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop" },
    { name: "Ayuvya Gyna Plus Juice", cat: "Women's Health", price: 678, oldPrice: 898, rating: 4.5, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop" },
    // ===== COMBOS ADD KIYE =====
    { name: "Ayuvya Heart + Liver Detox Combo", cat: "Combos", price: 1499, oldPrice: 2498, rating: 4.8, image: "https://images.unsplash.com/photo-1608571423902-eed4a94d8108?w=500&h=500&fit=crop" },
    { name: "Ayuvya Weight & Daily Wellness Combo", cat: "Combos", price: 1799, oldPrice: 2998, rating: 4.7, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop" },
  ];

  const base = baseList[i % baseList.length];

  return {
    id: i + 1,
    name: i < baseList.length ? base.name : `${base.name} - Pack ${i + 1}`,
    category: base.cat,
    slug: base.cat.toLowerCase().replace(/ /g, '-'),
    price: base.price,
    oldPrice: base.oldPrice,
    save: base.oldPrice - base.price,
    rating: base.rating,
    reviews: "2.3K",
    image: base.image,
    images: [
      base.image,
      base.image.replace('w=500', 'w=500&h=500&fit=crop&sat=-100'),
      base.image.replace('w=500', 'w=500&h=500&fit=crop&blur=1'),
      base.image
    ],
    description: `${base.name} - 100% Ayurvedic, Clinically Tested, GMP Certified`,
    tag: "As Seen On Shark Tank"
  };
});
export default products;