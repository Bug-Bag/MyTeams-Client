import { useState } from "react";
import * as React from "react";
import { SignupPageFC } from "./SignupPageFC";
export const AuthPageContainer: React.FC<{}> = (): JSX.Element => {
  const [isSignIn, setIsSignIn] = useState(false);
  if (!isSignIn) {
    return <SignupPageFC setIsSignIn={setIsSignIn}/>;
  } else {
    return <></>;
  }
};
