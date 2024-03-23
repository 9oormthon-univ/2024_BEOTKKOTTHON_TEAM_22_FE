import { BASE_URL } from '.';

export interface Response {
  response: CommunityDetail;
}

export interface CommunityDetail {
  id: number;
  category: string;
  title: string;
  content: string;
  image_url: string[];
  bookmark_status: boolean;
  bookmark_count: number;
  comment_count: number;
  timestamp: string;
  user: User;
  comments: CommuniyComments[];
}

export interface User {
  profile_image: string;
  nickname: string;
  grade: string;
}

export interface CommuniyComments {
  id: number;
  content: string;
  timestamp: string;
  nickname: string;
  profile_image: string;
}

export const getCommunityDetail = async (
  detailId: number = 2,
): Promise<Response> => {
  try {
    const res = await fetch(
      `https://user1710776235315.requestly.tech/community/detail/${detailId}`,
      { next: { tags: ['communityDetail'] } },
    );

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch getCommunityDetail');
  }
};
