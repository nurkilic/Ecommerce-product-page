import { useDispatch } from "react-redux";
import next from "../assets/images/icon-next.svg";
import { handleNext } from "../redux/ProductSlice";

function Next() {
  const dispatch = useDispatch();
  return (
    <div
      className="min-[900px]:hidden cursor-pointer absolute top-1/2 right-3 z-10 bg-white rounded-full flex justify-center items-center w-10 h-10"
      onClick={() => dispatch(handleNext())}
    >
      <img className="" src={next} alt="Next" />
    </div>
  );
}

export default Next;
