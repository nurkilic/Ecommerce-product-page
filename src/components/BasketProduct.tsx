import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import deleteProduct from "../assets/images/icon-delete.svg";
import { removeAllBasket } from "../redux/ProductSlice";

function BasketProduct() {
  const dispatch = useDispatch();

  const { product, total } = useSelector((state: RootState) => state.products);

  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex justify-start">
        <img
          className="h-14 w-14 rounded-md my-2"
          src={product[0].img}
          alt=""
        />
        <div className="p-3 text-[var(--darkgrayishblue)]">
          <div>{product[0].name}</div>
          <div>
            <span>${product[0].price.toFixed(2)} </span>
            {" x "}
            <span>{product[0].piece} </span>
            <span className="font-bold text-black"> ${total.toFixed(2)} </span>
          </div>
        </div>
      </div>
      <img
        className="h-5 cursor-pointer"
        src={deleteProduct}
        onClick={() => {
          dispatch(removeAllBasket());
        }}
        alt=""
      />
    </div>
  );
}

export default BasketProduct;
