import React from 'react';
import Link from 'next/link';
import { LogoIcon, SearchIcon, AlertIcon } from './Icons';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex h-[68px] w-[100%] items-center justify-between px-[24px]">
      <Link href="/" className="cursor-pointer">
        <LogoIcon />
      </Link>
      {title && (
        <div>
          <span className="text-[20px] font-semibold">{title}</span>
        </div>
      )}

      <div className="flex items-center gap-[20px]">
        <Link href={'/search'}>
          <SearchIcon />
        </Link>
        <AlertIcon />
      </div>
    </header>
  );
};

export default Header;
