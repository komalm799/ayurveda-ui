import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/WishList';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Checkouts from './pages/Checkouts';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';

// TUMHARI NAYI BANAYI HUI 9 FILES
import AllProducts from './pages/categories/AllProducts';
import HeartHealth from './pages/categories/HeartHealth';
import LiverHealth from './pages/categories/LiverHealth';
import DailyAyurveda from './pages/categories/DailyAyurveda';
import GymFitness from './pages/categories/GymFitness';
import PilesCare from './pages/categories/PilesCare';
import WeightManagement from './pages/categories/WeightManagement';
import WomensHealth from './pages/categories/WomensHealth';
import Combos from './pages/categories/Combos';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* NEW CATEGORY STRUCTURE - TUMHARE PAPER JAISE */}
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/heart-health" element={<HeartHealth />} />
        <Route path="/products/liver-health" element={<LiverHealth />} />
        <Route path="/products/daily-ayurveda" element={<DailyAyurveda />} />
        <Route path="/products/gym-fitness" element={<GymFitness />} />
        <Route path="/products/piles-care" element={<PilesCare />} />
        <Route path="/products/weight-management" element={<WeightManagement />} />
        <Route path="/products/womens-health" element={<WomensHealth />} />
        <Route path="/products/combos" element={<Combos />} />
        
        {/* PRODUCT DETAILS - FINAL */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <main className="page-content p-10">
              <h2>404 - Page Not Found</h2>
              <Link to="/" className="underline">Return Home</Link>
            </main>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;