'use client';

import React, { useState } from 'react';
import LikeCategoryItem from './LikeCategoryItem';

interface LikeCategory {
  handleClickCategory: (category_name: string) => void;
}

const LikeCategory = ({ handleClickCategory }: LikeCategory) => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = [{ name: '팁' }, { name: '질문' }];

  const isSelectedCategory = (category_name: string) => {
    setSelectedCategory(category_name);
  };

  return (
    <div className="flex items-center justify-between pt-[36px]">
      <h1 className="pb-[20px] text-[24px] font-semibold">
        {selectedCategory}
      </h1>
      <div className="flex items-center gap-[20px]">
        {categories.map((item, index) => (
          <LikeCategoryItem
            key={index}
            item={item}
            isSelected={item.name === selectedCategory}
            isSelectedCategory={isSelectedCategory}
            handleClickCategory={handleClickCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default LikeCategory;
