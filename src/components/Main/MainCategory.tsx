'use client';

import React, { useEffect, useState } from 'react';
import MainCategoryItem from './MainCategoryItem';

interface MainCategoryProps {
  handleClickedCategory: (code_number: number) => void;
}

const MainCategory = ({ handleClickedCategory }: MainCategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const categories = [
    { code: 1, name: '전체' },
    { code: 2, name: '먼지' },
    { code: 3, name: '바닥' },
    { code: 4, name: '화장실' },
    { code: 5, name: '유리' },
    { code: 6, name: '주방' },
  ];

  const isSelectedCategory = (category_code: number) => {
    setSelectedCategory(category_code);
  };

  return (
    <>
      <div className="flex justify-between px-[16px] py-[24px]">
        {categories.map((item) => (
          <MainCategoryItem
            key={item.code}
            item={item}
            isSelected={item.code === selectedCategory}
            isSelectedCategory={isSelectedCategory}
            handleClickedCategory={handleClickedCategory}
          />
        ))}
      </div>
    </>
  );
};

export default MainCategory;
