import React, { useState } from 'react';
import * as L from './style';
import { Logo } from '../../assets';
import { Button } from '../../styles/common/Button';
import { Input } from '../../components/common/Input';
import axios from 'axios';

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

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  });
  
  const handleLogin = () => {
    if (!userID || !password) {
      setError('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }
  
    axiosInstance.post('/login', { userID, password })
      .then(response => {
        console.log('로그인 성공');
      })
      .catch(error => {
        setError('아이디 또는 비밀번호를 다시 입력해주세요.');
        console.error(error);
      });
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
