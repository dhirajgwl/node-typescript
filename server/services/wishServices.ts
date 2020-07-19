import getUserInfoServices from './getUserInfoServices';
import getUserProfiles from './getUserProfileServices';
import { UserResponse, UserProfileResponse, UserProfile, User } from '../common/interface';

const wishServices = async (userName: string): Promise<UserProfileResponse> => {
  const userInfoResponse: UserResponse = await getUserInfoServices(userName);
  const userInfo: User = userInfoResponse.data as User;
  if (!userInfo) return { error: 'USER_UNREGISTERED', status: 'ERROR' };
  if (userInfoResponse.status !== 200) return { error: 'SYSTEM_ERROR', status: userInfoResponse.status };

  const userProfileResponse: UserProfileResponse = await getUserProfiles(userInfo.uid);
  const userProfile: UserProfile = userProfileResponse.data as UserProfile;
  if (!userProfile) return { error: 'NO_PROFILE', status: userProfileResponse.status };
  if (userProfileResponse.status !== 200) return { error: 'SYSTEM_ERROR', status: userProfileResponse.status };

  return { data: { ...userProfile, username: userInfo.username }, status: userProfileResponse.status };
};

export default wishServices;
