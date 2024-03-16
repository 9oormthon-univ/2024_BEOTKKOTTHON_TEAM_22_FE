import React from 'react';
import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';

const Nav = () => {
  return (
    <nav className="mt-auto">
      <div className="absolute bottom-0 flex h-[82px] w-[100%] w-full items-center justify-between px-[20px]">
        <div className="flex flex-col items-center">
          <HomeIcon color="gray" />
          <span className="text-gray pt-[3px] text-[15px] ">홈</span>
        </div>
        <div className="flex flex-col items-center">
          <BookmarkIcon color="gray" />
          <span className="text-gray pt-[3px] text-[15px]">북마크</span>
        </div>
        <div className="flex flex-col items-center">
          <CommunityIcon color="gray" />
          <span className="text-gray pt-[3px] text-[15px]">커뮤니티</span>
        </div>
        <div className="flex flex-col items-center">
          <MypageIcon color="gray" />
          <span className="text-gray pt-[3px] text-[15px]">마이페이지</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
