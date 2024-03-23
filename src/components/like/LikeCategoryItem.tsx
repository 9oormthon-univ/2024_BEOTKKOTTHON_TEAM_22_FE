import React from 'react';

interface LikeCategoryItemProps {
  item: { name: string };
  isSelected: boolean;
  isSelectedCategory: (category_name: string) => void;
  handleClickCategory: (category_name: string) => void;
}

const LikeCategoryItem = ({
                            item,
                            isSelected,
                            isSelectedCategory,
                            handleClickCategory,
                          }: LikeCategoryItemProps) => {
  const handleCategoryClick = () => {
    handleClickCategory(item.name);
    isSelectedCategory(item.name);
  };

  const activeCurrentCategory = isSelected ? 'font-bold' : '';

  return (
    <div
      onClick={handleCategoryClick}
      className={`cursor-pointer text-[16px] ${activeCurrentCategory}`}
    >
      <span className="text-[14px]">{item.name}</span>
    </div>
  );
};

export default LikeCategoryItem;
