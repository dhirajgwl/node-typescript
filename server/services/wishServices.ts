import getUserInfoServices from "./getUserInfoServices";
import getUserProfiles from "./getUserProfileServices";

const wishServices = async (userName:string) => {
    const userInfo:any = await getUserInfoServices(userName);
    if(!userInfo) return {error:'USER_UNREGISTERED'};
    if(userInfo.status) return {error:'SYSTEM_ERROR',status:userInfo.status};
    const userProfile:any = await getUserProfiles(userInfo.uid);
    if(!userProfile) return {error:'NO_PROFILE'};
    if(userProfile.status)return {error:'SYSTEM_ERROR',status:userInfo.status};

    return {...userProfile, username:userInfo.username}; 
}

export default wishServices;