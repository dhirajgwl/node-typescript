import { get } from '../utils/externalApiConnect';
import { User, Response, UserResponse } from '../common/interface';
const url = process.env.USER_INFO_API as string;
let userInfoList: User[] = [];

const getUserInfoServices = async (userName: string): Promise<UserResponse> => {
  let response:Response;
  if(!userInfoList.length) {
    response = await get(url);
    if (response.status !== 200) return { status: response.status };
    userInfoList = response.data as Array<User>;
  } 
  const users: User[] = userInfoList;
  userInfoList = users;  
  const userInfo = users.find((user) => user.username === userName);  
  return  { data: userInfo, status: 200 };;
};

export default getUserInfoServices;
