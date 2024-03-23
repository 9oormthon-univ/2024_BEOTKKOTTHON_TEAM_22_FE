import { getMypage } from '@/apis/getMypage';
import { cookies } from 'next/headers';
import MypageView from '@/components/myPage/MypageView';

export default async function Mypage() {
  const cookieStore = cookies();
  const email = cookieStore.get('email')?.value;
  if (email) {
    const res = await getMypage(email);

    return (
      <main className="relative min-h-screen">
        <MypageView UserInfoRes={res.response}/>
      </main>
    );
  }
}
