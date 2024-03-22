'use client';
import { SearchIcon } from '@/components/common/Icons';
import BackHeader from '@/components/common/BackHeader';
import Link from 'next/link';
import { id } from 'postcss-selector-parser';
import { useState } from 'react';

export default function SearchPageView() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };



  return (
    <>
      <BackHeader/>
      <div className={'px-[24px]'}>
        <div className={'mt-[91.69px] mb-[24px] font-semibold text-[28px]'}>
          <p>무엇을</p>
          <p>찾으시나요?</p>
        </div>
        <div className={' flex w-[100%] h-[64px] text-darkGray rounded-[12px] border-mint border-[2px]'}>
          <input type={'text'}
                 value={inputValue}
                 onChange={handleChange}
                 placeholder={' 검색어를 입력해주세요'}
                 className={'m-[10px] w-full outline-none'}/>
          <div className={'m-auto py-[20px] px-[15px]'}>
            <Link href={`/search/${inputValue}`}>
              <SearchIcon/>
            </Link>
          </div>
        </div>
      </div>

    </>

  );
}