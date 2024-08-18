import logo from "../assets/images/logo.svg";
import Navbar from "./Navbar";
import avatar from "../assets/images/image-avatar.png";
import menu from "../assets/images/icon-menu.svg";

import Drawer from "@mui/material/Drawer";
import DrawerNavbar from "./DrawerNavbar";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../redux/ProductSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Basket from "./Basket";

function Header() {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.products);

  return (
    <header className="py-9 flex justify-between items-center  ">
      <div className="flex items-center">
        <img
          src={menu}
          alt=""
          className="min-[900px]:hidden mr-4 w-5 h-5"
          onClick={() => dispatch(toggleDrawer(true))}
        />
        <img className="h-6" src={logo} alt="" />
        <Navbar />
      </div>
      <div className="flex items-center">
        <Basket />
        <img
          className="h-12 max-[900px]:h-8 max-[500px]:h-7 "
          src={avatar}
          alt=""
        />
      </div>
      <Drawer open={open} onClose={() => dispatch(toggleDrawer(false))}>
        <DrawerNavbar />
      </Drawer>
    </header>
  );
}

export default Header;
