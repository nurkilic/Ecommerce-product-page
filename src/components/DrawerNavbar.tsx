import { useDispatch } from "react-redux";
import close from "../assets/images/icon-close.svg";
import { toggleDrawer } from "../redux/ProductSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function DrawerNavbar() {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.products);
  console.log(open);

  return (
    <div className="w-72 p-6 font-bold text-lg">
      <img src={close} onClick={() => dispatch(toggleDrawer(false))} alt="" />
      <ul
        className="gap-x-7 flex flex-col gap-4 mt-11"
        onClick={() => dispatch(toggleDrawer(false))}
      >
        <li>
          <a href="">Collections</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default DrawerNavbar;
