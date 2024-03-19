'use client';
import React, {useState} from "react";
interface Props {
  onChange: (email: string) => void;
}
export default function InputNickName({onChange}:Props) {
  const [checkEmail, setCheckEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value)
  };



  return (
    <div>
      <div className={'flex-auto'}>
        <p className='pt-9 pb-3 text-[18px]'>닉네임</p>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='text'
               id={'nickname'}
               placeholder={'  닉네임을 입력해주세요.'}
               onChange={handleChange}
        />
      </div>
    </div>


  );
}
