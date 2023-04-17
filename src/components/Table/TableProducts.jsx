import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const TableProducts = ({data}) => {

  const route = useNavigate();

  const {
    setProduct,
    deleteProduct
  } = useApp();

  const handleClick = (id) => {
    // setProduct()
    const productFind = data.find((product) => product.id === id);
    setProduct(productFind)
    setTimeout(() => {
      route(`/edit-product/${id}`)
    }, 500);
  }

  const deletePro = (id) => {
    Swal.fire({
      title: 'Are you sure you want to remove this Product?',
      text: "Deleted products cannot be recovered",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result) => {
      if (result.value) {
          //consulta a la api
          deleteProduct(id)          
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
            <TableCell sx={{ color: 'white' }}>Name</TableCell>
            <TableCell sx={{ color: 'white' }}>Price</TableCell>
            <TableCell sx={{ color: 'white' }}>Categorie</TableCell>
            <TableCell sx={{ color: 'white' }}>Image</TableCell>
            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            [...data].reverse().map(row => (
              <TableRow 
                key={row.id}
                sx={{':last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell sx={{ color: 'white' }} >{row.id.substring(0, 6)}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.nombre}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.precio}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.categoriaId}</TableCell>
                <TableCell>
                  <img
                    src={`./img/${row.imagen}.jpg`}
                    width={30}
                    className=""
                  />
                </TableCell>
                <TableCell>
                  <div className='flex justify-between'>
                    <button 
                      onClick={() => deletePro(row.id)}
                      className='border border-red-500 w-7 h-7 rounded-lg mx-0.5 text-red-500 hover:text-white hover:bg-red-500 transition duration-300'>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button 
                      onClick={() => handleClick(row.id)}
                      className='border border-green-500 w-7 h-7 rounded-lg mx-0.5 text-green-500 hover:text-white hover:bg-green-500 transition duration-300'
                    >
                      <FontAwesomeIcon icon={faPen} />
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

export default TableProducts