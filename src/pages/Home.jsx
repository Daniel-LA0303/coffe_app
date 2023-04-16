import React from 'react'
import CardProductSale from "../components/Cards/CardProductSale";
import useApp from "../hooks/useApp";
import TabsHome from "../components/Tabs/TabsHome";
import ContentAside from '../components/ContentAside/ContentAside';



const Home = () => {

  // const {coffe} = useApp();


  // console.log(produtcs);

  return (
    <div className="flex text-white">
      <div className=" w-full lg:w-8/12 xl:w-4/6 h-auto md:h-screen md:overflow-y-auto contenedor">
        <TabsHome TabsInHome={true}/>
      </div>
      <aside className="hidden  w-4/12 lg:flex flex-col justify-between  lg:w-2/6 bg-[#313131] h-screen sticky top-0 p-3">
        <ContentAside aside={true}/>
      </aside>
    </div>
    )
};

export default Home;
