import { BASE_URL } from '@/apis/index';

export interface Response {
  response: ChecklistData;
}

export interface ChecklistData {
  checklists:DataProps[]
}

export interface DataProps{
  id: number,
  title:string,
  completed: boolean,
}

export const getChecklist = async (userid: number): Promise<Response> => {
  try {
    console.log(userid)
    const res = await fetch(`${BASE_URL}/api/mypage/checklist/${userid}`,{
      next: {tags: ['updateCheckList']}
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch getCheckList');
  }
};