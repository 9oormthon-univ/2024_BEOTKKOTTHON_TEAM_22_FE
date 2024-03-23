import { BASE_URL } from '@/apis/index';

export interface SearchData {
  id:number,
  title: string,
  category:CategoryProps,
  content: string,
  recommendations:RecommendationProps[]
  grade: string,
}

export interface RecommendationProps {
  id:number,
  name: string,
  description: string,
  tip: string,
}
export interface CategoryProps {
  id:number,
  name: string,
}

export const getSearch = async (keyword: string): Promise<SearchData> => {
  try {
    const res = await fetch(`${BASE_URL}/tips/search?keyword=${keyword}`);

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    console.log("getSearch_Data",data);

    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch getSearch');
  }
};