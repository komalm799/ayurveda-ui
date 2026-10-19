
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/WishList';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="app">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />

        <Route
          path="*"
          element={
            <main className="page-content">
              <h2>404 - Page Not Found</h2>
              <Link to="/">Return Home</Link>
            </main>
          }
        />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;