import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CollectionDetails from './components/CollectionDetails';
import Products from './pages/Products';
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import toastify styles

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collections/:id" element={<CollectionDetails />} />
        {/* other routes */}
      </Routes>

      {/* ✅ Toast notifications container */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </BrowserRouter>
  );
}

export default App;
