'use client';

import {useEffect, useState} from "react";
interface Props {
  onChange: (password: string) => void;
}
export default function InputPassword({onChange}:Props) {
  const [password, setPassword] = useState('');
  const [checkPw, setCheckPw] = useState('')
  const [isPassword, setIsPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleCheckPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckPw(value);
  };

  useEffect(() => {
    if (checkPw === password) {
      setIsPassword(true);
      onChange(password)
    } else {
      setIsPassword(false);
    }
  }, [checkPw, password]);



  return (
    <div className={'pb-5'}>
      <p className='pt-9 pb-3 text-[18px]'>비밀번호</p>
      <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
             type='password'
             id={'password'}
             onChange={handleChange}
             value={password}
             placeholder={'  8자리 이상 입력해주세요.'}/>
      <div className={'pt-4'}>
        <input
          onChange={handleCheckPw}
          value={checkPw}
          className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
          type='password'
          id={'password'}
          placeholder={'  비밀번호를 확인해주세요!'}/>
        {!isPassword && checkPw !== '' && (
          <p className={'text-lightGray pt-4'}>비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
    </div>
  )
    ;
}
