'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky bottom-0 z-50 bg-[#fff]">
      <div className="flex h-[82px] w-[100%] w-full items-center justify-between px-[23px]">
        <Link
          href="/"
          className="py-[14px flex cursor-pointer flex-col items-center"
        >
          <HomeIcon color={isActive('/') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[3px] text-[13px]">홈</span>
        </Link>
        <Link
          href="/like"
          className="py-[14px flex cursor-pointer flex-col items-center"
        >
          <BookmarkIcon color={isActive('/like') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[6px] text-[13px]">북마크</span>
        </Link>
        <Link
          href="/community"
          className="py-[14px flex cursor-pointer flex-col items-center"
        >
          <CommunityIcon
            color={isActive('/community') ? '#3fe0d1' : '#7d7d7d'}
          />
          <span className="text-gray pt-[6px] text-[13px]">Q&A</span>
        </Link>
        <Link
          href="/mypage"
          className="py-[14px flex cursor-pointer flex-col items-center"
        >
          <MypageIcon color={isActive('/mypage') ? '#3fe0d1' : '#7d7d7d'} />
          <span className="text-gray pt-[6px] text-[13px]">마이페이지</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
