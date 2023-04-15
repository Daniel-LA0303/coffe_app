import React from 'react'
import CardProductSale from "../components/Cards/CardProductSale";
import useApp from "../hooks/useApp";
import TabsHome from "../components/Tabs/TabsHome";



const Home = () => {

  const {coffe} = useApp();


  // console.log(produtcs);

  return (
    <div className="flex text-white">
      <div className=" w-full lg:w-8/12 xl:w-4/6 h-auto md:h-screen md:overflow-y-auto contenedor">
        <TabsHome TabsInHome={true}/>
      </div>
      <aside className="hidden  w-4/12 lg:flex flex-col justify-between  lg:w-2/6 bg-[#313131] h-screen sticky top-0 p-3">
        <h1>New Order</h1>
        <div className="contenedor h-4/6 mt-5 md:overflow-y-auto">
          {coffe.map(product => (
              <CardProductSale 
                key={product.id}
                product={product}
              />
            ))}
        </div>
        <div className="h-1/6 mt-5 w-full bg-[#313131]">
          <h3 className="my-5">Total: $500.30</h3>
          <button className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '>Add </button>
        </div>
      </aside>
    </div>
    )
};

export default Home;
