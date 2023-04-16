import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { fakeData } from '../../helpers/fakeData'

const TableSales = () => {

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
          <TableCell sx={{ color: 'white' }}>Name</TableCell>
          <TableCell sx={{ color: 'white' }}>Total</TableCell>
          <TableCell sx={{ color: 'white' }}>Products</TableCell>
          <TableCell sx={{ color: 'white' }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          fakeData.sales.map(row => (
            <TableRow 
              key={row.id}
              sx={{':last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
              <TableCell sx={{ color: 'white' }}>{row.name}</TableCell>
              <TableCell sx={{ color: 'white' }}>$ {row.total}</TableCell>
              <TableCell sx={{ color: 'white' }}>{row.products}</TableCell>
              <TableCell>
                <div className='flex justify-between'>
                  <button className='border border-red-500 w-7 h-7 rounded-lg mx-0.5 text-red-500 hover:text-white hover:bg-red-500 transition duration-300'>
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