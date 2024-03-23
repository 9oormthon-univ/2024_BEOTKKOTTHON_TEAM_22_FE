'use server';

// server component에서 호출하는 api를
// client component에서 리렌더링하기 위해 사용.

import { revalidateTag } from 'next/cache';

export const fromClientRevalidateTag = (tagName: string) => {
  revalidateTag(tagName);
};

