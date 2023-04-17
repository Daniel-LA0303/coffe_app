import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { fakeData } from "../helpers/fakeData";



const AppContext = createContext();

const AppProvider = ({children}) => {

    //state products
    const [products, setProdutcs] = useState([]);

    const [coffe, setCoffe] = useState([])
    const [burgers, setBurgers] = useState([])
    const [cakes, setCakes] = useState([])
    const [pizzas, setPizzas] = useState([])
    const [donuts, setDonuts] = useState([])
    const [biscuits, setBiscuits] = useState([])

    const [openModal, setOpenModal] = useState(false)

    //edit state
    const [product, setProduct] = useState({}) 

    //state new order
    const [orders, setOrders] = useState(fakeData.sales);
    const [note, setNote] = useState("")
    const [productsOrder, setProductsOrder] = useState([])
    const [totalOrder, setTotalOrder] = useState(0);

    //state total global
    const [total, setTotal] = useState(0)

    // const

    useEffect(() => {
        const getProducts = async () => {
            const data = await axios.get('https://daniel-la0303.github.io/json-restaurante/db.json')
            setProdutcs(data.data.productos); 
        }
        getProducts();
    }, []);

    useEffect(() => {
        setCoffe(products.filter(producto => producto.categoriaId === "cafe"));
        setDonuts(products.filter(producto => producto.categoriaId === "donas"));
        setBiscuits(products.filter(producto => producto.categoriaId === "galletas"));
        setBurgers(products.filter(producto => producto.categoriaId === "hamburguesas"));
        setCakes(products.filter(producto => producto.categoriaId === "pasteles"));
        setPizzas(products.filter(producto => producto.categoriaId === "pizzas"));
      }, [products]);

      const deleteProductOrder = (id) => {
        const newProductsOrder = productsOrder.filter( ped => ped.id !== id );
        setProductsOrder(newProductsOrder)
    }

      useEffect(() => {
        const newTotalOrder = productsOrder.reduce((total, product) => {
          return total + (product.amount * product.precio);
        }, 0);
        setTotalOrder(newTotalOrder);
      }, [productsOrder, deleteProductOrder]);

      useEffect(() => {
        const newTotal = orders.reduce((total, order) => {
            return total + order.totalOrder
        }, 0);
        setTotal(newTotal)
      }, [orders])
      

    // console.log(pizzas);

    //functions
    const addProductOrder = (newProductAdd) => {
        // newProductAdd.amount = 1
        // setProductsOrder([...productsOrder, newProductAdd])
        const index = productsOrder.findIndex((product) => product.id === newProductAdd.id);

        if (index >= 0) {
          const updatedProducts = [...productsOrder];
          updatedProducts[index].amount += 1;
          setProductsOrder(updatedProducts);
        } else {
          newProductAdd.amount = 1;
          setProductsOrder([...productsOrder, newProductAdd]);
        }
    }

    const newOrder = () => {
        const newOrder = {
            id: uuidv4(),
            note: note,
            productsOrder: productsOrder,
            totalOrder: totalOrder,
        };
        console.log(newOrder);
        setOrders([...orders, newOrder]);
        setNote("")
        setProductsOrder([])
        setTotalOrder(0)

    }

    const deleteOrder = (id) => {
        const newOrder = orders.filter( ord => ord.id !== id );
        setOrders(newOrder)
    }

    const deleteProduct = (id) => {
        // console.log(id);
        // const newProducts = products.filter(pro => pro.id !== id)
        const newProducts = products.filter(pro => pro.id.toString() !== id.toString());

        // console.log(newProducts);
        setProdutcs(newProducts)
    }



    return(
        <AppContext.Provider
            value={{
                products,
                coffe,
                burgers,
                cakes,
                pizzas,
                donuts,
                biscuits,

                openModal,
                setOpenModal,

                product,
                setProduct,

                total,

                //new order 
                setProductsOrder,
                productsOrder,
                totalOrder,
                setNote,
                note,
                orders,

                //functions
                addProductOrder,
                deleteProductOrder,
                newOrder,
                deleteOrder, 
                deleteProduct
            }}
        >
            {children}
        </AppContext.Provider>
    ) 
}

export {AppProvider}
export default AppContext