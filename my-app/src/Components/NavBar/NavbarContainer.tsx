import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedin, selectUserProfile } from '../../Store/loginSlice';
import { NavBar } from './Navbar';

export const NavbarContainer : React.FC = () => {
    
    const selectedProfile = useSelector(selectUserProfile);
    const selectedIsLoggedin = useSelector(selectIsLoggedin);
    return <NavBar userProfile={selectedProfile} isLoggedIn={selectedIsLoggedin}/>
}