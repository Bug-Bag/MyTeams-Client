import { UserLoginRequest } from "../DataTransferObject/UserLogin.type";
import {
    UserResponse,
} from "../DataTransferObject/UserRegistration.type";
import { makePOSTRequest } from "./BaseProvider";

const baseUrl = "http://localhost:8080/";
const userLoginEndpoint = "login";

export function LoginUser(
    reqBody: UserLoginRequest,
    onSuccess?: (response: UserResponse) => void,
    onError?: (error: Error) => void
): Promise<UserResponse> {
    return makePOSTRequest(
        baseUrl + userLoginEndpoint, 
        reqBody,
        onSuccess? onSuccess : (res: UserResponse) => {},
        onError? onError : (res: Error) => {}
    );
}