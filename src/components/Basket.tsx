import * as React from "react";
import Popover from "@mui/material/Popover";
import basketimg from "../assets/images/icon-cart.svg";
import Card from "./Card";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Basket() {
  const { product } = useSelector((state: RootState) => state.products);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span className="mr-10 max-[900px]:mr-5 cursor-pointer">
        <Badge
          badgeContent={product[0] && product[0].piece}
          color="secondary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "var(--orange)",
              color: "white",
            },
          }}
        >
          <img
            className="h-6 "
            src={basketimg}
            aria-describedby={id}
            onClick={handleClick}
          ></img>
        </Badge>
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: { width: "380px", padding: "20px", marginTop: "20px" },
          },
        }}
      >
        <Card />
      </Popover>
    </div>
  );
}
