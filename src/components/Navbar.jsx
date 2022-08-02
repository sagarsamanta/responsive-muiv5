import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Mail from "@mui/icons-material/Mail";
import { useState } from "react";
const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme, mode }) => ({
  backgroundColor: mode === "dark" ? "black" : "white",
  color: "blue",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography variant="v6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sagar Samanta
        </Typography>
        <InsertEmoticonIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search mode={mode}>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={9} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&usqp=CAU"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="" />
          <Typography>Sagar</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
