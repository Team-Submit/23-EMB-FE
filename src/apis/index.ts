/// localstroage key값 수정 필요함
import axios, { AxiosError } from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // localstroage에서 토큰 가져와 confing.herader.Authorization에 넣어주는 코드
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken){
      config.headers.Authorization = `Bearer ${accessToken}`}

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);



instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      // 401인지 확인하고 refresh 재요청 코드 작성이 필요함
      const { status } = error.response.data;
      if (status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            axios
              .post(
                `${BASEURL}/auth/reissue/access_token`,
                {
                  headers: {
                    Authorization: `Bearer ${refreshToken}`
                  },
                }
              )
              .then((res) => {
                const { data } = res.data;
                const accessToken = data.accessToken;
                localStorage.setItem("accessToken", accessToken);
                if (error.config) {
                  error.config.headers.Authorization = `Bearer ${accessToken}`;
                  return axios.request(error.config);
                }
              })
              .catch(() => {
                throw error;
              });
          } catch {
            throw error;
          }
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
);
