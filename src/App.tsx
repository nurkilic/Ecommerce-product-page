import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import ProductDialog from "./components/ProductDialog";
import ProdustList from "./components/ProdustList";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateTotal } from "./redux/ProductSlice";

function App() {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    if (product.length > 0) {
      dispatch(calculateTotal());
    }
  }, []);

  const { opendialog } = useSelector((state: RootState) => state.products);
  return (
    <>
      <Header />
      <hr />
      <ProdustList />
      {opendialog ? <ProductDialog /> : ""}
    </>
  );
}

export default App;
