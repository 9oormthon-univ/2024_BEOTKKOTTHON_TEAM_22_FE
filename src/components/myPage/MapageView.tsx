'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import UserInfo from '@/components/myPage/UserInfo';
import Nav from '@/components/common/Nav';
import CheckList from '@/components/myPage/CheckList';
import { getMypage, UserInfoData, Response } from '@/apis/getMypage';
import { getuserInfo } from '@/utils/auth';

export default async function MypageView() {
  return (
    <>
      <Header title={'마이페이지'} />
      {/* {userData && (
        <div className={'px-[24px]'}>
          <UserInfo userData={userData} />
          <CheckList />
        </div>
      )} */}
      <Nav />
    </>
  );
}
