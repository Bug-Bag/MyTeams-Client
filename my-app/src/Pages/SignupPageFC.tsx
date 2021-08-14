
import { TextField } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import "./SignupPage.css"

interface ISignupPageProps {
    isSignup: boolean;
}
export const SignupPageFC: React.FC<ISignupPageProps> = (props: ISignupPageProps): JSX.Element => {
    
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [email, setEmail] = useState("");

    return (
        <form className="singupForm" autoComplete="off">
            <TextField id="username" label="Username" />
        </form>
    )
}   