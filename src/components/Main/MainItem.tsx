'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { TipsRanking } from '@/apis/getRankingTips';
import { BookmarkFilledColorIcon } from '../common/Icons';

interface MainItemProps {
  item: TipsRanking;
}

const MainItem = ({ item }: MainItemProps) => {
  const { title, image_url, nickname, bookmark_counts, bookmark_status } = item;

  const [status, setStauts] = useState<boolean>(bookmark_status);

  const onClickBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setStauts((prev) => !prev);
    // api 호출
  };

  return (
    <div className="xs:w-[165px] cursor-pointer flex-col sm:w-[170px] md:w-[180px]">
      <div className="relative pb-[8px]">
        <Image
          src={image_url}
          width="0"
          height="0"
          sizes="100vw"
          alt="tips-image"
          priority
          loading="eager"
          style={{
            objectFit: 'cover',
            borderRadius: '10px',
          }}
          className="
            rounded-3 xs:h-[165px] xs:min-h-[165px] xs:w-[165px] xs:min-w-[165px] sm:h-[170px] sm:min-h-[170px] sm:w-[170px] sm:min-w-[170px]
            md:h-[180px] md:min-h-[180px] md:w-[180px] md:min-w-[180px]
            "
        />
        <div
          onClick={onClickBookmark}
          className="xs:right-[12px] xs:top-[10px] absolute right-[24px] top-[12px] z-50 cursor-pointer  sm:right-[12px] sm:top-[12px]"
        >
          {status ? (
            <BookmarkFilledColorIcon size={18} height={24} color="#3FE1D1" />
          ) : (
            <BookmarkFilledColorIcon size={18} height={24} />
          )}
        </div>
      </div>
      <div>
        <div className="truncate pb-[4px] text-[16px] font-semibold">
          {title}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[14px]">{nickname}</span>
          <div className="flex items-center gap-[4px]">
            <BookmarkFilledColorIcon />
            <span className="text-[12px]">
              {bookmark_counts > 99 ? '99+' : bookmark_counts}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
