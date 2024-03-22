'use client';

import LogoutPopup from '@/components/myPage/LogoutPopup';
import { useEffect, useState } from 'react';
import {UserIcon } from '@/components/common/Icons';
import { UserImageList } from '@/components/myPage/UserImageList';
import Image from 'next/image';
import { removeAccessToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';


interface Props {
  nickname: string,
  grade : string
}


export default function UserInfo({nickname,grade}:Props) {
  const router = useRouter()
  const [isLogout, setLogout] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirmLogout = () => {
    removeAccessToken();
    console.log("로그아웃 되었습니다.");
    setShowPopup(false);
    setLogout(true)
  };

  useEffect(() => {
    if (isLogout){
      router.push('/');
    }
  }, [isLogout]);

  return (
    <>
        <div className={'flex flex-nowrap mt-[44px]'}>
          <div
            className={'w-[120px] h-[120px] flex justify-center items-center rounded-full border-[1px] border-lightGray'}>
            {UserImageList.map((i) => {
              if (grade === i.grade) {
                return (
                  <Image key={i.grade} src={i.image} alt={i.grade} width={100} height={100} />
                );
              }
              return null;
            })}
          </div>
          <div className={'flex-1 ml-[20px] mt-10'}>
            <p className={'font-bold text-[24px] justify-center items-center'}>{nickname}</p>
            <span className={'text-[16px]'}>{grade}</span>
          </div>
          <div className={'mt-10'}>
            <button
              className="bg-lightGray text-[14px] w-[68px] h-[32px] rounded-[6px] hover:bg-white hover:text-black hover:border-lightGray hover:border-[1px] "
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        {showPopup && (
          <LogoutPopup onCancel={handleCancel} onConfirm={handleConfirmLogout} />
        )}
      </div>
    </>

  );
}
