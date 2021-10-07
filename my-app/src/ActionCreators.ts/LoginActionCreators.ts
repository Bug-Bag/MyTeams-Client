import { UserLoginRequest } from "../DataLayer/DataTransferObject/UserLogin.type";
import { UserResponse } from "../DataLayer/DataTransferObject/UserRegistration.type";
import { LoginUser } from "../DataLayer/Providers/UserLoginProvider";
import { IUserProfile } from "../Models/UserProfile.type";
import { login } from "../Store/loginSlice";
import { store } from "../Store/store";

export const loginUser = (
  userLogin: UserLoginRequest
): Promise<UserResponse> => {
  return LoginUser(
    userLogin,
    (response: UserResponse) => {
      const UserProfile: IUserProfile = {
        userId: response.id,
        username: response.username,
        displayName: response.displayName,
        email: response.email,
      };
      store.dispatch(login(UserProfile));
    },
    (err: Error) => {
      console.error(err);
    }
  );
};
