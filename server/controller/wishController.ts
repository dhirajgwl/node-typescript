import {Request,Response} from 'express';
import wishServices from '../services/wishServices';
import addMailInQueue from '../utils/emailScheduler';
import { UserProfileResponse, UserProfile } from '../common/interface';

const wishController = async (req:Request, res:Response):Promise<void> =>{
    const userName = req.body.userName; 
    const wish = req.body.wish; 
    const result = await validateUser(userName, wish);    
    res.send(result);    
}

const validateUser = async(userName:string, wish:string, maxAge=10) =>{
    if(!userName) return {error:'USER_EMPTY'}
    if(!wish) return {error:'WISH_EMPTY'};

    const userProfileResponse:UserProfileResponse = await wishServices(userName);
    const userProfile:UserProfile = userProfileResponse.data as UserProfile;
    if(userProfileResponse.error) return {error:userProfileResponse.error};
    userProfile.wish = wish;

    if(Number.isNaN(userProfile.birthdate)) return {error:'BIRTHDAY_INVALID'};    
    const userAge:number = getAge(userProfile.birthdate);   
    if( userAge> maxAge) return {error:'OLD_USER'};
    addMailInQueue(userProfile);
    
    return {success:'WISH_SEND'};
}

const getAge = (birthdays:string):number =>{
    const age = Date.now() - (new Date(birthdays)).getTime();    
    return Math.abs((new Date(age)).getUTCFullYear() - 1970)  ;
}


export default wishController;