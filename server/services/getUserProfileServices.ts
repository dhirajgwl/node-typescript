import {get} from '../utils/externalApiConnect';
import {UserProfile,Response} from '../common/interface';

const url = process.env.USER_PROFILE_API as string;

const getUserProfiles = async(userUid:string) =>{    
    const response:Response = await get(url);
    const userProfiles: UserProfile[] = response.data;
    if(response.status !== 200) return {status: response.status};
    const userProfile = userProfiles.find(
        (profile) => profile.userUid === userUid
    )
    return userProfile;
}



export default getUserProfiles;