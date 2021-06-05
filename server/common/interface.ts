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
  data?: Record<string, string>;
}
export interface UserResponse {
  data?: User;
}
export interface UserProfileResponse {
  data?: UserProfile;
}
