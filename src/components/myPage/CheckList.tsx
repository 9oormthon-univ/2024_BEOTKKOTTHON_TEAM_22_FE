'use client';
import { AddIcon, HoneyTipIcon } from '@/components/common/Icons';
import React, {  useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataProps } from '@/apis/getCheckList';


interface CheckLisProps {
  checkLists: DataProps[];
}


export default function CheckList({checkLists}:CheckLisProps) {
  const [isAdd, setIsAdd]=useState(false);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter()



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };


  const handleSubmitControl = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('전송' )
    }
  };

  const handleMoveToSearch = (item: string) => {
    if(item === '자취 필수템 확인하셨나요?'){
      router.push(`/search/자취`)
    } else if(item === '효율적인 설거지를 하고 있나요?'){
      router.push(`/search/설거지`)
    }else{
      router.push(`/search/화장실`)
    }
  };

  const handleAddList = () => {
    setIsAdd(!isAdd);
  };

  const handleDeleteList =()=>{
    console.log('삭제' )
  }

  return (
    <>
      <div className={'mb-[20px] mt-[52px] flex'}>
        <div className={'flex-1 text-[24px] font-semibold'}>체크 리스트</div>
        <button onClick={handleAddList} className={'mr-[12px]'}><AddIcon /></button>
      </div>
      {checkLists.map(item => (
        <div key={item.id} className={'mb-[12px] h-[64px]'}>
          <div className={'flex items-center h-[64px] w-full rounded-[12px] border-[1px] border-mint'}>
            <button
              onClick={handleDeleteList}
              className={'my-[20px] mx-[12px] w-[24px] h-[24px] appearance-none rounded-[4px] bg-lightGray checked:bg-mint checked:border-transparent'}>
            </button>

            <div className={'pl-[10px] w-[75%] overflow-wrap'}>
              {item.title}
            </div>
            <button
              onClick={() => handleMoveToSearch(item.title)}
              className={'mt-[19px] mb-[18px] mx-[14px]'}>
              <HoneyTipIcon />
            </button>
          </div>
        </div>

      ))}
      <div>
        {isAdd && (
          <div className={'mb-[12px] h-[64px]'}>
            <div className={'flex h-[64px] w-full rounded-[12px] border-[1px] border-mint'}>
              <button
                onClick={handleDeleteList}
                className={'my-[20px] mx-[12px] w-[24px] h-[24px] appearance-none rounded-[4px] bg-lightGray checked:bg-mint checked:border-transparent'}>
              </button>
            </div>
            <input type={'text'}
                   value={inputValue}
                   onChange={handleChange}
                   onKeyDown={handleSubmitControl}
                   className={'pl-[16px] w-[75%] overflow-wrap'} />
            <button
              className={'mt-[19px] mb-[18px] mx-[14px]'}>
              <HoneyTipIcon />
            </button>
          </div>
        )}
      </div>

</>
)
}
