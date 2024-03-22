'use client';
import { AddIcon, TodoMenuIcon } from '@/components/common/Icons';
import CheckListEdit from '@/components/myPage/CheckListEdit';
import { useState } from 'react';

export default function CheckList() {
  const [showPopup, setShowPopup] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddList = () => {
    setIsAdd(!isAdd);
  };

  return (
    <>
      <div className={'mb-[20px] mt-[52px] flex'}>
        <div className={'flex-1 text-[24px] font-semibold'}>체크 리스트</div>
        <button onClick={handleAddList} className={'mr-[16px]'}>
          <AddIcon />
        </button>
      </div>
      <div className={'mb-[12px] h-[64px] '}>
        <div
          className={
            'flex h-[64px] w-full rounded-[12px] border-[1px] border-mint '
          }
        >
          <input
            type={'checkbox'}
            className={
              'mx-[16px] my-[20px] size-[24px] appearance-none rounded-[4px] bg-lightGray checked:border-transparent checked:bg-mint'
            }
          />
          {isAdd ? (
            <input type={'text'} className={'flex-1 '} />
          ) : (
            <div className={'w-[100%] flex-1 py-5 '}>
              집 가고 싶어 자고 싶어
            </div>
          )}

          <div
            onClick={handleShowPopup}
            className={'mx-[16px] my-[24px] justify-center'}
          >
            <TodoMenuIcon />
          </div>
        </div>
        {showPopup && <CheckListEdit onConfirm={handleShowPopup} />}
      </div>
    </>
  );
}
