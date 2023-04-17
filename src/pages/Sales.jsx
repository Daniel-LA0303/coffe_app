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
    <div className=" mx-auto text-white w-10/12 md:w-9/12">
      <div className=" w-full h-auto md:h-screen md:overflow-y-auto contenedor">
        <h2 className=" text-center my-3 text-2xl">Today's sales: ${total.toFixed(2)}</h2>
        <div className="py-10">
        <TableSales />
        </div>
      </div>
    </div>
  );
};

export default Sales;
