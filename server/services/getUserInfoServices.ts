import { get } from '../utils/externalApiConnect';
import { ErrorType } from '../common/error';
import { User, Response, UserResponse } from '../common/interface';
const url = process.env.USER_INFO_API as string;

const getUserInfoServices = async (userName: string): Promise<UserResponse> => {
  const response: Response = await get(url).catch((err) => {
    throw err;
  });
  const userInfoList: User[] = response.data as unknown as Array<User>;
  const userInfo: User = userInfoList.find((user: User) => user.username === userName) as User;
  if (!userInfo) {
    throw new Error(ErrorType.USER_UNREGISTERED);
  }
  return {
    data: userInfo,
  };
};

export default getUserInfoServices;
