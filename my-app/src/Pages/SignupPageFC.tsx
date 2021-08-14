import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import validator from 'validator';
import "./SignupPage.css";

interface ISignupPageProps {
  isSignup: boolean;
}

enum validationError {
    USERNAME_TOO_SHORT="Username too short",
    PASSWORD_MISMATCH="Passwords does not match",
    NOT_AN_EMAIL="Not a valid email address"
}
export const SignupPageFC: React.FC<ISignupPageProps> = (
  props: ISignupPageProps
): JSX.Element => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [displayName, setDisplayName] = useState("");
  let [email, setEmail] = useState("");

  return (
    <Card className="signUpCard">
        <CardHeader title="Sign up as a new user"/>
        <CardContent>
          <FormControl margin="normal">
            <TextField error={validateUsername(username)!=null} helperText={validateUsername(username)} id="usernameTextField" label="Username" value={username} onChange={ (event) => {setUsername(event.target.value)}}/>
            <TextField id="passwordTextField" label="Password" value={password} onChange={ (event) => {setPassword(event.target.value)}}/>
            <TextField id="confirmPasswordTextField" label="Confirm Password" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}}/>
            <TextField id="displayNameTextField" label="Display Name" value={displayName} onChange={(event) => {setDisplayName(event.target.value)}}/>
            <TextField id="emailTextField" error={validateEmail(email)!=null} helperText={validateEmail(email)} label="Email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          </FormControl>
        </CardContent>
    </Card>
  );
};

function validateUsername(username: string): validationError | null {
    if (username !== "" && username.length < 3) {
        return validationError.USERNAME_TOO_SHORT;
    } 
    return null;
}

function validateEmail(email: string): validationError | null {
    if (email !== "" && !validator.isEmail(email)) {
        return validationError.NOT_AN_EMAIL
    }
    return null;
}
