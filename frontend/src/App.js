import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './pages/Container';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='container' element={<Container />}>
          <Route path='about' element={<About />} />
          <Route path ='shop' element={<Shop />} />
          <Route path='shop/:id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
