import getUserInfoServices from './getUserInfoServices';
import getUserProfiles from './getUserProfileServices';
import addMailInQueue from '../utils/emailScheduler';
import { UserResponse, UserProfileResponse, UserProfile, User, Response } from '../common/interface';

const wishServices = async (userName: string, wish: string): Promise<Response> => {
  const res: Response = (await validateUser(userName, wish)) as Response;
  return res;
};

const validateUser = async (userName: string, wish: string, maxAge = 10): Promise<Response> => {
  const userInfoResponse: UserResponse = await getUserInfoServices(userName);
  const userInfo: User = userInfoResponse.data as User;
  if (!userInfo) return { error: 'USER_UNREGISTERED', status: 'ERROR' };
  if (userInfoResponse.status !== 200) return { error: 'SYSTEM_ERROR', status: userInfoResponse.status };

  const userProfileResponse: UserProfileResponse = await getUserProfiles(userInfo.uid);
  const userProfile: UserProfile = userProfileResponse.data as UserProfile;
  if (!userProfile) return { error: 'NO_PROFILE', status: userProfileResponse.status };
  if (userProfileResponse.status !== 200) return { error: 'SYSTEM_ERROR', status: userProfileResponse.status };

  userProfile.wish = wish;
  userProfile.username = userInfo.username;

  const userAge: number | string = getAge(userProfile.birthdate);

  if (typeof userAge === 'string') {
    return { error: 'BIRTHDAY_INVALID', status: 'ERROR' };
  }
  if (userAge > maxAge) {
    return { error: 'OLD_USER', status: 'ERROR' };
  }
  addMailInQueue(userProfile);

  return { data: [{ success: 'WISH_SEND' } as Object], status: 'ERROR' };
};

const getAge = (birthdays: string): number | string => {
  const age = Date.now() - new Date(birthdays).getTime();
  if (Number.isNaN(age)) return 'BIRTHDAY_INVALID';
  return Math.abs(new Date(age).getUTCFullYear() - 1970);
};

export default wishServices;
