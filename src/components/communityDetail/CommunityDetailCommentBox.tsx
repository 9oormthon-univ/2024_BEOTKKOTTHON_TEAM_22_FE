import React from 'react';

import CommunityDetailCommentForm from './CommunityDetailCommentForm';
import CommunityDetailCommentItem from './CommunityDetailCommentItem';
import type { CommunityDetail } from '@/apis/getCommunityDetail';

interface CommunityDetailCommentBoxProps {
  commentData: CommunityDetail;
}

const CommunityDetailCommentBox = ({
  commentData,
}: CommunityDetailCommentBoxProps) => {
  return (
    <section className="xs:px-[24px] min-h-[80vh] bg-white">
      <div className=" pb-[20px] pt-[28px] ">
        <span className="font-semilbold text-[24px]">댓글</span>
      </div>
      <CommunityDetailCommentForm />
      {commentData.comments.map((item, index) => (
        <CommunityDetailCommentItem
          key={item.id}
          item={item}
          isLastItem={index === commentData.comments.length - 1}
        />
      ))}
    </section>
  );
};

export default CommunityDetailCommentBox;
