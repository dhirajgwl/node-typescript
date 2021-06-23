import axios from 'axios';

export const get = async (api_url: string): Promise<any> => {
  const res = await axios.get(api_url).catch((err) => err);
  if (!res.data) {
    throw new Error('Connection Error');
  }
  return res;
};
