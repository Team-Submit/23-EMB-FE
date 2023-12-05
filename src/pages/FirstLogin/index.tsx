import React, { useState } from 'react';
import * as L from './style';
import { Button } from '../../styles/common/Button';
import { Input } from '../../components/common/Input';
import { DepartmentInput } from '../../components/common/DepartmentInput';
import { Modal } from '../../components/common/Modal';
import { sendPostRequest } from '../../apis/Login/FirstLogin';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

export const FirstLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [UserPhoneNumber, setUserContact] = useState<string>('');
  const [UserDepartment, setDepartment] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const navigate = useNavigate();

  useTitle('환영합니다!')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }; const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleLogin = async () => {
    const response = await sendPostRequest({ username: username, newPassword: newPassword, UserPhoneNumber: UserPhoneNumber, UserDepartment: UserDepartment });
    if (response.state === 200) {
      alert("환영합니다!");
      navigate("/home");
    } else {
      alert("입력된 정보를 다시 확인해주세요");
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
      <Button size="XL" colorType="Point" onClick={handleLogin}>
        완료
      </Button>
    </Modal>
  );
};
