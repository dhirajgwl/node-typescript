export interface User{
    username: string;
    uid: string; 
}
export interface UserProfile{
    userUid: string;
    birthdate: string;
    address: string;
}

export interface UserDetails extends UserProfile{
    username: string;
    wish:string;
    error:string;
}

export interface Response{
    data:[];
    status:number
}