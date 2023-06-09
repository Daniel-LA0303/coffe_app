import { Toaster } from "react-hot-toast";
import useApp from "../hooks/useApp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Settings = () => {

    const route = useNavigate()

  const {
    user
} = useApp();  

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
    if(!user.name){
        route('/login')
    }
    setName(user.name)
    setPassword(user.password)
  }, [])

  return (
    <div className=' w-10/12 sm:w-6/12 md:w-6/12 lg:w-4/12 mx-auto my-8'>
        <Toaster 
          position="top-right"
          reverseOrder={false}
        />
        <form className='p-10 bg-[#313131] text-white rounded-md'>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="price">
                    Password
                </label>
                <input
                className="shadow bg-[#525252] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="text"
                placeholder="Ingrese el precio del producto"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="image">
                    Image
                </label>
                <div className='flex justify-center'>
                    <img
                        src={user.img}
                        className=" w-40  lg:text-xs xl:text-xl mt-0 shadow-2xl rounded-lg"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '
                    type="button"
                    onClick={() => handleClick()}
                >Edit</button>
            </div>
        </form>
    </div>

  );
};

export default Settings;
