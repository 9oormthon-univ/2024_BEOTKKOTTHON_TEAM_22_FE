import Header from '@/components/common/Header';
import UserInfo from '@/components/myPage/UserInfo';
import Nav from '@/components/common/Nav';
import UserPoint from '@/components/myPage/UserPoint';
import CheckList from '@/components/myPage/CheckList';

export default function MypageView() {
  return (
    <>
      <Header title={'마이페이지'}/>
      <div className={'px-[24px]'}>
        <UserInfo/>
        <UserPoint/>
        <CheckList/>
        <Nav/>
      </div>
    </>

  );
}