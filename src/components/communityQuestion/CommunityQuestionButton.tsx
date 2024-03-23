'use client';

import React from 'react';
import { RightArrowIcon } from '../common/Icons';

import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/utils/auth';
import { useRecoilState } from 'recoil';
import { showPopupState } from '@/recoil/showPopup';

const CommunityQuestionButton = () => {
  const [_popupState, setPopupState] = useRecoilState(showPopupState);
  const router = useRouter();

  const onClickButton = () => {
    const accessToken = getAccessToken();

    if (accessToken) {
      setPopupState(false);
      router.push(`/community/question`);
    } else {
      setPopupState(true);
    }
  };

  return (
    <div
      onClick={onClickButton}
      className="my-[20px] flex h-[82px] w-full cursor-pointer items-center justify-between rounded-[12px] bg-[#3ddacb] px-[16px]"
    >
      <div className="flex flex-col">
        <span className="text-[14px] text-[#fff]">원하는 정보가 없다면?</span>
        <span className="text-[20px] font-semibold text-[#fff]">질문하기</span>
      </div>
      <RightArrowIcon />
    </div>
  );
};

export default CommunityQuestionButton;
