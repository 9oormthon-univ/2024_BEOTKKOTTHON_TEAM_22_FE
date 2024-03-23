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
    <section className="min-h-[80vh] bg-white xs:px-[24px]">
      <div className=" pb-[20px] pt-[28px] ">
        <span className="font-semilbold text-[24px]">댓글</span>
      </div>
      <CommunityDetailCommentForm />
    </section>
  );
};

export default CommunityDetailCommentBox;
