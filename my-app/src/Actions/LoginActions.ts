import { IUserProfile } from "../Models/UserProfile.type";
import { IAction } from "./Action.type";

export const LoginActionType = "loginActionType";
export const LogoutActionType = "logoutActionType";

export interface ILoginAction extends IAction {
  type: typeof LoginActionType;
  payload: IUserProfile;
}

export interface ILogoutAction extends IAction {
  type: typeof LogoutActionType;
}
