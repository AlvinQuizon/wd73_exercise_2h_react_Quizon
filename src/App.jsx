import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Shop } from "./pages/shop/Shop"
import { Cart } from './pages/cart/Cart'
import { Footer } from './components/Footer.jsx'
import { MyProvider } from "./context/MyContext.jsx"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/shop" element={
                <Shop />
            } />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MyProvider>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
