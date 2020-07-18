import sendEmail from "./sendEmail";
import {UserDetails} from '../common/interface';

const emailList:UserDetails[]= [];
let emailInterval:any;
const delay:number = 2*1000;

const emailScheduler =  async () =>{
    const email:UserDetails = emailList.pop() as UserDetails;
    if(!emailList.length) {
        clearInterval(emailInterval);
    }
    sendEmail(email);
}

const addMailInQueue = (email:UserDetails) =>{
    if(!emailList.length){
        emailInterval = setInterval(emailScheduler,delay);
    }
    emailList.push(email);
}

export default addMailInQueue;

