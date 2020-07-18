import axios from 'axios';

 export const get = async(api_url:string):Promise<any> => {
   const res = await axios.get(api_url);
   return res;
 }