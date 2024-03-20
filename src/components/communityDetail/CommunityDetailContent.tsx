'use client';

import React, { useState } from 'react';
import {
  BookmarkFilledColorIcon,
  ContentBookmarkIcon,
  ContentCommentIcon,
} from '../common/Icons';
import type { CommunityDetail } from '@/apis/getCommunityDetail';
import { timeFormatDate } from '@/utils/timeFormatChange';

interface CommunityDetailContentProps {
  contentData: CommunityDetail;
}

const CommunityDetailContent = ({
  contentData,
}: CommunityDetailContentProps) => {
  const {
    title,
    bookmark_status,
    content,
    image_url,
    bookmark_count,
    comment_count,
    timestamp,
  } = contentData;

  const [status, setStauts] = useState<boolean>(bookmark_status);

  const time = timeFormatDate(timestamp);

  const onClickBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setStauts((prev) => !prev);
    // api 호출
  };

  return (
    <section className="mb-[12px] flex flex-col">
      <div className="mb-[4px] flex items-center justify-between bg-white px-[24px]  pb-[12px]">
        <span className="text-[20px] font-semibold">{title}</span>
        {/* 내 글이라면 북마크 => 수정 버튼 */}
        <div onClick={onClickBookmark} className="cursor-pointer">
          {status ? (
            <BookmarkFilledColorIcon size={21} height={28} color="#3FE1D1" />
          ) : (
            <BookmarkFilledColorIcon size={21} height={28} />
          )}
        </div>
      </div>
      <div className="h-auto bg-white px-[24px] py-[16px]">
        <p className="text-[16px]">{content}</p>
      </div>
      <div className="flex items-center justify-between bg-white px-[24px] py-[16px]">
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[3px]">
            <ContentBookmarkIcon />
            <span className="text-[14px]">
              {bookmark_count > 99 ? '99+' : bookmark_count}
            </span>
          </div>
          <div className="flex items-center gap-[3px]">
            <ContentCommentIcon />
            <span className="text-[14px]">
              {comment_count > 99 ? '99+' : comment_count}
            </span>
          </div>
        </div>
        <div>
          <span className="text-[14px] text-[#8D8D8D]">{time}</span>
        </div>
      </div>
    </section>
  );
};

export default CommunityDetailContent;
