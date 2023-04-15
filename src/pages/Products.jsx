import CardProductSale from "../components/Cards/CardProductSale";
import TabsHome from "../components/Tabs/TabsHome";
import useApp from "../hooks/useApp";



const Products = () => {

  const {coffe} = useApp();


  return (
    <div className="flex text-white">
      <div className=" w-full  h-auto md:h-screen md:overflow-y-auto contenedor">
        <TabsHome TabsInHome={false}/>
      </div>
    </div>
  );
};

export default Products;
