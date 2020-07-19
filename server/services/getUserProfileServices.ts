import { get } from '../utils/externalApiConnect';
import { UserProfile, Response, UserProfileResponse } from '../common/interface';

const url = process.env.USER_PROFILE_API as string;
let userProfileList: UserProfile[] = [];
const getUserProfiles = async (userUid: string): Promise<UserProfileResponse> => {
  let response: Response;
  if(!userProfileList.length){
    response = await get(url);
    if (response.status !== 200) return { status: response.status };
    userProfileList = response.data as Array<UserProfile>;
  }
  const userProfile = userProfileList.find((profile) => profile.userUid === userUid);
  return { data: userProfile, status: 200 };;
};

export default getUserProfiles;
