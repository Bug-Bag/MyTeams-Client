import { Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { SignInCard } from "../Components/Auth/SignInCard";
import { SignUpCard } from "../Components/Auth/SignUpCard";
import './AuthPage.scss';

export const AuthPage: React.FC<{}> = (): JSX.Element => {
  let [isSignIn, setIsSignin] = useState(false);

  return (
    <div className="flex h-screen">
      <div id="description" className="bg-blue-500 w-1/3">
        <Typography variant="h3" component="h3" className="pl-12 pt-12 text-blue-100">
          Welcome to MyTeams
        </Typography>
      </div>

      {isSignIn ? (
        <SignInCard setIsSignin={setIsSignin} />
      ) : (
        <SignUpCard setIsSignin={setIsSignin} />
      )}
    </div>
  );
};
