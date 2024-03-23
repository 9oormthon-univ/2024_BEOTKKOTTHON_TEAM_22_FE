import { BASE_URL } from '@/apis/index';

export interface Response {
  response: UserInfoData;
}

export interface UserInfoData {
  nickname: string,
  totalpoint:number,
  grade: string,
}

export const getMypage = async (email: string): Promise<Response> => {
  try {
    const res = await fetch(`${BASE_URL}/api/mypage?email=${email}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    console.log("getMypage_Data",data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch getMypage');
  }
};