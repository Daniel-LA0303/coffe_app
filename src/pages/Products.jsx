import { useEffect } from "react";
import CardProductSale from "../components/Cards/CardProductSale";
import TabsHome from "../components/Tabs/TabsHome";
import useApp from "../hooks/useApp";
import { useNavigate } from "react-router-dom";



const Products = () => {
  const route = useNavigate()

  const {coffe, user} = useApp();

  useEffect(() => {
    if(!user.name){
      route('/login')
    }
  }, [])


  return (
    <div className="flex w-full text-white">
      <div className=" w-full  h-auto md:h-screen md:overflow-y-auto contenedor">
        <TabsHome TabsInHome={false}/>
      </div>
    </div>
  );
};

export default Products;
