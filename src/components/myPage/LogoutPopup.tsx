interface LogoutPopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}
export default function LogoutPopup({onCancel, onConfirm}:LogoutPopupProps) {

  return (
    <>
      <div className=" fixed inset-0 text-center flex justify-center items-center">
        <div className="w-[330px] h-[214px] bg-white rounded-[20px] border-[2px] border-lightGray">
          <h2 className="text-[24px] font-bold mt-[36px] mb-[14px]">로그아웃</h2>
          <p className='mt-[14px] mb-[24px]'>로그아웃 하시겠습니까?</p>
          <div className="flex-auto mb-[33px] flex justify-center items-center gap-[20px] ">
            <button
              className="w-[108px] h-[56px] bg-mint text-white rounded-[12px] hover:bg-white hover:text-black hover:border-[1px] border-lightGray"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              className="w-[108px] h-[56px] bg-mint text-white rounded-[12px] hover:bg-white hover:text-black hover:border-[1px] border-lightGray"
              onClick={onConfirm}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>

  );
}