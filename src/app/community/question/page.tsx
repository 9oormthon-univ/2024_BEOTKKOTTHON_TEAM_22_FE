import React from 'react';

import BackHeader from '@/components/common/BackHeader';
import CommunityQuestionForm from '@/components/communityQuestion/CommunityQuestionForm';

const page = () => {
  return (
    <section>
      <BackHeader />
      <div className="px-[24px] pb-[24px]">
        <span className="text-[24px] font-semibold">질문하기</span>
      </div>
      <CommunityQuestionForm />
    </section>
  );
};

export default page;
