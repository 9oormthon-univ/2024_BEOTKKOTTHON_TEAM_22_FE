'use client';

import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { postCommunityDetail } from '@/apis/postCommunityDetail';
import { CameraIcon, CancelCircleIcon } from '../common/Icons';

import { fromClientRevalidateTag } from '@/app/api/revalidate';

interface CommunityQuestionForm {
  title: string;
  content: string;
  imageurl: File[];
  email: string;
}

const CommunityQuestionForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<CommunityQuestionForm>({
    title: '',
    content: '',
    imageurl: [],
    email: '',
  });

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo = localStorage.getItem('user');
    if (userInfo !== null && userInfo !== undefined) {
      const userObject = JSON.parse(userInfo);
      const email = userObject.email;

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formData.imageurl.forEach((image) => {
        formDataToSend.append('imageurl', image);
      });

      formDataToSend.append('email', email);

      const res = await postCommunityDetail(formDataToSend);

      fromClientRevalidateTag('communityItems');
      setFormData({
        title: '',
        content: '',
        imageurl: [],
        email: '',
      });

      router.push(`/community/${res.response.id}`);
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files: FileList = e.target.files;
      const selectedFiles: File[] = [];

      const selectedFileCount = formData.imageurl.length;
      const remainingCapacity = 5 - selectedFileCount;

      if (files.length > remainingCapacity) {
        alert('사진은 최대 5개까지만 업로드 가능합니다.');
        return;
      }

      for (let i = 0; i < files.length; i++) {
        selectedFiles.push(files[i]);
      }

      setFormData({
        ...formData,
        imageurl: [...formData.imageurl, ...selectedFiles],
      });
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onClickImageCancle = (index: number) => {
    const updatedImageUrls = formData.imageurl.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      imageurl: updatedImageUrls,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col xs:px-[12px] md:px-[18px] lg:px-[25px]"
    >
      <div className="flex items-start pb-[16px]">
        <span className="mt-[17.6px] pr-[39px] text-[16px] font-semibold">
          제목
        </span>
        <input
          className="min-h-[64px] rounded-lg border border-[#d9d9d9] pl-[12px] xs:w-[272px] sm:w-[282px] md:w-[292] lg:w-[312px] lg:max-w-[312px]"
          type="text"
          value={formData.title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="flex items-start ">
        <span className="mt-[17.6px] pr-[39px] text-[16px] font-semibold">
          내용
        </span>
        <textarea
          value={formData.content}
          onChange={onChangeContent}
          className="min-h-[282px] resize-none rounded-lg border border-[#d9d9d9] px-[12px]  pt-[12px] xs:w-[272px] sm:w-[282px] md:w-[292] lg:w-[312px] lg:max-w-[312px]"
        />
      </div>
      <div className="relative flex items-start gap-[12px] pt-[16px]">
        <span className="mt-[17.6px] inline-block min-w-[59px] pr-[0px] text-[16px] font-semibold">
          첨부파일
        </span>
        <button
          type="button"
          className="ml-[-4px] inline-block flex h-[80px] min-h-[80px] w-[80px] min-w-[80px] flex-col items-center justify-center rounded-lg border border-[#d9d9d9]"
          onClick={handleButtonClick}
        >
          <CameraIcon size={45} />
          <span className="text-[12px] text-[#7d7d7d]">사진</span>
        </button>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={onChangeImage}
          style={{ display: 'none' }}
        />
        <div className="mt-[-5px] flex items-center gap-[12px] overflow-x-auto overflow-x-scroll pr-[8px] pt-[5px] xs:max-w-[182px] sm:max-w-[192px] md:max-w-[212px] lg:max-w-[312]">
          {formData.imageurl.map((_item, index) => (
            <div key={index} className="relative ">
              <Image
                src={URL.createObjectURL(formData.imageurl[index])}
                width="0"
                height="0"
                sizes="100vw"
                alt="question-image"
                priority
                loading="eager"
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
                className="h-[80px] min-h-[80px] w-[80px] min-w-[80px]"
              />
              <div
                onClick={() => onClickImageCancle(index)}
                className="absolute right-[-10px] top-[-5px] z-50 cursor-pointer"
              >
                <CancelCircleIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-[32px] flex h-[64px] cursor-pointer items-center justify-center rounded-lg bg-[#3ddacb] py-[20px] xs:w-[340px] xs:px-[10px] sm:w-[350px]  md:w-[361px] lg:w-[380px] lg:max-w-[380px] lg:px-[133px]">
        <span className="text-[20px] font-semibold text-[#ffffff]">
          질문 등록하기
        </span>
      </button>
      <div></div>
    </form>
  );
};

export default CommunityQuestionForm;
