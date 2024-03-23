import { BASE_URL } from '.';

export interface Response {
  questions: CommunityDetail;
}

export interface CommunityDetail {
  id: number;
  category: string;
  title: string;
  content: string;
  image_url: string[];
  bookmarkstatus: boolean;
  bookmarkcount: number;
  commentcount: number;
  profile_image: string;
  timestamp: string;
  email: string;
  nickname: string;
  comments: CommuniyComments[];
}

export interface CommuniyComments {
  commnetid: number;
  content: string;
  timestamp: string;
  nickname: string;
  profile_image: string;
}

export const getCommunityDetail = async (
  detailId: number,
): Promise<Response> => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/community/items/details/${detailId}`,
      {
        next: { tags: ['communityDetail'] },
      },
    );

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data.response;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch getCommunityDetail');
  }
};
