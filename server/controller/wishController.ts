import {Request,Response} from 'express';
import {UserDetails} from '../common/interface'
import wishServices from '../services/wishServices';
import addMailInQueue from '../utils/emailScheduler';

const wishController = async (req:Request, res:Response) =>{
    const userName = req.body.userName; 
    const wish = req.body.wish; 
    const result = await validateUser(userName, wish);    
    res.send(result);
    
}

const validateUser = async(userName:string, wish:string, maxAge:number=10) =>{
    if(!userName) return {result:{error:'USER_EMPTY'}}
    if(!wish) return {result:{error:'WISH_EMPTY'}};
    const userDetails:UserDetails = await wishServices(userName);
    if(userDetails.error) return {result:userDetails};
    userDetails.wish = wish;
    const userAge:any = getAge(userDetails.birthdate);
    if(isNaN(userAge)) return {result:{error:'BIRTHDAY_INVALID'}};
    if( userAge> maxAge) return {result:{error:'OLD_USER'}};

    addMailInQueue(userDetails)
    
    return {result:{success:'WISH_SEND'}};
}

const getAge = (birthdays:string) =>{
    if(!birthdays) return 'no_age';
    const age = Date.now() - (new Date(birthdays)).getTime();    
    return Math.abs((new Date(age)).getUTCFullYear() - 1970);
}


export default wishController;