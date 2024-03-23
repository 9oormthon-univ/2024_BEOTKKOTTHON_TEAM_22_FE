import Cookies from 'js-cookie';

// 로그인 후 accessToken을 쿠키에 저장하는 함수
export const setAccessToken = (accessToken: string, email:string,userId:number) => {
  if (accessToken){
    Cookies.set('access_token', accessToken, { expires: 7 });// 예시로 7일간 유효한 쿠키로 설정
    Cookies.set('email',email)
    Cookies.set('userid',userId)
  }
};

// export const getEmail = () => {
//   const userEmail = Cookies.get('email');
//   console.log(userEmail)
//   return userEmail
// };



// 로그아웃 시 저장된 accessToken 삭제하는 함수
export const removeAccessToken = () => {
  // 쿠키에서 accessToken 제거
  Cookies.remove('access_token');
  Cookies.remove('email');
  Cookies.remove('userid');
  localStorage.removeItem('user')
};

export const getAccessToken = (): string | null => {
  const accessToken = Cookies.get('access_token');
  return accessToken || null;
};



export const getuserInfo = () =>{
  const userData :string |null  = localStorage.getItem('user')
  if (userData){
    const parsedData = JSON.parse(userData);
    console.log('parsedData',parsedData.id)
    return parsedData
  }
}