'use client';
import InputNickName from '@/components/joinPage/InputNickName';
import InputEmail from '@/components/joinPage/InputEmail';
import { XIcon } from '@/components/common/Icons';
import InputPassword from '@/components/joinPage/InputPassword';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { number } from 'prop-types';

export default function JoinView() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
    totalpoint: 0,
    grade: 'level.1',
  });

  const handleEmailChange = (email: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: email,
    }));
  };

  const handleNicknameChange = (nickname: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      nickname: nickname,
    }));
  };

  const handlePasswordChange = (password: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: password,
    }));
  };
  const handleSubmit = async () => {
    try {
      if (formData.email && formData.password && formData.nickname) {
        const response = await axios.post(
          'http://test-env.eba-qhapwy3c.ap-northeast-2.elasticbeanstalk.com/api/signup',
          formData,
        );
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
        alert('다시 입력해주세요!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      router.push('/login');
    }
  }, [isSuccess]);

  return (
    <>
      <div className={'px-[24px]'}>
        <div className={', pb-8 pt-6'}>
          <button onClick={() => router.push('/')}>
            <XIcon />
          </button>
        </div>
        <div className={' pb-8 pt-5 text-[28px]'}>
          <h1 className={'text-left font-bold '}>집안일 요정이</h1>
          <h1 className={'text-left font-bold '}>처음이신가요?</h1>
        </div>
        <InputNickName onChange={handleNicknameChange} />
        <InputEmail onChange={handleEmailChange} />
        <InputPassword onChange={handlePasswordChange} />
      </div>
      <div className={'pt-32'}>
        <button
          type={'submit'}
          onClick={handleSubmit}
          className={
            'h-[82px] w-[100%] bg-mint text-[20px] font-semibold text-white hover:bg-darkMint'
          }
        >
          회원가입하기
        </button>
      </div>
    </>
  );
}
