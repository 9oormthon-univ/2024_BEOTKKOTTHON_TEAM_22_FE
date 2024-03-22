import Cookies from 'js-cookie';

// 로그인 후 accessToken을 쿠키에 저장하는 함수
export const setAccessToken = (accessToken: string) => {
  // 쿠키에 accessToken 저장
  Cookies.set('access_token', accessToken, { expires: 7 }); // 예시로 7일간 유효한 쿠키로 설정
};

// 로그아웃 시 저장된 accessToken 삭제하는 함수
export const removeAccessToken = () => {
  // 쿠키에서 accessToken 제거
  Cookies.remove('access_token');
};

// 쿠키에서 accessToken을 가져오는 함수
export const getAccessToken = (): string | null => {
  const accessToken = Cookies.get('access_token');
  return accessToken || null;
};
