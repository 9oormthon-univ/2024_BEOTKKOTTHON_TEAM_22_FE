import Header from '@/components/common/Header';
import UserInfo from '@/components/myPage/UserInfo';
import Nav from '@/components/common/Nav';
import CheckList from '@/components/myPage/CheckList';
import { cookies } from 'next/headers';
import { getChecklist } from '@/apis/getCheckList';
import React from 'react';
import { UserInfoData } from '@/apis/getMypage';

interface userInfo {
  UserInfoRes:UserInfoData;
}

export default async function MypageView({UserInfoRes}:userInfo) {
  const {nickname, grade, totalpoint} = UserInfoRes
  console.log(nickname,grade,totalpoint)
  const cookieStore = cookies();
  const userid = Number(cookieStore.get('userid')?.value);
  if (userid) {
    const checkListData = await getChecklist(userid);

    return (
      <>
        <Header title={'마이페이지'} />
        {UserInfoRes && (
          <div className={'px-[24px]'}>
            <UserInfo nickname={nickname} grade={grade} totalpoint={totalpoint}/>
            <CheckList checkLists={checkListData.response.checklists} />
          </div>
        )}
        <Nav />
      </>
    );
  }
}