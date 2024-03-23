import { NoSearchResults } from '@/components/common/Icons';

export default async function NoResultResult() {

  return (
    <>
      <div className={'flex h-full justify-center items-center'}><NoSearchResults /></div>
    </>
  );

}