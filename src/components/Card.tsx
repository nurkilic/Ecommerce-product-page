import { useSelector } from "react-redux";
import BasketProduct from "./BasketProduct";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { checkoutProduct } from "../redux/ProductSlice";

function Card() {
  const { product } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch()
  return (
    <div className="">
      <div className="font-bold mb-5">Cart</div>
      <hr />
      {product.length > 0 ? (
        <div>
          <div>
            <BasketProduct />
          </div>
          <button className="bg-[var(--orange)] w-full h-14 rounded-lg font-bold" onClick={() => {
            dispatch(checkoutProduct())
          }}>
            Checkout
          </button>
        </div>
      ) : (
        <div className="text-[var(--darkgrayishblue)] font-bold  flex justify-center items-center h-[152px]">
          <span>Your cart is empty.</span>
        </div>
      )}
    </div>
  );
}

export default Card;
