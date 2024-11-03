import {
  AppBar,
  Backdrop,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { blue } from "../../constants/color";
import { useNavigate } from "react-router-dom";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
import {
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const handleMobile = () => {
    setMobile((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const logoutHandler = () => {};
  const navigateToGroup = () => {
    navigate("groups");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: blue }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Sanvad
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Icons
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <Icons
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <Icons
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <Icons
                title={"Notifications"}
                icon={<NotificationIcon />}
                onClick={openNotification}
              />
              <Icons
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
}

const Icons = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick} color="inherit" size="large">
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
