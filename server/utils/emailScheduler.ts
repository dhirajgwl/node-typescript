import sendEmail from './sendEmail';
import { UserProfile } from '../common/interface';

const emailList: UserProfile[] = [];
let emailInterval: number;
const delay: number = 15 * 1000;

const emailScheduler = () => {
  sendEmail(emailList);
  emailList.length = 0;
  clearInterval(emailInterval);
};

const addMailInQueue = (userProfile: UserProfile): void => {
  if (!emailList.length) {
    emailInterval = setInterval(emailScheduler, delay);
  }
  emailList.push(userProfile);
};

export default addMailInQueue;
