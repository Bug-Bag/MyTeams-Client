import {
  UserRegistrationRequest,
  UserResponse,
} from '../DataTransferObject/UserRegistration.type';
import {makePOSTRequest} from './BaseProvider';

const baseUrl = 'http://localhost:8080/';
const userRegistrationEndpoint = 'user';
export function RegisterUser(
    reqBody: UserRegistrationRequest,
    onSuccess?: (response: UserResponse) => void,
    onError?: (error: Error) => void,
): Promise<UserResponse> {
  return makePOSTRequest<UserRegistrationRequest, UserResponse>(
      baseUrl + userRegistrationEndpoint,
      reqBody,
    onSuccess ? onSuccess : (res: UserResponse) => {},
    onError ? onError : (error: Error) => {},
  );
}
