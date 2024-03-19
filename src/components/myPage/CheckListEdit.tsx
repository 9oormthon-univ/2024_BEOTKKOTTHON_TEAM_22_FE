interface PopupProps {
  onConfirm: () => void;
}
export default function CheckListEdit({onConfirm}:PopupProps) {

  return (
    //       <div className=" fixed inset-0 text-center flex justify-center items-center bg-gray-900 bg-opacity-50">
    <div className="mx-[20px] mt-[-20px]  flex inset-0  justify-end items-end bg-gray-900 bg-opacity-50 ">
      <div className={'pb-[-10px] w-[94px] h-[83px] bg-white rounded-[12px] border-[1px] border-lightGray '}>
        <button className={' w-[100%] h-[50%] border-b border-lightGray hover:cursor-pointer '}>
          수정하기
        </button>
        <button
          className="w-[100%] h-[50%] bg-white rounded-[12px] border-lightGray hover:cursor-pointer "
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}