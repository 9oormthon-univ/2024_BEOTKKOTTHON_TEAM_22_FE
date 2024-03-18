'use client';
import {useRouter} from "next/navigation";
import {XIcon} from "@/components/common/Icons";

export default function LoginView() {
  const router = useRouter()

  return (
    <div className={'px-[24px]'}>
      <div className={'pt-6 , pb-8'}>
        <button onClick={() => router.push('/')}>
          <XIcon/>
        </button>
      </div>
      <div>
        집안일 요정 로고
      </div>
    </div>

  );
}
