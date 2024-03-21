interface Props {
  point: number; // 포인트 정보의 타입
}
export default function UserPoint({point}:Props) {

  return (
    <>
      <div className={'px-[17px] mt-[36px] flex items-center w-full h-[100px] bg-mint text-white rounded-[12px]'}>
        <p className={'flex-1 font-semibold text-[20px]'}>보유 포인트</p>
        <p className={'font-semibold text-[20px]'}>{point}P</p>
      </div>
    </>

  );
}