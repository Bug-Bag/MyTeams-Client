export interface UserRegistrationRequest {
  username: string;
  displayName: string;
  password: string;
  email: string;
}

export interface UserResponse {
  id: string;
  username: string;
  displayName: string;
  email: string;
  jwtToken: string;
  refreshToken: string;
}
