import TableSales from "../components/Table/TableSales";
import useApp from "../hooks/useApp";


const Sales = () => {

  const {
    total
} = useApp();

  return (
    <div className=" mx-auto mt-5 text-white w-11/12 md:w-10/12">
      <div className=" w-full  h-auto md:h-screen md:overflow-y-auto contenedor">
        <h2 className=" text-center my-3 text-2xl">Today's sales: ${total.toFixed(2)}</h2>
        <TableSales />
      </div>
    </div>
  );
};

export default Sales;
