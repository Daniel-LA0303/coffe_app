import React, { useEffect, useState } from 'react'
import useApp from '../hooks/useApp';
import { useParams } from 'react-router-dom';

const EditProduct = () => {

    const params = useParams()
    // console.log(params.id);

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState(0)
    const [categoriaId, setCategoriaId] = useState("")
    
    const {
        product,
        products
    } = useApp();

    useEffect(() => {
        setTimeout(() => {
            const productFind = products.find((product) => product.id === params.id);

            setCategoriaId(productFind.categoriaId)
            setNombre(productFind.nombre)
            setPrecio(productFind.precio)
        }, 1000);

    }, [params, products])
    
    
  return (
    <div className=' w-10/12 sm:w-6/12 mx-auto my-8'>

        <form className='p-4 bg-[#313131] text-white'>
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
                    <option value="cafe">Café</option>
                    <option value="postre">Postre</option>
                    <option value="comida">Comida</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="image">
                    Imagen
                </label>
                <input
                    className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    name="image"
                    type="file"
                    // onChange={handleInputChange}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '
                    type="submit"
                >Edit Product</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct