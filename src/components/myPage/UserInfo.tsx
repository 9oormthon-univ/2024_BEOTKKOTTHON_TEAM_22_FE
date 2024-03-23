'use client';

import LogoutPopup from '@/components/myPage/LogoutPopup';
import { useEffect, useState } from 'react';
import { UserIcon } from '@/components/common/Icons';
import { UserImageList } from '@/components/myPage/UserImageList';
import Image from 'next/image';
import { removeAccessToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';

interface Props {
  nickname: string;
  grade: string;
}

export default function UserInfo({ nickname, grade }: Props) {
  const router = useRouter();
  const [isLogout, setLogout] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirmLogout = () => {
    removeAccessToken();
    setShowPopup(false);
    setLogout(true);
  };

  useEffect(() => {
    if (isLogout) {
      router.push('/');
    }
  }, [isLogout]);

  return (
    <>
      <div className={'mt-[44px] flex flex-nowrap'}>
        <div
          className={
            'flex h-[120px] w-[120px] items-center justify-center rounded-full border-[1px] border-lightGray'
          }
        >
          {UserImageList.map((i) => {
            if (grade === i.grade) {
              return (
                <Image
                  key={i.grade}
                  src={i.image}
                  alt={i.grade}
                  width={100}
                  height={100}
                />
              );
            }
            return null;
          })}
        </div>
        <div className={'ml-[20px] mt-10 flex-1'}>
          <p className={'items-center justify-center text-[24px] font-bold'}>
            {nickname}
          </p>
          <span className={'text-[16px]'}>{grade}</span>
        </div>
        <div className={'mt-10'}>
          <button
            className="h-[32px] w-[68px] rounded-[6px] bg-lightGray text-[14px] hover:border-[1px] hover:border-lightGray hover:bg-white hover:text-black "
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </div>
        {showPopup && (
          <LogoutPopup
            onCancel={handleCancel}
            onConfirm={handleConfirmLogout}
          />
        )}
      </div>
    </>
  );
}
