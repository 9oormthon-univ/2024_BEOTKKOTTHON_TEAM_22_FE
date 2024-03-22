'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function LoginPopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleCancle = () =>{
    setShowPopup(false)
  }

  useEffect(() => {

  }, [showPopup]);
  return (
    <>
      {showPopup && (
        <div className=" fixed inset-0 text-center flex justify-center items-center">
          <div className="w-[330px] h-[221px] bg-white rounded-[20px] border-[2px] border-lightGray">
            <h2 className="mt-[36px] text-[18px] font-bold">로그인이 필요한 서비스입니다.</h2>
            <h2 className="text-[18px] font-bold">로그인 하시겠습니까?</h2>
            <Link href={'/join'}>
              <p className="mb-[20px] mt-[8px] text-[16px] underline decoration-solid text-darkGray">회원가입</p>
            </Link>
            <div className="flex-auto mb-[28px] flex justify-center items-center gap-[20px]">
              <button
                onClick={handleCancle}
                className="w-[108px] h-[56px] border-[1px] border-lightGray text-black rounded-[12px] "
              >
                취소
              </button>
              <Link href={'/login'}>
                <button
                  className="w-[108px] h-[56px] bg-mint text-white rounded-[12px] border-lightGray"
                >
                  확인
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </>

  );
}