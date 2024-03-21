'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import UserInfo from '@/components/myPage/UserInfo';
import Nav from '@/components/common/Nav';
import UserPoint from '@/components/myPage/UserPoint';
import CheckList from '@/components/myPage/CheckList';
import axios from 'axios';
import LoginPopup from '@/components/common/LoginPopup';

interface UserData {
  nickname: string;
  totalpoint: number;
  grade: string;
}


export default function MypageView() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // API 호출
    axios.get('/mypage')
      .then(response => {
        const responseData = response.data.response;
        setUserData(responseData); // 데이터 설정
        console.log('api 받아오기',userData)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header title={'마이페이지'}/>
      {userData && (
        <div className={'px-[24px]'}>
          <UserInfo nickname={userData.nickname} grade={userData.grade}/>
          <UserPoint point={userData.totalpoint} />
          <CheckList/>
          <Nav />
        </div>
      )}
    </>

  );
}