import axios from 'axios';

type FetchInit = Parameters<typeof fetch>[1];
type FetchInput = Parameters<typeof fetch>[0];

const API = 'http://localhost:4000'; // 'http://localhost:4000/api'; // 'localhost:4000/api';

const request = async <T = any>(
  input: FetchInput,
  init?: FetchInit,
): Promise<T> => {
  const response = await axios(`${API}${input}`);
  return response; // await response.json();
};

export const get = async (url: string) => {
  const res = await request(url);
  return res;
};

export const post = async (url: string, init?: FetchInit) => {
  return await request(url, {
    method: 'POST',
    ...init,
  });
};
