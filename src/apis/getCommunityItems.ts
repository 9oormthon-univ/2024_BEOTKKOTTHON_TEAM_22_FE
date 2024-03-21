export interface Response {
  response: Community[];
}

export interface Community {
  id: number;
  category: string;
  title: string;
  image_url: string;
  bookmark_count: number;
  comment_count: number;
  timestamp: string;
}

export const getCommunityItems = async (): Promise<Response> => {
  try {
    const res = await fetch(
      `https://user1710776235315.requestly.tech/community/items`,
      { next: { tags: ['communityItems'] } },
    );

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('Failed to fetch getCommunityItems');
  }
};
