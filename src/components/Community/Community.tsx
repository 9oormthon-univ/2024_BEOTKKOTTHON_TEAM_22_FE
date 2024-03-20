import React from 'react';

import CommunityBox from './CommunityBox';

import type { Response } from '@/apis/getCommunityItems';

interface CommunityProps {
  communites: Response;
}

const Community = ({ communites }: CommunityProps) => {
  return (
    <>
      <CommunityBox communites={communites.response} />
    </>
  );
};

export default Community;
