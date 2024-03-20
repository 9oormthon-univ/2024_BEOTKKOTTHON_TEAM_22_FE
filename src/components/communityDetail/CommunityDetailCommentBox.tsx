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
  const { category } = commentData;

  return (
    <section className="min-h-[80vh] bg-white px-[24px]">
      {category === '질문' ? (
        <div className=" py-[20px]">
          <span className="font-semilbold text-[14px] text-[#d9d9d9]">
            팁 글은 댓글을 제공하지 않아요.
          </span>
        </div>
      ) : (
        <>
          <div className="pb-[20px] pt-[28px]">
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
        </>
      )}
    </section>
  );
};

export default CommunityDetailCommentBox;
