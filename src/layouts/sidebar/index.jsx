import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/icon2.png"

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Badge } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

// import



// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore, AiOutlineDollar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { FiCoffee } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import {GrNotification} from 'react-icons/gr'
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink,  useLocation, useRoutes } from "react-router-dom";
import ContentAside from "../../components/ContentAside/ContentAside";
import useApp from "../../hooks/useApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClipboardList, faCoffee, faDollar, faDollarSign, faGear, faHome, faMoneyBill, faMoneyCheck, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#525252',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '15px'
};

const Sidebar = () => {

  const {
    openModal,
    setOpenModal,
    productsOrder
} = useApp();

  let isTabletMid = useMediaQuery({ query: "(max-width: 760px)" });
  // const isScreenMid = use
  const [open, setOpen] = useState(isTabletMid ? false : true);
  
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "13rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "3.5rem",
          transition: {
            damping: 40,
          },
        },
      };


  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[#313131] text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed text-white
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-2 border-slate-300  mx-3">
          <img
            src={Logo}
            width={32}
            alt=""
          />
          <span className="text-xl whitespace-pre ml-1">Coffe</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link" >
                <FontAwesomeIcon icon={faHome} width={20}/>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"} className="link">
                <FontAwesomeIcon icon={faCoffee}  width={20}/>
                <p>Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sales"} className="link">
                <FontAwesomeIcon icon={faMoneyBill} width={20} />
                <p>Sales</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className="link">
                <FontAwesomeIcon icon={faGear} width={20}/>
                <p>Settings</p>
              </NavLink>
            </li>
            <li className=" hidden md:block lg:hidden ">
              <button 
                onClick={() => setOpenModal(!openModal)}
                className="link">
                <FontAwesomeIcon icon={faClipboardList} width={20}/>
                <p>Order</p>
              </button>
            </li>
          </ul>

        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      <div className="w-screen md:hidden bg-zinc-800 p-4 flex justify-between" >
        <div className=" text-white" onClick={() => setOpen(true)}>
          <MdMenu size={25} />
        </div>
        <div 
          onClick={() => setOpenModal(!openModal)}

          className="text-white cursor-pointer"
        >
          <Badge 
            badgeContent={productsOrder.length} 
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "#0D7377"
              }
              }}
          >
            <FontAwesomeIcon icon={faBell}/>
          </Badge>
        </div>
      </div>
      <Modal
        
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: '80vh' }}>
          <div className=" h-4/6">
            <ContentAside 
              aside={false}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Sidebar;
