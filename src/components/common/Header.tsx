import React from 'react';
import { LogoIcon, SearchIcon, AlertIcon } from './Icons';

const Header = () => {
  return (
    <header className="flex h-[68px] w-[100%] items-center justify-between px-[24px]">
      <LogoIcon />
      <div className="flex items-center gap-[20px]">
        <SearchIcon />
        <AlertIcon />
      </div>
    </header>
  );
};

export default Header;
