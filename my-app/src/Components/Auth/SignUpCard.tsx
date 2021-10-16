import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { useState } from "react";
import validator from "validator";
import {
  UserRegistrationRequest,
  UserResponse,
} from "../../DataLayer/DataTransferObject/UserRegistration.type";
import { RegisterUser } from "../../DataLayer/Providers/UserRegistrationProvider";
import { Status } from "../../Models/Status.type";
import { validationError } from "./ValidationError.type";
import "./AuthCard.css";
import "../../styles/output.css";

interface SignUpCardProps {
  setIsSignin: (isSignin: boolean) => void;
}

export const SignUpCard: React.FC<SignUpCardProps> = (
  props: SignUpCardProps
): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(Status.NotStarted);

  function validateUsername(username: string): validationError | null {
    if (username !== "" && username.length < 3) {
      return validationError.USERNAME_TOO_SHORT;
    }
    return null;
  }

  function validateEmail(email: string): validationError | null {
    if (email !== "" && !validator.isEmail(email)) {
      return validationError.NOT_AN_EMAIL;
    }
    return null;
  }

  function validatePassword(password: string): validationError | null {
    // if (validator.isEmpty(password)) {return validationError.EMPTY_PASSWD;}
    if (!validator.isEmpty(password) && !validator.isStrongPassword(password)) {
      return validationError.INVALID_PASSWORD;
    }
    return null;
  }

  function validateConfirmPassword(
    password: string,
    confirmpassword: string
  ): validationError | null {
    if (!validator.isEmpty(password)) {
      if (!validator.isEmpty(confirmpassword) && password !== confirmpassword) {
        return validationError.CONFIRM_PASSWD_NOT_EQ;
      }
    }
    return null;
  }

  function validateDisplayName(displayname: string): validationError | null {
    if (!validator.isEmpty(displayname) && displayname.length < 5) {
      return validationError.INVALID_DISPLAY_NAME;
    }
    return null;
  }

  function onRegister() {
    setStatus(Status.Running);
    const requestBody: UserRegistrationRequest = {
      username: username,
      displayName: displayName,
      password: password,
      email: email,
    };
    const requestPromise = RegisterUser(requestBody);
    requestPromise
      .then((res: UserResponse) => {
        setStatus(Status.Completed);
      })
      .catch((err) => {
        setStatus(Status.Failed);
      });
  }

  function renderForm(): JSX.Element {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="m-auto p-8 border-2 border-blue-400 border-opacity-50"
        sx={{
          width: 500,
          height: 600,
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" component="h3" className="gradient-text">
          Sign Up for MyTeams
        </Typography>
        <FormControl margin="normal">
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
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="pt-2">
            <TextField
              id="confirmPasswordTextField"
              error={validateConfirmPassword(password, confirmPassword) != null}
              helperText={validateConfirmPassword(password, confirmPassword)}
              label="Confirm Password"
              value={confirmPassword}
              variant="standard"
              type="password"
              autoComplete="current-password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
          <div className="pt-2">
            <TextField
              id="displayNameTextField"
              error={validateDisplayName(displayName) != null}
              helperText={validateDisplayName(displayName)}
              label="Display Name"
              value={displayName}
              variant="standard"
              onChange={(event) => {
                setDisplayName(event.target.value);
              }}
            />
          </div>
          <div className="pt-2">
            <TextField
              id="emailTextField"
              error={validateEmail(email) != null}
              helperText={validateEmail(email)}
              label="Email"
              value={email}
              variant="standard"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="pt-6 flex flex-col">
            <Button
              variant="contained"
              color="primary"
              className="w-max"
              onClick={onRegister}
            >
              Sign Up
            </Button>
          </div>
          <div className="pt-6">
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                props.setIsSignin(true);
              }}
            >
              Already have an account? Go to Sign In
            </Button>
          </div>
        </FormControl>
      </Box>
    );
  }

  function renderLoad(): JSX.Element {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="m-auto p-8 border-2 border-blue-400 border-opacity-50 flex flex-wrap content-center"
        sx={{
          width: 500,
          height: 600,
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col flex-grow">
          <CircularProgress className="self-center" />
          <Typography
            className="self-center pt-6"
            variant="h5"
            component="h5"
            color="primary"
          >
            Loading...
          </Typography>
        </div>
      </Box>
    );
  }

  function renderSuccess(): JSX.Element {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="m-auto p-8 border-2 border-blue-400 border-opacity-50 flex flex-wrap content-center"
        sx={{
          width: 500,
          height: 600,
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col flex-grow content-center">
          <CheckIcon
            className="self-center"
            color="primary"
            sx={{ fontSize: 60 }}
          />
          <Button
            className="self-center"
            onClick={() => {
              props.setIsSignin(true);
            }}
          >
            <Typography variant="h5" component="h5">
              Signed Up Successfully!Go to Log in{" "}
            </Typography>
          </Button>
        </div>
      </Box>
    );
  }

  function renderError(): JSX.Element {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="m-auto p-8 border-2 border-blue-400 border-opacity-50 flex flex-wrap content-center"
        sx={{
          width: 500,
          height: 600,
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col flex-grow content-center">
          <CloseIcon
            className="self-center"
            color="error"
            sx={{ fontSize: 60 }}
          />
          <Button
            className="self-center"
            onClick={() => {
              setStatus(Status.NotStarted);
            }}
          >
            <Typography variant="h5" component="h5" color="error">
              Something went wrong. Try again{" "}
            </Typography>
          </Button>
        </div>
      </Box>
    );
  }

  return status === Status.Running
    ? renderLoad()
    : status === Status.Completed
    ? renderSuccess()
    : status === Status.Failed
    ? renderError()
    : renderForm();
};
