'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import { getExpandImageRecoil, expandImageState } from '@/recoil/expand';

import type { Response } from '@/apis/getCommunityDetail';

import BackHeader from '../common/BackHeader';
import CommunityDetailContent from './CommunityDetailContent';
import CommunityDetailProfile from './CommunityDetailProfile';
import CommunityDetailCommentBox from './CommunityDetailCommentBox';
import { useSetRecoilState } from 'recoil';

interface CommunityDetailProps {
  detailData: Response;
}

const CommunityDetail = ({ detailData }: CommunityDetailProps) => {
  const data = detailData.questions;

  const clickedImage = getExpandImageRecoil();
  const setExpandImage = useSetRecoilState(expandImageState);

  const onCancelImage = () => {
    setExpandImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 50);
  }, [clickedImage]);

  return (
    <>
      {clickedImage ? (
        <>
          <div className="opacity-[0.6] blur-[4px]">
            <BackHeader />
          </div>
          <div className="relative bg-[#F2F2F2]">
            <div className="opacity-1 absolute left-0 right-0 top-0 z-50 flex min-h-screen flex-col items-center justify-center">
              <Image
                src={clickedImage}
                width="0"
                height="0"
                sizes="100vw"
                alt="content-image"
                priority
                loading="eager"
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.5s ease',
                }}
                className="max-h-[280px] w-[350px] min-w-[350px]"
              />
              <span
                onClick={onCancelImage}
                className="mt-[10px] cursor-pointer text-[14px] font-semibold"
              >
                닫기
              </span>
            </div>
            <div className="opacity-[0.6] blur-[2px]">
              <CommunityDetailContent contentData={data} />
              <CommunityDetailProfile profileData={data} />
              {data.category === '질문' ? (
                <CommunityDetailCommentBox commentData={data} />
              ) : (
                <div>추천 상품</div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <BackHeader />
          <div className="bg-[#F2F2F2]">
            <CommunityDetailContent contentData={data} />
            <CommunityDetailProfile profileData={data} />
            {data.category === '질문' ? (
              <CommunityDetailCommentBox commentData={data} />
            ) : (
              <div>추천 상품</div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CommunityDetail;
