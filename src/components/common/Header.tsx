import React from 'react';
import { LogoIcon, SearchIcon, AlertIcon } from './Icons';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex h-[68px] w-[100%] items-center justify-between px-[24px]">
      <LogoIcon />
      {title && (
        <div>
          <span className="text-[20px] font-semibold">{title}</span>
        </div>
      )}

      <div className="flex items-center gap-[20px]">
        <SearchIcon />
        <AlertIcon />
      </div>
    </header>
  );
};

export default Header;
