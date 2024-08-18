import { useDispatch } from "react-redux";
import next from "../assets/images/icon-next.svg";
import { handleNext2 } from "../redux/ProductSlice";

function Next2() {
  const dispatch = useDispatch();
  return (
    <div
      className="cursor-pointer absolute top-72 right-10 z-10 bg-white rounded-full flex justify-center items-center w-12 h-12"
      onClick={() => dispatch(handleNext2())}
    >
      <img className="" src={next} alt="Next" />
    </div>
  );
}

export default Next2;
