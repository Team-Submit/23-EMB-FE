import { useEffect, useState } from "react";
import { Button } from "../../../styles/common/Button";
import { Input } from "../../../components/common/Input";
import { Check } from "../../../assets/icons/Check";
import { color } from "../../../styles/theme";
import { ModifyModal } from "../../../components/pages/admin/edit/modal";
import { DepartmentInput } from "../../../components/common/DepartmentInput";
import { modifyDate } from "../../../apis/admin/index";
import * as S from "./style";
import React from "react";
import useTitle from "../../../hooks/useTitle";
import { changeEditType } from "./type";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUserData } from "../../../apis/common/getUserData";

export const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [department, setDepartment] = useState("");

  useTitle("계정 정보 수정");

  const [edit, setEdit] = useState<changeEditType>({
    userName: "",
    userNumber: "",
    department: "",
  });

  const fetchData = async () => {
    const res = await getOneUserData((id ?? "").toString());
    try {
      setEdit(res);
      setDepartment(res.department ?? "");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setEdit({ ...edit, department: department });
  }, [department]);

  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const modifyUpDate = async () => {
    try {
      await modifyDate(edit, id ?? "");
      nav("/admin");
    } catch {
      alert("err");
    }
  };

  return (
    <div>
      <S.EditWrap>
        <S.EditWrapContainer>
          <S.EditText>개인정보 수정</S.EditText>
          <Input
            value={edit.userName}
            label="이름"
            placeholder="이름을 입력하세요"
            name="userName"
            onChange={onChangeEdit}
          />
          <Input
            value={edit.userNumber}
            label="연락처"
            placeholder="연락처를 입력하세요"
            name="userNumber"
            onChange={onChangeEdit}
          />
          <DepartmentInput value={department} setValue={setDepartment} />

          <Button size="XL" colorType="Point" onClick={handleModalToggle}>
            <Check fill={color.White} />
            완료
          </Button>

          <ModifyModal
            updateClick={() => modifyUpDate()}
            cancelClick={handleModalToggle}
            isOpen={open}
          />
        </S.EditWrapContainer>
      </S.EditWrap>
    </div>
  );
};
