import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import image1t from "../assets/images/image-product-1-thumbnail.jpg";
import image2t from "../assets/images/image-product-2-thumbnail.jpg";
import image3t from "../assets/images/image-product-3-thumbnail.jpg";
import image4t from "../assets/images/image-product-4-thumbnail.jpg";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { handleImage, openDialog } from "../redux/ProductSlice";
import Next from "./Next";
import Previous from "./Previous";

function ProductImagePage() {
  const imageAlbum = [image1, image2, image3, image4];
  const imageAlbumSmall = [image1t, image2t, image3t, image4t];
  const { selectedProduct } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  return (
    <div className="relative max-[900px]:w-full h-[480px] max-[900px]:overflow-hidden max-[900px]:flex justify-center items-center max-[500px]:h-[400px]">
      {selectedProduct !== 3 ? <Next /> : ""}
      {selectedProduct !== 0 ? <Previous /> : ""}
      <img
        className="max-[900px]:min-h-[480px] max-[900px]:object-cover h-[440px] w-[440px]  rounded-2xl my-9 max-[900px]:my-0 max-[900px]:w-full max-[900px]:rounded-none max-[900px]:h-auto bg-bottom cursor-pointer"
        onClick={() => dispatch(openDialog())}
        src={imageAlbum[selectedProduct]}
        alt=""
      />
      <div className="flex max-[900px]:hidden">
        {imageAlbumSmall.map((item, index) => {
          console.log(item, index);
          return (
            <img
              key={index}
              onClick={() => dispatch(handleImage(index))}
              className="h-[100px] mr-[13px] rounded-lg"
              src={item}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductImagePage;
