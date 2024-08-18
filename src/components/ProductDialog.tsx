import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import image1t from "../assets/images/image-product-1-thumbnail.jpg";
import image2t from "../assets/images/image-product-2-thumbnail.jpg";
import image3t from "../assets/images/image-product-3-thumbnail.jpg";
import image4t from "../assets/images/image-product-4-thumbnail.jpg";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { closeDialog, handleImage2 } from "../redux/ProductSlice";
import Next2 from "./Next2";
import Previous2 from "./Previous2";
import close from "../assets/images/icon-close.svg";

function ProductDialog() {
  const imageAlbum = [image1, image2, image3, image4];
  const imageAlbumSmall = [image1t, image2t, image3t, image4t];
  const dispatch = useDispatch();
  const { opendialog, selectedProduct2 } = useSelector(
    (state: RootState) => state.products
  );
  return (
    <div className="">
      <Dialog
        onClose={() => dispatch(closeDialog())}
        open={opendialog}
        className="dialog"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "90vh",
            width: "90vw",
           
          },
        }}
      >
        <div className="relative justify-center items-center flex flex-col">
          <div className="flex justify-end items-end w-full ">
            {" "}
            <img
              onClick={() => dispatch(closeDialog())}
              className="h-6 w-6 mr-8 cursor-pointer"
              src={close}
              alt=""
            />
          </div>
          {selectedProduct2 !== 3 ? <Next2 /> : ""}
          {selectedProduct2 !== 0 ? <Previous2 /> : ""}
          <img
            className=" h-[540px] rounded-2xl my-9 object-cover "
            src={imageAlbum[selectedProduct2]}
            alt=""
          />
          <div className="flex ">
            {imageAlbumSmall.map((item, index) => {
              console.log(item, index);
              return (
                <img
                  key={index}
                  onClick={() => dispatch(handleImage2(index))}
                  className="h-[100px] mr-[13px] rounded-lg"
                  src={item}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ProductDialog;
