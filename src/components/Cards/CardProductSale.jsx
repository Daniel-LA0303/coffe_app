import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const CardProductSale = ({product}) => {
    
    const {precio , imagen, nombre} = product
    const imagePath = `./img/${imagen}.jpg`;
  return (
        <div className="bg-[#525252] py-5 px-0 lg:px-5 rounded-xl flex flex-col items-center gap-2 my-5 text-center text-gray-300">

            <div className='flex items-center mb-3 justify-between w-full'>
                <div className=''>
                    <img
                        src={imagePath}
                        className=" w-20 h-20 mt-0 shadow-2xl rounded-lg"
                    />
                </div>
                {/* <div> */}
                    <p className=" text-sm xl:text-xl w-40">{nombre}</p>
                    <span className="text-gray-400">${precio}</span>
                {/* </div> */}

            </div>
            <div className='w-full flex justify-between'>
                <div>
                    <input 
                        type="text" 
                        className='bg-[#313131] w-full h-10 rounded-lg mx-0.5 px-2'
                        placeholder='Note'
                    />
                </div>
                <button className='border border-red-500 w-10 h-10 rounded-lg mx-0.5 text-red-500 hover:text-white hover:bg-red-500 transition duration-300 '>
                    <FontAwesomeIcon icon={faTrash} className=' 0'/>
                </button>
            </div>
            <div className="flex flex-row h-10 w-full rounded-lg  bg-transparent mt-1">
                    <button 
                        className="bg-[#0D7377] hover:bg-[#408b8e] transition-all duration-300 h-full w-20 rounded-l cursor-pointer outline-none"
                        // onClick={() => {
                        //       if (cantidad < 1) return;
                        //       setCantidad(cantidad - 1);
                        //     }}
                    >
                        <span className="m-auto text-base font-thin">
                            <FontAwesomeIcon icon={faMinus} />
                        </span>
                    </button>
                    <label className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">40</label>
                    <button 
                        className="bg-[#0D7377] hover:bg-[#408b8e] transition-all duration-300 h-full w-20 rounded-r cursor-pointer"
                        // onClick={() => setCantidad(cantidad+1)}
                    >
                        <span className="m-auto text-base font-thin">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </button>
                </div>

            
        </div>
  )
}

export default CardProductSale