import React from 'react';

import BackHeader from '@/components/common/BackHeader';
import CommunityDetail from '@/components/communityDetail/CommunityDetail';
import Nav from '@/components/common/Nav';

import { getCommunityDetail } from '@/apis/getCommunityDetail';

interface DetailPageProps {
  params: {
    id: number;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const communityId = Number(params.id);

  const detailData = await getCommunityDetail(communityId);

  return (
    <section className="min-h-screen">
      <BackHeader />
      {detailData && <CommunityDetail detailData={detailData} />}
      <Nav />
    </section>
  );
}
