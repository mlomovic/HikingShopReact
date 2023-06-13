// Components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Single from './pages/Single';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';



const App = () => {

  return (

    <div>
      <ProductsProvider>
        <CartProvider>

          <Topbar />
          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/single/:id' element={<Single />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/*' element={<NotFound />} />

          </Routes>

          <Footer />

        </CartProvider>
      </ProductsProvider>

    </div>
  );
}

export default App;
