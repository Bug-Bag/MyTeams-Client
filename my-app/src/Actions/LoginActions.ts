import { UserProfile } from "../Models/UserProfile.type";

export const LoginActionType = 'login';
export const LogoutActionType = 'logout';

export interface ILoginAction {
    type: typeof LoginActionType,
    payload: UserProfile
}

export interface ILogoutAction {
    type: typeof LogoutActionType
}