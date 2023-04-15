import React from 'react'
// import logo from '../../assets/img/'

const CardProduct = ({product}) => {

    const {precio , imagen, nombre} = product
    const imagePath = `src/assets/img/${imagen}.jpg`;

  return (
    <div className="bg-[#313131] p-8 rounded-xl flex flex-col items-center gap-2 mt-12 mb-10 text-center text-gray-300">

        <img
            src={imagePath}
            className="w-full block object-cover -mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl">{nombre}</p>
        <span className="text-gray-400">${precio}</span>
        <button className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '>Add</button>
    </div>
  )
}

export default CardProduct