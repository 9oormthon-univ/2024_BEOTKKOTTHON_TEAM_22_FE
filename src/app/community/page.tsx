import Header from '@/components/common/Header';
import Community from '@/components/community/Community';
import Nav from '@/components/common/Nav';
import { RightArrowIcon } from '@/components/common/Icons';

import { getCommunityItems } from '@/apis/getCommunityItems';

export default async function CommunityPage() {
  const res = await getCommunityItems();

  return (
    <div className="min-h-screen">
      <Header title="Q&A" />
      <section className="mx-[23px] my-[20px] flex h-[82px] w-[382px] cursor-pointer items-center justify-between rounded-[12px] bg-[#3ddacb] px-[16px]">
        <div className="flex flex-col ">
          <span className="text-[14px] text-[#fff]">원하는 정보가 없다면?</span>
          <span className="text-[20px] font-semibold text-[#fff]">
            질문하기
          </span>
        </div>
        <RightArrowIcon />
      </section>
      <section className="min-h-screen px-[24px]">
        {res && <Community communites={res} />}
      </section>
      <Nav />
    </div>
  );
}
