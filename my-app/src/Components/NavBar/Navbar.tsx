import React from "react";
import { AppBar, Button, InputBase, Toolbar } from "@material-ui/core";
import "../../styles/output.css";
import Search from "@material-ui/icons/Search";

export const NavBar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar className="space-x-4">
        {renderSearchBar()}
        {renderProfileSection()}
      </Toolbar>
      
    </AppBar>
  );
};

const renderSearchBar = (): JSX.Element => {
  return (
    <div className="flex bg-white bg-opacity-25 w-2/5 justify-items-center pl-2 rounded-2">
      <div className="flex justify-center items-center">
        <Search />
      </div>
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        className="px-4"
      />
    </div>
  );
};

const renderProfileSection = (): JSX.Element => {
    return (
        <div className="flex" style={{marginLeft: "auto"}}>
          <Button className="justify-self-end" color="inherit">Login</Button>
        </div>
    )
}
