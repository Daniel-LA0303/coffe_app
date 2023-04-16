import React from 'react'

const NewProduct = () => {
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
                    name="name"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    // value={formData.name}
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
                name="price"
                type="number"
                placeholder="Ingrese el precio del producto"
                // value={formData.price}
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
                    // value={formData.category}
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
                >Add</button>
            </div>
        </form>
    </div>

  )
}

export default NewProduct