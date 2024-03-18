'use client';
import {useRouter} from "next/navigation";
import {XIcon} from "@/components/common/Icons";
import React from 'react';
import Image from 'next/image';

export default function LoginView() {
  const router = useRouter()

  return (
    <div className={'px-[24px]'}>
      <div className={'pt-6 , pb-8'}>
        <button onClick={() => router.push('/')}>
          <XIcon />
        </button>
      </div>
      <div className={'mt-32 flex'}>
        <Image className={'ml-[133px] mr-[133px]'} src={'/images/Logo.svg'} alt={'public/images/Logo.svg'} width={116} height={116}/>
      </div>
      <div className={'mt-16 mb-8'}>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='text'
               id={'email'}
               placeholder={'  이메일을 입력해주세요.'}
        />
      </div>
      <div className={'mt-8 mb-8'}>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='text'
               id={'email'}
               placeholder={'  비밀번호를 입력해주세요.'}
        />
      </div>
      <div className={'mb-8'}>
        <button type={'submit'}
                className={'w-[100%] text-white bg-mint rounded-[12px] h-16 hover:bg-lightGray'}>
          로그인
        </button>
      </div>
    </div>

  );
}
