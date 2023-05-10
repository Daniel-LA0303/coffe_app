import { useEffect } from "react";
import TableSales from "../components/Table/TableSales";
import useApp from "../hooks/useApp";
import { useNavigate } from "react-router-dom";


const Sales = () => {

  const route = useNavigate()

  const {
    total,
    user
} = useApp();

  useEffect(() => {
    if(!user.name){
      route('/login')
    }
  }, [])

  return (
    <div className="px-3 sm:mx-auto w-full lg:w-9/12 xl:w-9/12 h-auto md:h-screen  ">
      <h2 className=" text-center text-white my-3 text-2xl mt-5">Today's sales: ${total.toFixed(2)}</h2>
      <div className=" w-full h-auto md:h-[85vh]  md:overflow-y-auto contenedor  ">
        <TableSales />
      </div>
    </div>
  );
};

export default Sales;
