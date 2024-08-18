import { useDispatch } from "react-redux";
import previous from "../assets/images/icon-previous.svg";
import { handlePrevious2 } from "../redux/ProductSlice";

function Previous() {
  const dispatch = useDispatch();
  return (
    <div
      className="cursor-pointer absolute top-72 left-10 z-10 bg-white rounded-full 
    flex justify-center items-center w-12 h-12  "
      onClick={() => dispatch(handlePrevious2())}
    >
      <img className="pr-1" src={previous} alt="" />
    </div>
  );
}

export default Previous;
