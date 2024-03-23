import { atom, useRecoilValue } from 'recoil';

export const showPopupState = atom<boolean>({
  key: 'showPopupState',
  default: false,
});

export const getShowPopupState = () => {
  return useRecoilValue(showPopupState);
};
