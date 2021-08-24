import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from '@material-ui/core';
import * as React from 'react';
import {useState} from 'react';
import validator from 'validator';
import {UserRegistrationRequest, UserResponse} from '../DataLayer/DataTransferObject/UserRegistration.type';
import {RegisterUser} from '../DataLayer/Providers/UserRegistrationProvider';
import './SignupPage.css';

interface ISignupPageProps {
    setIsSignIn: (isSignIn: boolean) => void;
}

enum validationError {
    USERNAME_TOO_SHORT='Username too short',
    PASSWORD_MISMATCH='Passwords does not match',
    NOT_AN_EMAIL='Not a valid email address'
}

enum Status {
    Running,
    Failed,
    Completed,
    NotStarted
}

export const SignupPageFC: React.FC<ISignupPageProps> = (
    props: ISignupPageProps,
): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(Status.NotStarted);

  const onRegister = (): void => {
    setStatus(Status.Running);
    const requestBody: UserRegistrationRequest = {username: username, displayName: displayName, password: password, email: email};
    const requestPromise = RegisterUser(requestBody);
    requestPromise.then((res: UserResponse) => {
      console.log(res); setStatus(Status.Completed); 
    }).catch((err)=>{
      console.log(err); setStatus(Status.Failed);
    });
  };

  return (
    <Card className="signUpCard">
      <CardHeader title="Sign up as a new user"/>
      <CardContent>
        <FormControl margin="normal" style={{width: '60%'}}>
          {status === Status.Running && 'Loading'}
          {status === Status.Completed && 'Finished !'}
          {status === Status.Failed && 'Fuck !'}
          <TextField className="signUpFields" error={validateUsername(username)!=null} helperText={validateUsername(username)} id="usernameTextField" label="Username" value={username} onChange={ (event) => {
            setUsername(event.target.value);
          }}/>
          <TextField id="passwordTextField" label="Password" value={password} onChange={ (event) => {
            setPassword(event.target.value);
          }}/>
          <TextField id="confirmPasswordTextField" label="Confirm Password" value={confirmPassword} onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}/>
          <TextField id="displayNameTextField" label="Display Name" value={displayName} onChange={(event) => {
            setDisplayName(event.target.value);
          }}/>
          <TextField id="emailTextField" error={validateEmail(email)!=null} helperText={validateEmail(email)} label="Email" value={email} onChange={(event) => {
            setEmail(event.target.value);
          }}/>
        </FormControl>
      </CardContent>
      <CardContent>
        <Button variant="contained" color="primary" onClick={onRegister}>
            Sign Up
        </Button>
      </CardContent>
      <Button variant="text" color="secondary" onClick={() => {
        props.setIsSignIn(true);
      }}>Already have an account? Go to Sign In</Button>
    </Card>
  );
};

function validateUsername(username: string): validationError | null {
  if (username !== '' && username.length < 3) {
    return validationError.USERNAME_TOO_SHORT;
  }
  return null;
}

function validateEmail(email: string): validationError | null {
  if (email !== '' && !validator.isEmail(email)) {
    return validationError.NOT_AN_EMAIL;
  }
  return null;
}
