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
    <div className="cursor-pointer flex-col">
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
          className="rounded-3 h-[180px] min-w-[180px]"
        />
        <div
          onClick={onClickBookmark}
          className="absolute right-[16px] top-[16px] z-50 cursor-pointer"
        >
          {status ? (
            <BookmarkFilledColorIcon size={18} height={24} />
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
            <span className="text-[12px]">{bookmark_counts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
