'use client';
import { SearchIcon } from '@/components/common/Icons';
import BackHeader from '@/components/common/BackHeader';
import Link from 'next/link';
import { useState } from 'react';
import { router } from 'next/client';
import { useRouter } from 'next/navigation';

export default function SearchPageView() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleInputSubmit();
    }
  };

  const handleInputSubmit = () => {
    router.push(`/search/${inputValue}`)
    //api 연동

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
                 onKeyDown={handleInputKeyPress}
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