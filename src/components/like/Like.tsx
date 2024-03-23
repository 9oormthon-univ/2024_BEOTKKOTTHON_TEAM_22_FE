'use client';

import React, { useState } from 'react';
import LikeCategory from './LikeCategory';
import LikeBox from './LikeBox';

const Like = () => {
  const [currentCategory, setCurrentCategory] = useState('팁');

  const handleClickCategory = (category_name: string) => {
    setCurrentCategory(category_name);
  };

  // 카테고리가 팁이 아니라면 => 필터

  return (
    // 필터링된 결과값에 따른 조건 렌더링
    <div className="flex flex-col">
      <LikeCategory handleClickCategory={handleClickCategory} />
      <LikeBox />
    </div>
  );
};

export default Like;
