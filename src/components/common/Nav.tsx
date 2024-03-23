'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HomeIcon, BookmarkIcon, CommunityIcon, MypageIcon } from './Icons';
import { getAccessToken } from '@/utils/auth';
import LoginPopup from '@/components/common/LoginPopup';
import { showPopupState } from '@/recoil/showPopup';
import { useRecoilState } from 'recoil';

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => {
    const currentPath = pathname;
    const escapedPath = path.replace(/\//g, '\\/').replace(/\*/g, '.*');
    const regex = new RegExp(`^${escapedPath}(\/[a-zA-Z0-9]+)?\/?$`);
    return regex.test(currentPath);
  };

  const accessToken = getAccessToken();
  const router = useRouter();
  const [popupState, setPopupState] = useRecoilState(showPopupState);

  const handleLinkClick = (pageName: string) => {
    if (accessToken) {
      setPopupState(false);
      router.push(`/${pageName}`);
    } else {
      setPopupState(true);
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

        <div>
          <div
            className="flex cursor-pointer flex-col items-center py-[14px]"
            onClick={() => handleLinkClick('like')}
          >
            <BookmarkIcon color={isActive('/like') ? '#3fe0d1' : '#7d7d7d'} />
            <span
              className={`pt-[6px] text-[13px] ${isActive('/like') ? 'text-black' : 'text-gray'}`}
            >
              북마크
            </span>
          </div>
          {popupState && <LoginPopup />}
        </div>
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
          onClick={() => handleLinkClick('mypage')}
        >
          <MypageIcon color={isActive('/mypage') ? '#3fe0d1' : '#7d7d7d'} />
          <span
            className={`pt-[6px] text-[13px] ${isActive('/mypage') ? 'text-black' : 'text-gray'}`}
          >
            마이페이지
          </span>
        </div>
        {popupState && <LoginPopup />}
      </div>
    </nav>
  );
};

export default Nav;
