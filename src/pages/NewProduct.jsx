import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import useApp from '../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const NewProduct = () => {
    
    const route = useNavigate()

    const {
        createProduct
    } = useApp();

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState(0)
    const [categoriaId, setCategoriaId] = useState("")

    const handleClick = () => {
        const ob = {
            id: uuidv4(),
            nombre,
            precio,
            categoriaId,
            imagen: "galletas_04"
        }
        createProduct(ob)
        toast.success('Product Add',{
            duration: 700,
        });
        setTimeout(() => {
            route('/')
        }, 1000);
        
    }
  return (
    <div className=' w-10/12 sm:w-6/12 mx-auto my-8'>
        <Toaster 
          position="top-right"
          reverseOrder={false}
        />
        <form className='p-4 bg-[#313131] text-white'>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    // value={formData.name}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="price">
                    Precio
                </label>
                <input
                className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="number"
                placeholder="Ingrese el precio del producto"
                // value={formData.price}
                onChange={(e) => setPrecio(e.target.value)}
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
                    // value={formData.category}
                    onChange={(e) => setCategoriaId(e.target.value)}
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
                    type="button"
                    onClick={() => handleClick()}
                >Add</button>
            </div>
        </form>
    </div>

  )
}

export default NewProduct