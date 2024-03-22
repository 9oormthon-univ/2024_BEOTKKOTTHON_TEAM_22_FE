import { atom, useRecoilValue } from 'recoil';

export const expandImageState = atom<string | null>({
  key: 'expandImageState',
  default: null,
});

export const getExpandImageRecoil = () => {
  return useRecoilValue(expandImageState);
};
