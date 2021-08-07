import { Provider, teamsTheme } from '@fluentui/react-northstar';
import React from 'react';
import './App.css';
import { SignupPageFC } from './Pages/SignupPageFC';

function App() {
  return (
    <Provider theme={teamsTheme}>
      <div>
        <SignupPageFC isSignup />
      </div>
    </Provider>
    
    
  );
}

export default App;
