import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import basketblack from "../assets/images/icon-cart-black.svg";
import { useDispatch } from "react-redux";
import {
  addBasket,
  calculateTotal,
  valueDecrement,
  valueIncrement,
} from "../redux/ProductSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function ProductDetail() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.products);
  return (
    <div className="w-[500px] max-lg:w-[300px] max-[900px]:w-full max-[900px]:p-3 product-detail">
      <h6 className="text-[var(--darkgrayishblue)] font-bold text-sm mb-3 tracking-widest">
        SNEAKER COMPANY
      </h6>
      <h2 className="font-bold text-5xl mb-3 max-[900px]:text-3xl ">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-[var(--darkgrayishblue)] my-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex mb-2">
        <span className="font-bold text-3xl">
          <data value="125.00">$125.00</data>
        </span>
        <span className="rounded-lg bg-black text-white font-bold flex justify-center items-center px-3 ml-4">
          <data value="50">50%</data>
        </span>
      </div>
      <del className="text-[var(--darkgrayishblue)] font-bold ">$250.00</del>

      <div className="flex gap-4 mt-2 max-[900px]:flex-col">
        <div className="flex bg-[var(--lightgrayishblue)] h-14 w-40 items-center  justify-center gap-5 rounded-xl max-[900px]:w-full">
          <img
            className="h-[4px] cursor-pointer"
            src={minus}
            onClick={() => dispatch(valueDecrement())}
            alt=""
          />
          <span className="mx-5 font-bold">{value}</span>
          <img
            className="h-[14px] cursor-pointer"
            src={plus}
            onClick={() => dispatch(valueIncrement())}
            alt=""
          />
        </div>
        <div
          className="active:bg-orange-300 cursor-pointer bg-[var(--orange)] w-72 h-14 rounded-xl font-bold flex justify-center items-center max-[900px]:w-full max-[900px]:h-14 mb-11 "
          onClick={() => {
            dispatch(
              addBasket({
                id: 100,
                img: "/images/image-product-1-thumbnail.jpg",
                name: "Fall Limited Edition Sneakers",
                piece: value,
                price: 125.0,
              })
            );
            dispatch(calculateTotal());
          }}
        >
          <img className="h-5  mr-3 cursor-pointer" src={basketblack} alt="" />
          Add to card
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
