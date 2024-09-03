import './App.css';
import {   Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Shop from './pages/Shop';
import Prescription from './pages/Prescription';
import Therapy from './pages/Therapy';
import Blog from './pages/Blog';



function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />

      </Routes>

  );
}

export default App;
