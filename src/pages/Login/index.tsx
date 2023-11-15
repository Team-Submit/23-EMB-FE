import React, { useState } from 'react';
import * as L from './style';
import { Logo } from '../../assets';
import { Button } from '../../styles/common/Button';
import { Input } from '../../components/common/Input';
import { loginResponse, LoginCredentials, LoginResponse } from '../../apis/Login/Login'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchPage } from '../Search';

export const Login = () => {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const credentials: LoginCredentials = { username: userID, password };
      const data: LoginResponse = await loginResponse(credentials);

      const { access_token, refresh_token } = data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token); 

        navigate('/SearchPage')
    } catch (error) {
      throw error
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
          />
          {error && <p>{error}</p>}
        </L.FormGroup>
        
        <Button size="XL" colorType="Point" onClick={handleLogin}>로그인</Button>
      </L.LoginContainer>
    </L.LoginWrapper>
  );
};

export default Login;