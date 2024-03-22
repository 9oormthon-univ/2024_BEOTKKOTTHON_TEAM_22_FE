'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';
import { getAccessToken, getEmailFromAccessToken } from '@/utils/auth';
import { useState } from 'react';
import LoginPopup from '@/components/common/LoginPopup';


const Nav = () => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => {
    const currentPath = pathname;
    const escapedPath = path.replace(/\//g, '\\/').replace(/\*/g, '.*'); // 정규식 특수 문자를 이스케이프합니다.
    const regex = new RegExp(`^${escapedPath}(\/[a-zA-Z0-9]+)?\/?$`);
    return regex.test(currentPath);
  };

  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태 state

  const handleLinkClick = () => {
    const accessToken = getAccessToken();
    console.log('accessToken',accessToken)
    if (accessToken) {
      console.log('accessToken',accessToken)
      const userEmail = getEmailFromAccessToken();
      // access_token이 있는 경우 해당 URL로 이동
      router.push(`/mypage/${userEmail}`);
    } else {
      // access_token이 없는 경우 팝업 컴포넌트 띄우기
      setShowPopup(true);
    }
  };

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 bg-[#fff]">
      <div className="flex w-[100%] w-full items-center justify-between px-[30px] md:px-[23px]">
        <Link
          href="/"
          className="flex cursor-pointer flex-col items-center py-[14px]"
        >
          <HomeIcon color={isActive('/') ? '#3fe0d1' : '#7d7d7d'} />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/') ? 'text-black' : 'text-gray'}`}
          >
            홈
          </span>
        </Link>
        <Link
          href="/like"
          className="flex cursor-pointer flex-col items-center py-[14px]"
        >
          <BookmarkIcon color={isActive('/like') ? '#3fe0d1' : '#7d7d7d'} />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/like') ? 'text-black' : 'text-gray'}`}
          >
            북마크
          </span>
        </Link>
        <Link
          href="/community"
          className="flex cursor-pointer flex-col items-center py-[14px]"
        >
          <CommunityIcon
            color={isActive('/community') ? '#3fe0d1' : '#7d7d7d'}
          />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/community') ? 'text-black' : 'text-gray'}`}
          >
            Q&A
          </span>
        </Link>

        <div
          className="flex cursor-pointer flex-col items-center py-[14px]"
          onClick={handleLinkClick}
        >
          <MypageIcon color={isActive('/mypage') ? '#3fe0d1' : '#7d7d7d'} />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/mypage') ? 'text-black' : 'text-gray'}`}
          >
            마이페이지
          </span>
        </div>
        {showPopup && <LoginPopup/>}
      </div>
    </nav>
  );
};

export default Nav;
