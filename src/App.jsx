import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Sales from "./pages/Sales";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
  </RootLayout>
  )
}

export default App
