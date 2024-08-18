import { useDispatch } from "react-redux";
import previous from "../assets/images/icon-previous.svg";
import { handlePrevious } from "../redux/ProductSlice";

function Previous() {
  const dispatch = useDispatch();
  return (
    <div
      className="cursor-pointer absolute top-1/2 left-3 z-10 bg-white rounded-full 
    flex justify-center items-center w-10 h-10 min-[900px]:hidden "
      onClick={() => dispatch(handlePrevious())}
    >
      <img className="pr-1" src={previous} alt="" />
    </div>
  );
}

export default Previous;
