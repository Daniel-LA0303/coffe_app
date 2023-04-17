import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Sales from "./pages/Sales";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  return (
    
      <Routes>
        <Route path="/" element={<RootLayout />} >
            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
        </Route>
        

        <Route path="/login" element={<Login />} />
      </Routes>

  )
}

export default App
