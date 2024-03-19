'use client';

import React, { useEffect } from 'react';

interface MainCategoryItemProps {
  item: { name: string; code: number };
  isSelected: boolean;
  isSelectedCategory: (category_code: number) => void;
  handleClickedCategory: (code_number: number) => void;
}

const MainCategoryItem = ({
  item,
  isSelected,
  isSelectedCategory,
  handleClickedCategory,
}: MainCategoryItemProps) => {
  const handleCategoryClick = () => {
    handleClickedCategory(item.code);
    isSelectedCategory(item.code);
  };

  const activeCurrentCategory = isSelected ? 'font-bold' : '';

  return (
    <span
      onClick={handleCategoryClick}
      className={`cursor-pointer text-[16px] ${activeCurrentCategory}`}
    >
      {item.name}
    </span>
  );
};

export default MainCategoryItem;
