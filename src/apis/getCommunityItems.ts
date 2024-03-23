import { BASE_URL } from '.';

export interface Response {
  questions: Community[];
}

export interface Community {
  id: number;
  email: string;
  nickname: string;
  category: string;
  title: string;
  image_url: string[];
  bookmark_stauts: boolean;
  bookmark_count: number;
  comment_count: number;
  timestamp: string;
}

export const getCommunityItems = async (): Promise<Response> => {
  try {
    const res = await fetch(`${BASE_URL}/api/community/items`, {
      next: { tags: ['communityItems'] },
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data.response;
  } catch (err) {
    throw new Error('Failed to fetch getCommunityItems');
  }
};
