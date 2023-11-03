import { useState } from "react";
import { Button } from "../../../styles/common/Button";
import { Input } from "../../../components/common/Input";
import { Check } from "../../../assets/icons/Check";
import { color } from "../../../styles/theme";
import { ModifyModal } from "../../../components/pages/admin/edit/modal";
import { DepartmentInput } from "../../../components/common/DepartmentInput";
import { modifyDate } from "../../../apis/admin/index";
import * as S from "./style";
import React from "react";

interface changeEditType {
  newUserName: string;
  newUserNumber: string;
}

export const Edit = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [department, setDepartment] = useState("");

  const [changeEdit, setChangeEdit] = useState<changeEditType>({
    newUserName: "",
    newUserNumber: "",
  });

  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setChangeEdit({
      ...changeEdit,
      [name]: value,
    });
  };

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const modifyUpDate = async () => {
    await modifyDate({
      newDepartment: department,
      ...changeEdit,
    });
  };

  return (
    <div>
      <S.EditWrap>
        <S.EditWrapContainer>
          <S.EditText>개인정보 수정</S.EditText>
          <Input
            value={changeEdit.newUserName}
            label="이름"
            placeholder="이름을 입력하세요"
            onChange={onChangeEdit}
          />
          <Input
            value={changeEdit.newUserNumber}
            label="연락처"
            placeholder="연락처를 입력하세요"
            onChange={onChangeEdit}
          />
          <DepartmentInput value={department} setValue={setDepartment} />

          <Button size="XL" colorType="Point" onClick={handleModalToggle}>
            <Check fill={color.White} />
            완료
          </Button>

          <ModifyModal
            updateClick={modifyUpDate}
            cancelClick={handleModalToggle}
            isOpen={open}
          />
        </S.EditWrapContainer>
      </S.EditWrap>
    </div>
  );
};
