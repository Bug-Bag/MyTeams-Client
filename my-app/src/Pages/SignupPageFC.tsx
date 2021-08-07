import { Button, Flex, Input } from '@fluentui/react-northstar';
import * as React from 'react';
import "./SignupPage.css"

interface ISignupPageProps {
    isSignup: boolean;
}
export const SignupPageFC: React.FC<ISignupPageProps> = (props: ISignupPageProps): JSX.Element => {
    
    let [username, setUsername] = React.useState("");
    return (
        <Flex className="SignUpContainer" column gap="gap.medium">
            <Input label="Username" value={username} onChange={ (event, data) => { setUsername(data!.value) }}/>
            <Input label="Disply Name" />
            <Input label="Passwrd" />
            <Input label="Email"/>
            <Button content="Sign Up "/>
        </Flex>
    )
}   