import React, { useState } from 'react'
import useApp from '../hooks/useApp';
import iconCoffe from "../assets/icon2.png"
import { useNavigate } from 'react-router-dom';
import userIcon from "../assets/user.png"

const Login = () => {

    const route = useNavigate()

    const {
        login,
        setUser
    } = useApp();

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {

        const ob = {
            name,
            password
        }
        if(name === "user" && password === "1234"){
            setUser({
                name,
                password,
                img: userIcon
            })
        }
        route('/')
        // login(ob)
    }

  return (
    <div className=' h-screen mx-auto flex justify-center items-center'>
        {/* <Toaster 
          position="top-right"
          reverseOrder={false}
        /> */}
        <form className='p-10 bg-[#313131] text-white rounded-md w-10/12 sm:w-6/12 md:w-6/12 lg:w-4/12'>
        <div className="mb-4">
                <label className="block font-light text-5xl mb-2 text-center" htmlFor="image">
                    Coffe Food
                </label>
                <div className='flex justify-center'>
                    <img
                        src={iconCoffe}
                        className=" w-40  lg:text-xs xl:text-xl mt-0 shadow-2xl rounded-lg"
                    />
                </div>
            </div>
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
            <div className="flex items-center justify-center">
                <button
                    className='bg-[#0D7377] w-full h-10 rounded-lg hover:bg-[#408b8e] transition duration-300 '
                    type="button"
                    onClick={() => handleClick()}
                >Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login