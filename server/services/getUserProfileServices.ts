import { get } from '../utils/externalApiConnect';
import { UserProfile, Response, UserProfileResponse } from '../common/interface';

const url = process.env.USER_PROFILE_API as string;
let userProfileData: UserProfileResponse;
const getUserProfiles = async (userUid: string): Promise<UserProfileResponse> => {
  if (userProfileData) return userProfileData;

  const response: Response = await get(url);
  const userProfiles: UserProfile[] = response.data as Array<UserProfile>;
  if (response.status !== 200) return { status: response.status };
  const userProfile = userProfiles.find((profile) => profile.userUid === userUid);
  userProfileData = { data: userProfile, status: 200 };
  return userProfileData;
};

export default getUserProfiles;
