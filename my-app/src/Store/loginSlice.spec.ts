import { UserProfile } from '../Models/UserProfile.type';
import { login } from './loginSlice';
import { store } from './store';

describe('Test login slice', () => {
    it('get inital state', ()=>{
        let loginState = store.getState().login;
        expect(loginState.isLoggedIn).toEqual(false);
        expect(loginState.currentUser).toBe(undefined);
    })

    it('login sets values', ()=> {
        let initState = store.getState().login;
        expect(initState.isLoggedIn).toEqual(false);
        expect(initState.currentUser).toBe(undefined);

        let testUserProfile: UserProfile = {
            username: "testuser",
            displayName: "Test User",
            email: "test@test.com"
        }

        store.dispatch(login(testUserProfile));

        let logedInState = store.getState().login;
        expect(logedInState.isLoggedIn).toEqual(true);
        expect(logedInState.currentUser).toEqual(testUserProfile);
    })
})