import {get} from '../utils/externalApiConnect'
import {User,Response} from '../common/interface';
const url = process.env.USER_INFO_API as string;

const getUserInfoServices = async(userName:string) =>{
    const response:Response = await get(url);
    const users: User[] = response.data;
    if(response.status !== 200) return {status: response.status};
    const userInfo = users.find(
        (user) => user.username === userName
    )
    return userInfo;
}


export default getUserInfoServices;