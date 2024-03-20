'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky bottom-0 z-50 bg-[#fff]">
      <div className="flex w-[100%] w-full items-center justify-between px-[23px]">
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
        <Link
          href="/mypage"
          className="flex cursor-pointer flex-col items-center py-[14px]"
        >
          <MypageIcon color={isActive('/mypage') ? '#3fe0d1' : '#7d7d7d'} />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/mypage') ? 'text-black' : 'text-gray'}`}
          >
            마이페이지
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
