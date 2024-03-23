import MypageView from '@/components/myPage/MapageView';
import { getMypage } from '@/apis/getMypage';
import { cookies } from 'next/headers';

export default async function Mypage() {
  const cookieStore = cookies();
  const email = cookieStore.get('email')?.value;

  if (email) {
    const res = await getMypage(email);

    return (
      <main className="relative min-h-screen">
        {/* <MypageView res={res} /> */}

        <MypageView UserInfoRes={res.response} />
      </main>
    );
  }
}
