import React, { useEffect, useState } from 'react'
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CardProduct from '../Cards/CardProduct';
import useApp from '../../hooks/useApp';

import coffeImg from '../../assets/img/icono_cafe.svg';
import donutImg from '../../assets/img/icono_dona.svg';
import biscuitImg from '../../assets/img/icono_galletas.svg';
import burgerImg from '../../assets/img/icono_hamburguesa.svg';
import pizzaImg from '../../assets/img/icono_pizza.svg';
import cakeImg from '../../assets/img/icono_pastel.svg';
import TableProducts from '../Table/TableProducts';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';




const TabsHome = ({TabsInHome}) => {

    let isTabletMid = useMediaQuery({ query: "(max-width: 760px)" });

    const {
        coffe,
        burgers,
        cakes,
        pizzas,
        donuts,
        biscuits
    } = useApp();

    const [activeTab, setActiveTab] = useState("1");
    const [tabM, setTabM] = useState(false);

    useEffect(() => {
        if (isTabletMid) {
            setTabM(true)
        } else {
            setTabM(false)
        }
      }, [isTabletMid]);

    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
    };
  

  return (
    <div className="flex flex-row flex-1">
          <aside className=" w-24 h-screen  sticky top-0 bg-[#313131] border-l border-[#525252]">
            <TabContext value={activeTab}>
              <TabList 
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#408b8e",
                   
                  },
                }}
                aria-label="Tabs" 
                onChange={handleTabChange}
                orientation="vertical"
                sx={{
                  "& .Mui-selected": {
                    color: "#408b8e",   
                  }
                }}
                textColor="#408b8e"
                classes={{indicator : "#408b8e"}}
              >
                <Tab label='Coffe' value='1' icon={<CoffeIcon />}/> 
                <Tab label='Donuts' value='2' icon={<DonutIcon />}/> 
                <Tab label='Biscuits' value='3' icon={<BiscuitIcon />} /> 
                <Tab label='Burgers' value='4' icon={<BurgerIcon />} /> 
                <Tab label='Cakes' value='5' icon={<CakeIcon />} /> 
                <Tab label='Pizzas' value='6' icon={<PizzaIcon />} /> 
              </TabList>
            </TabContext>
          </aside>
          <div className="w-full ml-auto flex-1 ">
            <div className='flex justify-between items-center m-5'>
                <h1 className=" ">{TabsInHome ? 'Products' : 'All Products'}</h1>
                <div>
                    <button className='bg-[#0D7377] w-full px-5 h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '>
                        New Product
                        <FontAwesomeIcon icon={faPlusCircle} className='ml-2' />
                    </button>
                </div>
            </div>
            
            <TabContext value={activeTab}>
                <TabPanel value="1">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {coffe.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={coffe}/>
                            )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {donuts.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={donuts}/>
                            )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {biscuits.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={biscuits}/>
                            )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="4">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {burgers.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={burgers}/>
                            )}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="5">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {cakes.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={cakes}/>
                            )}
                        </div>
                    </div>
                </TabPanel>              
                <TabPanel value="6">
                    <div className=" w-full h-auto md:h-[94vh] md:overflow-y-auto contenedor  ">
                        <div className={`${TabsInHome ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ' grid-cols-1'} grid  gap-4`}>
                            {TabsInHome ? (
                                <>
                                    {pizzas.map(product => (
                                        <CardProduct 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                <TableProducts data={coffe}/>
                            )}
                        </div>
                    </div>
                </TabPanel>

            </TabContext>
          </div>
        </div>
  )
}

const CoffeIcon = () => (
    // <div>
        <img src={coffeImg} width={35} className='mb-2'  alt="Descripción de la imagen" />
    
)
const DonutIcon = () => (
    
        <img src={donutImg} width={35} className='mb-2'   alt="Descripción de la imagen" />
    
)
const BiscuitIcon = () => (
    
        <img src={biscuitImg} width={35} className='mb-2'   alt="Descripción de la imagen" />
    
)
const BurgerIcon = () => (
    
        <img src={burgerImg} width={35} className='mb-2'   alt="Descripción de la imagen" />
    
)
const CakeIcon = () => (
    
        <img src={cakeImg} width={35} className='mb-2'   alt="Descripción de la imagen" />
    
)
const PizzaIcon = () => (
    
        <img src={pizzaImg} width={35} className='mb-2'   alt="Descripción de la imagen" />
    
)


export default TabsHome