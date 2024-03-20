import React from 'react';
import Image from 'next/image';

import type { CommuniyComments } from '@/apis/getCommunityDetail';
import { timeFormatBefore } from '@/utils/timeFormatChange';

interface CommunityDetailCommentItemProps {
  item: CommuniyComments;
  isLastItem: boolean;
}

const CommunityDetailCommentItem = ({
  item,
  isLastItem,
}: CommunityDetailCommentItemProps) => {
  const { content, timestamp, nickname, profile_image } = item;

  const time = timeFormatBefore(timestamp);

  const isLastContainer = isLastItem
    ? 'flex items-center py-[23px]'
    : 'flex items-center border-b border-[#d9d9d9] py-[23px]';

  return (
    <div className={isLastContainer}>
      <div className="mb-[10px] pr-[10px]">
        <Image
          src={profile_image}
          width="0"
          height="0"
          sizes="100vw"
          alt="user-profile-image"
          priority
          loading="eager"
          style={{
            objectFit: 'cover',
          }}
          className="h-[36px] min-w-[36px] rounded-[50%]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-end gap-[6px] pb-[4px]">
          <span className="text-[18px] font-semibold">{nickname}</span>
          <span className="text-[14px] text-[#8d8d8d]">{time}</span>
        </div>
        <div>
          <p className="text-[16px]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailCommentItem;
