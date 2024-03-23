import { BASE_URL } from '.';
import axios from 'axios';

export const postCommunityDetail = async (formData: FormData) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/community/question`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    const data = await res.data;

    return data;
  } catch (err) {
    throw new Error('Failed to fetch...');
  }
};
