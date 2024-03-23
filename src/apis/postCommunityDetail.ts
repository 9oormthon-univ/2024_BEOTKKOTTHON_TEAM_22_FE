import { BASE_URL } from '.';

interface postCommunityDetailProps {
  title: string;
  content: string;
  email: string;
  imageurl: string[];
}

export const postCommunityDetail = async (
  formData: postCommunityDetailProps,
) => {
  try {
    const res = await fetch(`${BASE_URL}/api/community/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('Failed to fetch getRankingTips');
  }
};
