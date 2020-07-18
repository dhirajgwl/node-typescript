import sendEmail from "./sendEmail";
import {UserProfile} from '../common/interface';

const emailList:UserProfile[]= [];
let emailInterval:number;
const delay:number = 2*1000;

const emailScheduler =  async () =>{
    const email:UserProfile = emailList.pop() as UserProfile;
    if(!emailList.length) {
        clearInterval(emailInterval);
    }
    sendEmail(email);
}

const addMailInQueue = (userProfile:UserProfile):void =>{
    if(!emailList.length){
        emailInterval = setInterval(emailScheduler,delay);
    }
    emailList.push(userProfile);
}

export default addMailInQueue;

