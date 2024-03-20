'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { BackArrowIcon } from './Icons';

const BackHeader = () => {
  const router = useRouter();

  const onClickBack = (): void => {
    router.back();
  };

  return (
    <header className="px-[24px] py-[32px]">
      <div
        onClick={onClickBack}
        className="cursor-pointer"
        style={{ width: 'fit-content' }}
      >
        <BackArrowIcon />
      </div>
    </header>
  );
};

export default BackHeader;
