import { get } from '../utils/externalApiConnect';
import { ErrorType } from '../common/error';
import { UserProfile, Response, UserProfileResponse } from '../common/interface';

const url = process.env.USER_PROFILE_API as string;

const getUserProfiles = async (userUid: string): Promise<UserProfileResponse> => {
  const response: Response = await get(url).catch((err) => {
    throw err;
  });
  const userProfileList: UserProfile[] = response.data as unknown as Array<UserProfile>;
  const userProfile = userProfileList.find((profile) => profile.userUid === userUid);
  if (!userProfile) {
    throw new Error(ErrorType.NO_PROFILE);
  }
  return {
    data: userProfile,
  };
};

export default getUserProfiles;
