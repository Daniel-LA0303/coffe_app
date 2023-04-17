import React, { useEffect, useState } from 'react'
import useApp from '../hooks/useApp';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
// import { useNavigate } from 'framer';

const EditProduct = () => {
    const {
        editProduct
    } = useApp();

    const params = useParams()
    const route = useNavigate()
    // console.log(params.id);
    
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState(0)
    const [categoriaId, setCategoriaId] = useState("")
    const [imagen, setImg] = useState("")
    const imagePath = `../img/${imagen}.jpg`;
    let productFind
    
    const {
        product,
        products
    } = useApp();

    useEffect(() => {
        setTimeout(() => {
            productFind = products.find((product) => product.id === params.id);
            setId(productFind.id)
            setCategoriaId(productFind.categoriaId)
            setNombre(productFind.nombre)
            setPrecio(productFind.precio)
            setImg(productFind.imagen)
            console.log(productFind);
        }, 500);

    }, [params, products])
    
    const handleClick = () => {
        // console.log(productFind.id)
        // console.log(id, nombre, precio, categoriaId, imagen);
        const ob = {
            nombre,
            precio, 
            categoriaId,
            imagen,
            id
        }
        editProduct(ob)
        toast.success('Product Edit',{
            duration: 700,
        });
        setTimeout(() => {
            route('/products')
        }, 1000);
        
    }
    
  return (
    <div className=' w-10/12 sm:w-6/12 mx-auto my-8'>
        <Toaster 
          position="top-right"
          reverseOrder={false}
        />

        <form 
            // onSubmit={handleSubmit}
            className='p-4 bg-[#313131] text-white'>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="nombre"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    // onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="price">
                    Precio
                </label>
                <input
                className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="precio"
                type="number"
                placeholder="Ingrese el precio del producto"
                value={precio}
                onChange={(e) => setPrecio(parseFloat(e.target.value))}
                // onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="category">
                    Categoría
                </label>
                <select
                    className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    name="category"
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    // onChange={handleInputChange}
                >
                    <option value="">Seleccione una categoría</option>
                    <option value="cafe">Coffe</option>
                    <option value="donas">Donuts</option>
                    <option value="galletas">Biscuits</option>
                    <option value="hamburguesas">Burgers</option>
                    <option value="pasteles">Cakes</option>
                    <option value="pizzas">Pizzas</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="image">
                    Imagen
                </label>
                <div className='flex justify-center'>
                    <img
                        src={imagePath}
                        className=" w-40  lg:text-xs xl:text-xl mt-0 shadow-2xl rounded-lg"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '
                    type="button"
                    onClick={() => handleClick()}
                >Edit Product</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct