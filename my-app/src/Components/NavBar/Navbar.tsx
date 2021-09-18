import React from "react";
import { AppBar, Button, IconButton, InputBase, Toolbar } from "@material-ui/core";
import "../../styles/output.css";
import Search from "@material-ui/icons/Search";
import { UserProfile } from "../../Models/UserProfile.type";

export interface INavBarProps {
  userProfile: UserProfile,
  isLoggedIn: boolean
}

export const NavBar: React.FC<INavBarProps> = ({userProfile, isLoggedIn}: INavBarProps) => {
  return (
    <AppBar>
      <Toolbar className="space-x-4">
        {isLoggedIn && userProfile && renderProfileSection(userProfile)}
      </Toolbar>
    </AppBar>
  );
};



const renderProfileSection = (userProfile: UserProfile): JSX.Element => {
    return (
        <div className="flex" style={{marginLeft: "auto"}}>
          <IconButton edge="end" aria-label="account of the current user" aria-controls={"test"} aria-haspopup color="inherit" />
        </div>
    )
}
