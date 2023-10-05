import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // localstroage에서 토큰 가져와 confing.herader.Authorization에 넣어주는 코드 필요
    // 현재 localstroage key값이름을 몰라 설정 안해둠. 정해지는대로 수정할 예정
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      // 401인지 확인하고 refresh 재요청 코드 작성이 필요함
    } else {
      throw error;
    }
  }
);
