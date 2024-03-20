import React from 'react';

import CommunityDetailContent from './CommunityDetailContent';
import CommunityDetailProfile from './CommunityDetailProfile';
import CommunityDetailCommentBox from './CommunityDetailCommentBox';

import type { Response } from '@/apis/getCommunityDetail';

interface CommunityDetailProps {
  detailData: Response;
}

const CommunityDetail = ({ detailData }: CommunityDetailProps) => {
  const data = detailData.response;

  return (
    <div className="bg-[#F2F2F2] ">
      <CommunityDetailContent contentData={data} />
      <CommunityDetailProfile profileData={data} />
      <CommunityDetailCommentBox commentData={data} />
    </div>
  );
};

export default CommunityDetail;
