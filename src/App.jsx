import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Shop } from "./pages/shop/Shop"
import { Cart } from './pages/cart/Cart'
import { Footer } from './components/Footer.jsx'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
