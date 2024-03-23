'use client';

import React from 'react';
import { timeFormatBefore } from '@/utils/timeFormatChange';
import { BookmarkFilledColorIcon, CommentIcon } from '../common/Icons';
import { useRouter } from 'next/navigation';

const LikeItem = () => {
  const router = useRouter();

  const onClickItem = (itemId: number) => {
    router.push(`/community/${itemId}`);
  };

  return (
    <div
      // onClick={() => onClickItem(id)}
      className="mb-[16px] cursor-pointer rounded-[12px] border border-[#D9D9D9] px-[16px] py-[18px]"
    >
      <div className="flex flex-col">
        <span className="text-[14px]">질문</span>
        <div className="flex justify-between border-b border-[#D9D9D9]">
          <span className=" pb-[12px] text-[20px] font-semibold">타이틀</span>
          <div>
            <span>북마크</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-[16px]">
        {/* {category !== '팁' ? (
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
        )} */}

        <div className="flex items-center gap-[4px]">
          <BookmarkFilledColorIcon />
          <span className="pr-[8px] text-[14px]">33</span>
          <CommentIcon />
          <span className="text-[14px]">33</span>
        </div>

        <div>
          <span className="text-[14px]">45분전</span>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
