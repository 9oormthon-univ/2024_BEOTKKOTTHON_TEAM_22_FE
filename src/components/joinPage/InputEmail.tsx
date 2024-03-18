'use client';
import React, {useState} from "react";
interface Props {
  onChange: (email: string) => void;
}
export default function InputEmail({onChange}:Props) {
  const [checkEmail, setCheckEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value)
  };



  return (
    <div>
      <div className={'flex-auto'}>
        <p className='pt-9 pb-3 text-[18px]'>이메일</p>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='text'
               id={'email'}
               placeholder={'  이메일을 입력해주세요.'}
               onChange={handleChange}
        />
      </div>
    </div>


  );
}
