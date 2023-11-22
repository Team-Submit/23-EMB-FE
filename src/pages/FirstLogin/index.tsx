import React, { useEffect, useState } from 'react';
import * as L from './style';
import { Button } from '../../styles/common/Button';
import { Input } from '../../components/common/Input';
import { DepartmentInput } from '../../components/common/DepartmentInput';
import { Modal } from '../../components/common/Modal';
import { sendPostRequest } from '../../apis/Login/FirstLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostDataType } from '../../apis/Login/FirstLogin_Data';
import { SearchPage } from '../Search';
import useTitle from '../../hooks/useTitle';

export const FirstLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [UserPhoneNumber, setUserContact] = useState<string>('');
  const [UserDepartment, setDepartment] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  useTitle('환영합니다!')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);

    if (newPasswordValue.length < 8 || newPasswordValue.length > 30) {
      setPasswordError('비밀번호는 8자에서 30자 사이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleUserContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserContact(e.target.value);
  };

  const loginAndProcessData = async (postData: PostDataType) => {
    if (postData.username && postData.newPassword && postData.UserPhoneNumber && postData.UserDepartment) {
      try {
        const responseData = await sendPostRequest(postData);
  
        localStorage.setItem('access_token', responseData.access);
        localStorage.setItem('refresh_token', responseData.refresh);
  
        console.log('요청이 성공적으로 처리되었습니다.', responseData);
      } catch (error) {
        console.error('요청이 실패했습니다.', error);
      }
    }
  };

    const navigate = useNavigate();
  
    const handleLogin = async (postData: { username: string, newPassword: string, UserPhoneNumber: string, UserDepartment: string }) => {
      try {
        const response = await sendPostRequest({username: 'string',
          newPassword: 'string',
          UserPhoneNumber: 'string',
          UserDepartment: 'string'});
  
        if (response.status === 200) {
          navigate('/SearchPage');
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
  };
  return (
    <Modal isOpen={true}>
      <L.Welcome>환영합니다!</L.Welcome>
      <L.Paragraph>emb 사용을 시작하기 전, 정보 입력이 필요합니다</L.Paragraph>
      <L.FormGroup>
        <Input
          value={username}
          onChange={handleUsername}
          label="이름"
        />
      </L.FormGroup>
      <L.FormGroup>
        <Input
          value={newPassword}
          onChange={handleNewPasswordChange}
          label="새 비밀번호"
        />
        <p>보안을 위해 지급된 비밀번호를 변경하세요</p>
        {passwordError}
      </L.FormGroup>
      <L.FormGroup>
        <Input
          value={UserPhoneNumber}
          onChange={handleUserContact}
          label="연락처"
          placeholder="010-0000-0000"
        />
      </L.FormGroup>
      <L.FormGroup>
        <DepartmentInput
          value={UserDepartment}
          setValue={setDepartment}
        />
      </L.FormGroup>
      <Button size="XL" colorType="Point" onClick={() => handleLogin({username,newPassword,UserPhoneNumber,UserDepartment,})}>
        완료
      </Button>
    </Modal>
  );
};
