import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import validator from "validator";
import { loginUser } from "../../ActionCreators.ts/LoginActionCreators";
import { UserLoginRequest } from "../../DataLayer/DataTransferObject/UserLogin.type";
import { UserResponse } from "../../DataLayer/DataTransferObject/UserRegistration.type";
import { Status } from "../../Models/Status.type";
import { validationError } from "./ValidationError.type";
import "./AuthCard.css";
interface SignUpCardProps {
  setIsSignin: (isSignin: boolean) => void;
}

export const SignInCard: React.FC<SignUpCardProps> = (
  props: SignUpCardProps
) => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [status, setStatus] = useState(Status.NotStarted);

  const onLogin = (): void => {
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
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="m-auto p-8 border-2 border-blue-400 border-opacity-50 flex flex-col"
      sx={{
        width: 500,
        height: 600,
        bgcolor: "white",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h3" component="h3" className="gradient-text">
        Log in to MyTeams !
      </Typography>
      <FormControl margin="normal" style={{ width: "60%" }}>
        <div className="pt-2">
          <TextField
            error={validateUsername(username) != null}
            helperText={validateUsername(username)}
            id="usernameTextField"
            label="Username"
            value={username}
            variant="standard"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="pt-2">
          <TextField
            id="passwordTextField"
            error={validatePassword(password) != null}
            helperText={validatePassword(password)}
            label="Password"
            value={password}
            variant="standard"
            type="password"
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
      </FormControl>
      <div className="pt-6 flex flex-col">
        <Button
          variant="contained"
          color="primary"
          className="w-max"
          onClick={onLogin}
        >
          Login
        </Button>
      </div>
      <div className="pt-6">
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            props.setIsSignin(false);
          }}
        >
          Don't have an account? Register a new account now!
        </Button>
      </div>
    </Box>
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
