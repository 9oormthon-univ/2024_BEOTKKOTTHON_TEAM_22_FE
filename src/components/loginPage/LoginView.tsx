'use client';
import { useRouter } from 'next/navigation';
import { XIcon } from '@/components/common/Icons';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { setAccessToken } from '@/utils/auth';
import Link from 'next/link';

export default function LoginView() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (formData.email && formData.password) {
        const response = await axios.post(
          'http://test-env.eba-qhapwy3c.ap-northeast-2.elasticbeanstalk.com/api/login',
          formData,
        );
        if (response) {
          const accessToken = response.headers.authorization.split(' ')[1];
          const email = response.data.response.email;
          setAccessToken(accessToken, email);
          localStorage.setItem('user', JSON.stringify(response.data.response));
          setIsSuccess(true);
          router.push('/');
          alert('로그인 성공!');
        }
      } else {
        setIsSuccess(false);
        alert('이메일과 비밀번호를 다시 입력해주세요!');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <div className={'px-[24px]'}>
      <div className={', pb-8 pt-6'}>
        <button onClick={() => router.push('/')}>
          <XIcon />
        </button>
      </div>
      <div className={'mt-32 flex justify-center'}>
        <Image
          src={'/images/Logo.svg'}
          alt={'로그인 로고'}
          width={116}
          height={116}
        />
      </div>
      <div className={'mb-[16px] mt-[36px]'}>
        <input
          className="h-16 w-[100%] rounded-[12px] border-[1px] border-lightGray"
          type="text"
          value={formData.email}
          id={'email'}
          placeholder={'  이메일을 입력해주세요.'}
          onChange={handleEmailChange}
        />
      </div>
      <div className={'mb-[28px]'}>
        <input
          className="h-16 w-[100%] rounded-[12px] border-[1px] border-lightGray"
          type="password"
          value={formData.password}
          id={'password'}
          placeholder={'  비밀번호를 입력해주세요.'}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={'mb-[20px]'}>
        <button
          type={'submit'}
          onClick={handleSubmit}
          className={
            'h-16 w-[100%] rounded-[12px] bg-mint text-white hover:bg-darkMint'
          }
        >
          로그인
        </button>
      </div>
      <div className={'flex justify-center text-[16px]'}>
        <p className={'text-darkGray '}>아직 회원이 아니신가요?</p>
        <Link href={'join'}>
          <p className={'hover:text-darkmint pl-1 font-semibold text-mint'}>
            회원가입
          </p>
        </Link>
      </div>
    </div>
  );
}
