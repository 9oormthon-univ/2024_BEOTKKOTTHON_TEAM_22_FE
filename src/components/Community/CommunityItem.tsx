'use client';

import React from 'react';
import type { Community } from '@/apis/getCommunityItems';
import { BookmarkFilledColorIcon, CommentIcon } from '../common/Icons';
import { useRouter } from 'next/navigation';

interface CommunityItemProps {
  item: Community;
}

const CommunityItem = ({ item }: CommunityItemProps) => {
  const { id, category, title, bookmark_count, timestamp, comment_count } =
    item;

  const router = useRouter();

  const onClickItem = (itemId: number) => {
    router.push(`/community/${itemId}`);
  };

  return (
    <div
      onClick={() => onClickItem(id)}
      className="mb-[16px] cursor-pointer rounded-[12px] border border-[#D9D9D9] px-[16px] py-[18px]"
    >
      <div className="flex flex-col">
        <span className="text-[14px]">{category}</span>
        <span className="border-b border-[#D9D9D9] pb-[12px] text-[20px] font-semibold">
          {title}
        </span>
      </div>
      <div className="flex justify-between pt-[16px]">
        {category !== '팁' ? (
          <div className="flex items-center gap-[4px]">
            <BookmarkFilledColorIcon />
            <span className="pr-[8px] text-[14px]">
              {bookmark_count > 99 ? '99+' : bookmark_count}
            </span>
            <CommentIcon />
            <span className="text-[14px]">
              {comment_count > 99 ? '99+' : comment_count}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-[4px]">
            <BookmarkFilledColorIcon />
            <span className="text-[14px]">
              {bookmark_count > 99 ? '99+' : bookmark_count}
            </span>
          </div>
        )}

        <div>
          <span className="text-[14px]">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityItem;
