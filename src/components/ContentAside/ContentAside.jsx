import React from 'react'
import CardProductSale from '../Cards/CardProductSale'
import useApp from '../../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const ContentAside = ({aside}) => {

  const isSmallScreen = useMediaQuery('(max-width:768px)');

    const {
        productsOrder,
        openModal,
        setOpenModal,
        totalOrder,
        setNote,
        newOrder
    } = useApp();

    const route = useNavigate()

    const handleClick = () => {
        if(!aside){
            setOpenModal(false)
        }
        newOrder();
        route('/sales')
    }

  return (
    <div className=' h-full'>

        {isSmallScreen && (
          <div 
            className=' absolute top-0 right-5 text-white text-2xl'
            onClick={() => handleClick()}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
        )}

        <h1 className=' text-white'>New Order</h1>
        {productsOrder.length == 0 ? (
          <p className='top-20 absolute text-white'>There are no products yet</p>
        ) : (
            <>
              <div className={`${aside ? ' h-4/6' : 'h-full'} contenedor  mt-5 overflow-y-auto`}>
                {[...productsOrder].reverse().map(product => (
                    <CardProductSale 
                      key={product.id}
                      product={product}
                    />
                  ))}
              </div>
              <div className={`h-1/6 mt-1 w-full text-white`}>
                <h3 className="my-1">Total: ${totalOrder.toFixed(2)}</h3>
                <div className='mb-1'>
                          <input 
                              type="text" 
                              className={`${aside ? 'bg-[#525252]' : 'bg-[#313131]'} w-full h-10 rounded-lg px-2`}
                              placeholder='Note'
                              onChange={(e) => setNote(e.target.value)}
                          />
                      </div>
                <button 
                  onClick={() => handleClick()}
                  className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '>Add </button>
              </div>
            </>
        )}
        
    </div>
  )
}

export default ContentAside