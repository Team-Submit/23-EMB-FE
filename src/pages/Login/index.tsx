import React, { useState } from 'react';
import * as L from './style';
import { Logo } from '../../assets';
import { Button } from '../../styles/common/Button';
import { Input } from '../../components/common/Input';
import { loginResponse, LoginCredentials, LoginResponse } from '../../apis/Login/Login'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchPage } from '../Search';
import useTitle from '../../hooks/useTitle';
import { LoginCheck } from '../../apis/Login/FirstLoginCheck';

export const Login = () => {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  useTitle('로그인')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginResponse({ username: userID, password: password });

      const { accessToken, refreshToken, um }: LoginResponse = data;
      console.log(data);

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      if (um) {
        navigate('/admin');
      } else {
        const data = await LoginCheck({ username: userID });
        if (data.firstLogin) {
          navigate('/FirstLogin');
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      alert("아이디, 비밀번호를 다시 확인해주세요");
    }
  };


  return (
    <L.LoginWrapper>
      <L.LogoImage src={Logo} alt="로고" />
      <L.LoginContainer>
        <L.TitleLogin>로그인</L.TitleLogin>
        <L.FormGroup>
          <Input
            value={userID}
            onChange={handleUsernameChange}
            label="아이디"
          />
        </L.FormGroup>
        <L.FormGroup>
          <Input
            value={password}
            onChange={handlePasswordChange}
            label="비밀번호"
            type='password'
          />
          {error && <p>{error}</p>}
        </L.FormGroup>

        <Button size="XL" colorType="Point" onClick={handleLogin}>로그인</Button>
      </L.LoginContainer>
    </L.LoginWrapper>
  );
};

export default Login;