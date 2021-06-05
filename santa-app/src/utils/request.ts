import axios from 'axios';

const apiPath = '';

export const doPost: any = async (baseUrl: string, data: Record<string, unknown>) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${apiPath}${baseUrl}`,
    data: JSON.stringify(data),
  };
  return await request(options);
};

const request = async (options: Record<string, unknown>) => {
  const res = await axios(options).catch((err) => {
    throw new Error(err.response.data.message);
  });
  return res.data;
};
