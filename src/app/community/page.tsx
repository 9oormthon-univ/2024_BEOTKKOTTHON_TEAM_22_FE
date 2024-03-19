import Header from '@/components/common/Header';
import Nav from '@/components/common/Nav';
import { RightArrowIcon } from '@/components/common/Icons';

export default async function Commuity() {
  return (
    <>
      <Header title="Q&A" />
      <div className="mx-[23px] my-[20px] flex h-[82px] w-[382px] cursor-pointer items-center justify-between rounded-[12px] bg-[#3ddacb] px-[16px]">
        <div className="flex flex-col ">
          <span className="text-[14px] text-[#fff]">원하는 정보가 없다면?</span>
          <span className="text-[20px] font-semibold text-[#fff]">
            질문하기
          </span>
        </div>
        <RightArrowIcon />
      </div>
      <Nav />
    </>
  );
}
