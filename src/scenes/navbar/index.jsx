import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from "@mui/material";

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from "@mui/icons-material"

import { UseDispatch, UseSelector, useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";


const Navbar = () => {
  const { isMobileMenuTogggled, setIsMobileMenuToggled } = useState(false);
  //hook to release a change
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //checks for changes in the state and if change, it renders eg if user state changes, render user
  const user = useSelector((state) => state.user);

  //mui hoook that checks min width and returns a boolean
  const isNonMobileScreens = useMediaQuery("(min-width:1000px");

  //enables select of the pre written colors depending on mode without having to write or rewrite
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return <FlexBetween padding="1rem 6%" backgroundColor={ alt} ></FlexBetween>
}
export default Navbar;