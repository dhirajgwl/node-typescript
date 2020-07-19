import { get } from '../utils/externalApiConnect';
import { User, Response, UserResponse } from '../common/interface';
const url = process.env.USER_INFO_API as string;
let userInfoData: UserResponse;

const getUserInfoServices = async (userName: string): Promise<UserResponse> => {
  if (userInfoData) return userInfoData;
  const response: Response = await get(url);
  const users: User[] = response.data as Array<User>;
  if (response.status !== 200) return { status: response.status };
  const userInfo = users.find((user) => user.username === userName);
  userInfoData = { data: userInfo, status: 200 };
  return userInfoData;
};

export default getUserInfoServices;
