import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../Store/loginSlice";
export const PrimaryNavBar: React.FC = () => {
  const menuId = "navbar-account-menu";
  const userProfile = useSelector(selectUserProfile);
  return (
    <AppBar>
      <Toolbar className="flex">
        <div className="flex flex-grow items-center content-end">
          <div>
            {userProfile && (
              <Typography variant="h6" component="div">
                {userProfile.displayName}
              </Typography>
            )}
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
