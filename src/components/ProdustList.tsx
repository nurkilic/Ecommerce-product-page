import ProductImagePage from "./ProductImagePage";
import ProductDetail from "./ProductDetail";

function ProdustList() {
  return (
    <div className="flex justify-center gap-40 items-center  max-xl:gap-20 max-[900px]:flex-col max-[900px]:gap-2">
      <ProductImagePage />
      <ProductDetail />
    </div>
  );
}

export default ProdustList;
