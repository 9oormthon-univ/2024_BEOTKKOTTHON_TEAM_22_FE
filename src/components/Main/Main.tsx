import MainCategory from './MainCategory';
import MainBox from './MainBox';

import { TipsRanking, getRankingTips } from '@/apis/getRankingTips';

const Main = async () => {
  const tipsData = await getRankingTips();

  if (tipsData) {
    return (
      <section className="px-[24px]">
        <h1 className="pt-[20px] text-[24px] font-semibold">랭킹</h1>
        <MainCategory />
        <MainBox tipsData={tipsData.response} />
      </section>
    );
  } else {
    return null;
  }
};

export default Main;
