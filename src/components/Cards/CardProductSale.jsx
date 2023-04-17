import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import useApp from '../../hooks/useApp';
import toast, { Toaster } from 'react-hot-toast';

const CardProductSale = ({product}) => {
    
    const {precio , imagen, nombre, amount} = product
    const imagePath = `./img/${imagen}.jpg`;

    const {
        setProductsOrder,
        productsOrder,
        deleteProductOrder,
      } = useApp();

    const handleDecrement = () => {
        const updatedProducts = productsOrder.map(p => {
          if (p.id === product.id) {
            return {
              ...p,
              amount: Math.max(1, p.amount - 1) // Asegurarse de que no haya cantidades negativas
            };
          }
          return p;
        });
        setProductsOrder(updatedProducts);
      };

      const handleIncrement = () => {
        const updatedProducts = productsOrder.map(p => {
          if (p.id === product.id) {
            return {
              ...p,
              amount: p.amount + 1
            };
          }
          return p;
        });
        setProductsOrder(updatedProducts);
      };


        const handleClickDelete = (id) => {
            toast.error('Product Deleted',{
                duration: 1000,
            });
            deleteProductOrder(id);
        }
    
  return (
        <div className="bg-[#525252] py-5 px-0 lg:px-5 rounded-xl flex flex-col items-center gap-2 my-5 text-center text-gray-300">
            <div className='flex items-center mb-3 justify-between w-full'>
                <div className=''>
                    <img
                        src={imagePath}
                        className="  w-20 h-20 lg:w-10 lg:h-10 xl:w-20 xl:h-20 lg:text-xs xl:text-xl mt-0 shadow-2xl rounded-lg"
                    />
                </div>
                    <p className=" lg:text-xs xl:text-xl w-40">{nombre}</p>
                    <span className=" text-white lg:text-xs xl:text-xl">${precio}</span>


            </div>
            <div className='w-full flex justify-between'>
                 <div className="flex flex-row h-10 w-10/12  lg:w-8/12 rounded-lg  bg-transparent ">
                    <button 
                        className="bg-[#0D7377] hover:bg-[#408b8e] transition-all duration-300 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={handleDecrement}
                    >
                        <span className="m-auto text-base font-thin">
                            <FontAwesomeIcon icon={faMinus} />
                        </span>
                    </button>
                    <label className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">{amount}</label>
                    <button 
                        className="bg-[#0D7377] hover:bg-[#408b8e] transition-all duration-300 h-full w-20 rounded-r cursor-pointer"
                        onClick={handleIncrement}
                    >
                        <span className="m-auto text-base font-thin">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </button>
                </div>

                <button
                    onClick={() => handleClickDelete(product.id)} 
                    className='border border-red-500 w-1/12 lg:w-2/12 h-10 rounded-lg mx-0.5 text-red-500 hover:text-white hover:bg-red-500 transition duration-300 '>
                    <FontAwesomeIcon icon={faTrash} className=' 0'/>
                </button>
            </div>
        
            
        </div>
  )
}

export default CardProductSale