import React from 'react';
import CommunityItem from './CommunityItem';

import type { Community } from '@/apis/getCommunityItems';

interface CommunityBoxProps {
  communites: Community[];
}

const CommunityBox = ({ communites }: CommunityBoxProps) => {
  return (
    <>
      {communites.map((item) => (
        <CommunityItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CommunityBox;
