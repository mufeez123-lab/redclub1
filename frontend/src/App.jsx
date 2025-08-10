import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CollectionDetails from './components/CollectionDetails'
import Products from './pages/Products';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collections/:id" element={<CollectionDetails />} />

        {/* other routes */}
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
