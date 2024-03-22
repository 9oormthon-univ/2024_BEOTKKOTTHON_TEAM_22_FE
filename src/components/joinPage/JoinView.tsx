
'use client';
import InputNickName from "@/components/joinPage/InputNickName";
import InputEmail from "@/components/joinPage/InputEmail";
import {XIcon} from "@/components/common/Icons";
import InputPassword from "@/components/joinPage/InputPassword";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function JoinView() {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
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
  const handleSubmit = async ()=>{
    try{
      if (formData.email && formData.password && formData.nickname){
        const response = await axios.post('/user/signup', formData);
        setIsSuccess(true)
        console.log('성공',formData)
      }else {
        setIsSuccess(false)
        alert('다시 입력해주세요!')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (isSuccess){
      router.push('/login');
    }
  }, [isSuccess]);

  return (
    <>
      <div className={'px-[24px]'}>
        <div className={'pt-6 , pb-8'}>
          <button onClick={()=> router.push('/')}>
            <XIcon/>
          </button>
        </div>
        <div className={" pt-5 pb-8 text-[28px]"}>
          <h1 className={'text-left font-bold '}>집안일 요정이</h1>
          <h1 className={'text-left font-bold '}>처음이신가요?</h1>
        </div>
        <InputNickName onChange={handleNicknameChange}/>
        <InputEmail onChange={handleEmailChange}/>
        <InputPassword onChange={handlePasswordChange}/>
      </div>
      <div className={'pt-32'}>
        <button type={'submit'}
                onClick={handleSubmit}
                className={'w-[100%] text-[20px] text-white font-semibold bg-mint h-[82px] hover:bg-darkMint'}>
          회원가입하기
        </button>
      </div>
    </>


  );
}
