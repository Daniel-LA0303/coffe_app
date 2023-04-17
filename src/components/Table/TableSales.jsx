import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import useApp from '../../hooks/useApp'
import Swal from 'sweetalert2'

const TableSales = () => {

  const {
    orders,
    deleteOrder
} = useApp();

  const deleteSale = (id) => {
    
    Swal.fire({
      title: 'Are you sure you want to remove this Sales?',
      text: "Deleted sales cannot be recovered",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result) => {
      if (result.value) {
          //consulta a la api
          deleteOrder(id)       
      }
    })
  }

  return (
    <TableContainer component={Paper} className=' overflow-x-scroll contenedor'>
    <Table arial-label='table' 
      sx={{ backgroundColor: '#313131', }}

    >
      <TableHead

        sx={{ backgroundColor: '#0D7377'}}
      >
        <TableRow>
          <TableCell sx={{ color: 'white' }}>Id</TableCell>
          <TableCell sx={{ color: 'white' }}>Note</TableCell>
          <TableCell sx={{ color: 'white' }}>Total</TableCell>
          <TableCell sx={{ color: 'white' }}>Products</TableCell>
          <TableCell sx={{ color: 'white' }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          [...orders].reverse().map(row => (
            <TableRow 
              key={row.id}
              sx={{':last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell sx={{ color: 'white' }}>{row.id.substring(0, 6)}</TableCell>
              <TableCell sx={{ color: 'white' }}>{row.note}</TableCell>
              <TableCell sx={{ color: 'white' }}>$ {row.totalOrder.toFixed(2)}</TableCell>
              <TableCell sx={{ color: 'white' }}>{row.productsOrder.length}</TableCell>
              <TableCell>
                <div className='flex justify-between'>
                  <button
                    onClick={() => deleteSale(row.id)} 
                    className='border border-red-500 w-7 h-7 rounded-lg mx-0.5 text-red-500 hover:text-white hover:bg-red-500 transition duration-300'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableSales