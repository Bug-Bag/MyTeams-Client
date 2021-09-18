import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import validator from "validator";
import { loginUser } from "../ActionCreators.ts/LoginActionCreators";
import { UserLoginRequest } from "../DataLayer/DataTransferObject/UserLogin.type";
import { UserResponse } from "../DataLayer/DataTransferObject/UserRegistration.type";
import { LoginUser } from "../DataLayer/Providers/UserLoginProvider";

interface ISigninPageProps {
  // prop
  setIsSignIn: (isSignIn: boolean) => void;
}

enum validationError {
  // TODO
  USERNAME_TOO_SHORT = "Username too short",
  INVALID_PASSWORD = "Not a valid password. A valid password must have at least 8 characters long, include minumum 1 lower-case character, 1 upper-case character, 1 number anmd 1 symbol.",
}

enum Status {
  Running,
  Failed,
  Completed,
  NotStarted,
}

export const SigninPageFC: React.FC<ISigninPageProps> = (
  props: ISigninPageProps
): JSX.Element => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [status, setStatus] = useState(Status.NotStarted);
  const onRegister = (): void => {
    const requestBody: UserLoginRequest = {
      username: username,
      password: password,
    };
    const requestPromise = loginUser(requestBody);
    requestPromise
      .then((res: UserResponse) => {
        console.log(res);
        setStatus(Status.Completed);
      })
      .catch((err: Error) => {
        console.log(err);
        setStatus(Status.Failed);
      });
  };

  return (
    <div className="flex h-screen">
      <Card className="signUpCard m-auto">
        <CardHeader title="Sign up as a new user" />
        <CardContent>
          <FormControl margin="normal" style={{ width: "60%" }}>
            {status === Status.Running && "Loading"}
            {status === Status.Completed && "Sign in successfully!"}
            {status === Status.Failed &&
              "Sign in failed! Please check your username and password."}
            <TextField
              className="signUpFields"
              error={validateUsername(username) != null}
              helperText={validateUsername(username)}
              id="usernameTextField"
              label="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <TextField
              id="passwordTextField"
              error={validatePassword(password) != null}
              helperText={validatePassword(password)}
              label="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </FormControl>
        </CardContent>
        <CardContent>
          <Button variant="contained" color="primary" onClick={onRegister}>
            Sign In
          </Button>
        </CardContent>
        <Button
          variant="text"
          color="secondary"
          onClick={() => {
            props.setIsSignIn(false);
          }}
        >
          Don't have an account? Register a new account now!
        </Button>
      </Card>
    </div>
  );
};

function validateUsername(username: string): validationError | null {
  if (username !== "" && username.length < 3) {
    return validationError.USERNAME_TOO_SHORT;
  }
  return null;
}

function validatePassword(password: string): validationError | null {
  if (!validator.isEmpty(password) && !validator.isStrongPassword(password)) {
    return validationError.INVALID_PASSWORD;
  }
  return null;
}
