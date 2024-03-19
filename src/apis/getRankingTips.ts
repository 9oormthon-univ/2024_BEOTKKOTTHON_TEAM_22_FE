import axios from 'axios';

export interface Response {
  category: string;
  tips: TipsRanking[];
}

export interface TipsRanking {
  id: number;
  category: number;
  title: string;
  image_url: string;
  nickname: string;
  bookmark_counts: number;
  bookmark_status: boolean;
}

export const getRankingTips = async () => {
  try {
    const res = await axios.get<Response>(
      `https://user1710776235315.requestly.tech/tips/category/1`,
    );

    const { data } = res;

    return data;
  } catch (err) {
    console.log(err);
  }
};
