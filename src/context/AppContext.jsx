import axios from "axios";
import { createContext, useEffect, useState } from "react";


const AppContext = createContext();

const AppProvider = ({children}) => {

    const [products, setProdutcs] = useState([]);

    const [coffe, setCoffe] = useState([])
    const [burgers, setBurgers] = useState([])
    const [cakes, setCakes] = useState([])
    const [pizzas, setPizzas] = useState([])
    const [donuts, setDonuts] = useState([])
    const [biscuits, setBiscuits] = useState([])

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

    // console.log(produtcs);

    return(
        <AppContext.Provider
            value={{
                // produtcs
                coffe,
                burgers,
                cakes,
                pizzas,
                donuts,
                biscuits
            }}
        >
            {children}
        </AppContext.Provider>
    ) 
}

export {AppProvider}
export default AppContext