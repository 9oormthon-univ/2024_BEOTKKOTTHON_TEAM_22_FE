import React from 'react';
import type { TipsRanking } from '@/apis/getRankingTips';
import MainItem from './MainItem';

interface MainBoxProps {
  tipsData: TipsRanking[];
}

const MainBox = ({ tipsData }: MainBoxProps) => {
  console.log(tipsData);

  return (
    <div className="no-scrollbar grid grid-cols-2 gap-[22px] overflow-y-scroll">
      {tipsData.map((item) => (
        <MainItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainBox;
