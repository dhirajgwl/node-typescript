import { differenceInDays } from 'date-fns';
import changeDateFormat from '../utils/changeDateFormat';
import { ErrorType } from '../common/error';
import getUserInfoServices from './getUserInfoServices';
import getUserProfiles from './getUserProfileServices';
import addMailInQueue from '../utils/emailScheduler';
import { UserResponse, UserProfileResponse, UserProfile, User, Response } from '../common/interface';

const wishServices = async (userName: string, wish: string): Promise<Response> =>
  (await validateUser(userName, wish)) as Response;

const validateUser = async (userName: string, wish: string, maxAge = 10): Promise<Response> => {
  const userInfoResponse: UserResponse = await getUserInfoServices(userName);
  const userInfo: User = userInfoResponse.data as User;

  const userProfileResponse: UserProfileResponse = await getUserProfiles(userInfo.uid);
  const userProfile: UserProfile = userProfileResponse.data as UserProfile;
  userProfile.wish = wish;
  userProfile.username = userInfo.username;

  const userAge: number | string = getAge(userProfile.birthdate);

  if (typeof userAge === 'string') {
    throw new Error(ErrorType.BIRTHDAY_INVALID);
  }
  if (userAge > maxAge) {
    throw new Error(ErrorType.OLD_USER);
  }
  addMailInQueue(userProfile);

  return { data: { success: 'WISH_SEND' } };
};

const getAge = (birthday: string): number | string => {
  const newDate = changeDateFormat(birthday, 'yyyy/dd/mm', 'yyyy/mm/dd');
  const age = differenceInDays(Date.now(), new Date(newDate)) / 365;
  if (Number.isNaN(age)) {
    throw new Error(ErrorType.BIRTHDAY_INVALID);
  }
  return Math.abs(age);
};

export default wishServices;
