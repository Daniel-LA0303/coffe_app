import React from 'react'
import CardProductSale from '../Cards/CardProductSale'
import useApp from '../../hooks/useApp';

const ContentAside = ({aside}) => {

    const {
        coffe,
        openModal,
        setOpenModal
    } = useApp();

    const handleClick = () => {
        if(!aside){
            setOpenModal(false)
        }
        console.log('click');
    }

  return (
    <>
        <h1 className=' text-white'>New Order</h1>
        <div className={`${aside ? 'h-4/6' : 'h-full'} contenedor  mt-5 overflow-y-auto`}>
          {coffe.map(product => (
              <CardProductSale 
                key={product.id}
                product={product}
              />
            ))}
        </div>
        <div className={`${aside && 'bg-[#313131]'} h-1/6 mt-5 w-full text-white`}>
          <h3 className="my-5">Total: $500.30</h3>
          <button 
            onClick={() => handleClick()}
            className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '>Add </button>
        </div>
    </>
  )
}

export default ContentAside