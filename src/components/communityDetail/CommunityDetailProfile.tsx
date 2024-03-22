import React from 'react';
import Image from 'next/image';

import type { CommunityDetail } from '@/apis/getCommunityDetail';

interface CommunityDetailProfileProps {
  profileData: CommunityDetail;
}

const CommunityDetailProfile = ({
  profileData,
}: CommunityDetailProfileProps) => {
  const { profile_image, nickname, grade } = profileData.user;

  return (
    <section className="xs:px-[24px] mb-[12px] flex items-center bg-white py-[20px]">
      <div className="pr-[14px]">
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
          className="h-[73px] min-w-[73px] rounded-[50%]"
        />
      </div>
      <div className="jutify-start flex flex-col">
        <div>
          <span className="text-[18px] font-semibold">{nickname}</span>
        </div>
        <div>
          <span className="text-[14px]">{grade}</span>
        </div>
      </div>
    </section>
  );
};

export default CommunityDetailProfile;
