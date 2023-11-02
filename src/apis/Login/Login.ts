import { instance } from '..';

export const loginAndHandleTokens = async (user_id: string, user_password: string) => {
  try {
    const response = await instance.post("/users/login", {
      user_id,
      user_password,
    });

    if (response.data.firstLogin) {
      enableFirstLoginUI();
    } else {
      const { access_token, refresh_token } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      handleSuccessfulLogin();
    }
  } catch (err) {
    console.error(err);
    displayErrorMessage("토큰이 만료되었습니다 다시 시도 해주십시오");
  }
};

function enableFirstLoginUI() {
}

function handleSuccessfulLogin() {
}

function displayErrorMessage(message: string) {
}
