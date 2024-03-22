'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BookmarkFilledColorIcon,
  ContentBookmarkIcon,
  ContentCommentIcon,
} from '../common/Icons';
import type { CommunityDetail } from '@/apis/getCommunityDetail';
import { timeFormatDate } from '@/utils/timeFormatChange';
import { expandImageState } from '@/recoil/expand';
import { useSetRecoilState } from 'recoil';

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
  const clickedImage = useSetRecoilState(expandImageState);

  const time = timeFormatDate(timestamp);

  const onClickBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setStauts((prev) => !prev);
    // api 호출
  };

  const onClickImage = (item: string) => {
    clickedImage(item);
  };

  return (
    <section className="mb-[12px] flex flex-col">
      <div className="mb-[4px] flex items-center justify-between bg-white pb-[12px] xs:px-[24px]">
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
      <div className="relative h-auto bg-white py-[16px] xs:px-[24px] ">
        <p className="text-[16px]">{content}</p>
        <p className="inline-block flex gap-[12px] overflow-x-auto pt-[16px] xs:max-w-[312px] sm:max-w-[327px] md:w-[380px] md:max-w-[380px]">
          {image_url.map((item, index) => (
            <Image
              onClick={() => onClickImage(item)}
              key={index}
              src={item}
              width="0"
              height="0"
              sizes="100vw"
              alt="content-image"
              priority
              loading="eager"
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              className="min-h-[148px] min-w-[148px] cursor-pointer"
            />
          ))}
        </p>
      </div>
      <div className="flex items-center justify-between bg-white px-[12px] py-[16px] xs:px-[24px]">
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
