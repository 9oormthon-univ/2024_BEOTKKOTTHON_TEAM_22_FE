'use client';

import { usePathname } from 'next/navigation';
import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky bottom-0 z-50 bg-[#fff]">
      <div className="flex h-[82px] w-[100%] w-full items-center justify-between px-[23px]">
        <div className="flex flex-col items-center py-[14px]">
          <HomeIcon color={isActive('/') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[3px] text-[13px]">홈</span>
        </div>
        <div className="flex flex-col items-center">
          <BookmarkIcon color={isActive('/like') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[6px] text-[13px]">북마크</span>
        </div>
        <div className="flex flex-col items-center">
          <CommunityIcon
            color={isActive('/community') ? '#3fe0d1' : '#7d7d7d'}
          />
          <span className="text-gray pt-[6px] text-[13px]">커뮤니티</span>
        </div>
        <div className="flex flex-col items-center">
          <MypageIcon color={isActive('/mypage') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[6px] text-[13px]">마이페이지</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
