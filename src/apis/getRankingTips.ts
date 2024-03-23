import { BASE_URL } from '.';

export interface Response {
  tips: TipsRanking[];
}

export interface TipsRanking {
  id: number;
  category: string;
  categoryId: number;
  title: string;
  image_url: string;
  nickname: string;
  bookmark_counts: number;
  bookmark_status: boolean;
}

export const getRankingTips = async (): Promise<Response> => {
  try {
    const res = await fetch(
      `https://user1710776235315.requestly.tech/tips/category/1`,
      { next: { tags: ['rankingTips'] } },
    );

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('Failed to fetch getRankingTips');
  }
};
