'use client';
import { AddIcon, TodoMenuIcon } from '@/components/common/Icons';
import CheckListEdit from '@/components/myPage/CheckListEdit';
import { useEffect, useState } from 'react';

export default function CheckList() {
  const [showPopup, setShowPopup] = useState(false);
  const [isAdd, setIsAdd]=useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleInputSubmit();
    }
  };
  const handleInputSubmit = () => {
    if (showPopup){
      setShowPopup(false)
    }
    setIsAdd(!isAdd)
  };

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddList = () => {
    setIsAdd(!isAdd);
  };

  const handleDeleteList =()=>{

  }

  useEffect(() => {
  }, [showPopup]);

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
            className={'my-[20px] mx-[16px] size-[24px] appearance-none rounded-[4px] bg-lightGray checked:bg-mint checked:border-transparent'} />
          {isAdd ?
            <input type={'text'}
                   value={inputValue}
                   onChange={handleInputChange}
                   onKeyDown={handleInputKeyPress}
                   className={'flex-1 w-[100%] overflow-wrap'} />
            : <div className={'flex-1 w-[100%] py-5 overflow-wrap '}>{inputValue}</div>}

          <div
            onClick={handleShowPopup}
            className={'mx-[16px] my-[24px] justify-center'}
          >
            <TodoMenuIcon />
          </div>
        </div>
        {showPopup && (
          <CheckListEdit onEdit={handleInputSubmit}  />
        )}
      </div>
      <div className={'h-16'}></div>
    </>
  );
}
