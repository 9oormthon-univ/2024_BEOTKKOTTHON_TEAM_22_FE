import Image from 'next/image';
import Link from 'next/link';
interface Props {
  img:string;
  store: string;
  product: string;
  price: number;
  url: string;

}
export default function RecommendCard({img,store, product, price, url}:Props) {

  return (
    <>
      <Link href={url}>
        <div className={'rounded-[12px] w-[136px] max-h-[184px] bg-white shadow-md '}>
          <Image
            src={img}
            alt={'제품사진'}
            width={136}
            height={111}
            style={{
              objectFit: 'cover',
            }}
            className={'h-[111px] rounded-t-[12px]'} />
          <div className={' w-full h-full py-[10px] px-[12px]'}>
            <p className={'text-darkGray text-[10px]'}>{store}</p>
            <p className={'text-[14px] truncate ...'}>{product}</p>
            <p className={'text-[16px] font-semibold'}>{price}</p>
          </div>
        </div>
      </Link>


    </>

  );
}