export interface User {
  username: string;
  uid: string;
}
export interface UserProfile {
  userUid: string;
  birthdate: string;
  address: string;
  username?: string;
  wish?: string;
}

export interface Response {
  data: [];
  status: number;
  error?: string;
}
export interface UserResponse {
  data?: User;
  status: number;
  error?: string;
}
export interface UserProfileResponse {
  data?: UserProfile;
  status: number | string;
  error?: string;
}
