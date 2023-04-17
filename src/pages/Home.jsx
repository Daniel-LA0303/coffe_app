import React from 'react'
import CardProductSale from "../components/Cards/CardProductSale";
import useApp from "../hooks/useApp";
import TabsHome from "../components/Tabs/TabsHome";
import ContentAside from '../components/ContentAside/ContentAside';
import { Toaster } from 'react-hot-toast';



const Home = () => {

  const {
    path
} = useApp();

  // const {coffe} = useApp();


  // console.log(produtcs);

  return (
    <div className="flex text-white"  >
        <Toaster 
          position="top-right"
          reverseOrder={false}
        />
      <div className=" w-full lg:w-9/12 xl:w-9/12 h-auto md:h-screen md:overflow-y-auto contenedor">
        <TabsHome TabsInHome={true}/>
      </div>
      <aside className="hidden  lg:w-3/12 lg:flex flex-col justify-between  xl:w-3/12  h-screen sticky top-0 p-3">
        <ContentAside aside={true}/>
      </aside>
    </div>
    )
};

export default Home;
