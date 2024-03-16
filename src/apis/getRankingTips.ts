import axios from 'axios';

export interface Response {
  response: TipsRanking[];
}

export interface TipsRanking {
  id: number;
  title: string;
  image_url: string;
  nickname: string;
  bookmark_counts: number;
}

export const getRankingTips = async () => {
  try {
    const res = await axios.get<Response>('http://localhost:3000/api/home');

    const { data } = res;

    return data;
  } catch (err) {
    console.log(err);
  }
};
