'use client';
import LogoutPopup from '@/components/myPage/LogoutPopup';
import { useState } from 'react';
import {UserIcon } from '@/components/common/Icons';


export default function UserInfo() {
  const [showPopup, setShowPopup] = useState(false);
  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirmLogout = () => {
    // 쿠키 삭제 로직 추가
    console.log("로그아웃 되었습니다.");
    setShowPopup(false);
  };

  return (
    <>
        <div className={'flex flex-nowrap mt-[44px]'}>
          <div
            className={'w-[120px] h-[120px] flex justify-center items-center rounded-full border-[1px] border-lightGray'}>
            <UserIcon />
          </div>
          <div className={'flex-1 ml-[20px] mt-10'}>
            <p className={'font-bold text-[24px] justify-center items-center'}>닉네임</p>
            <span className={'text-[16px]'}>등급</span>
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
