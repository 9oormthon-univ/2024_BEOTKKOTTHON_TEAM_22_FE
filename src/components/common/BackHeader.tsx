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
    <header className="py-[32px] xs:px-[12px] md:px-[18px] lg:px-[24px]">
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
