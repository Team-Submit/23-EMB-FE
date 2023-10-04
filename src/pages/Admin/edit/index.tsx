//pages/admin/edit/index.tsx
import { useEffect, useState } from "react";
import { Button } from "../../../styles/common/Button";
import { Input } from "../../../components/common/Input";
import { InputAuto } from "../../../components/common/InputAuto";
import { Check } from "../../../assets/icons/Check";
import { Modal } from "../../../components/common/Modal";
import { color } from "../../../styles/theme";
import * as S from "./style";


interface changeEditType {
  newUserName: string;
  newUserNumber: string;
  // newUserDepartment: string;
}

export const Edit = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [department, setDepartment] = useState("");

  const [changeEdit, setChangeEdit] = useState<changeEditType>({
    newUserName: "",
    newUserNumber: "",
    // newUserDepartment: "",
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
  }

  useEffect(() => {
    console.log(changeEdit);
  }, [changeEdit]);

  return (
    <div>
      <S.editWrap>
        <S.editWrapContainer>
          <S.editText>개인정보 수정</S.editText>
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
          <InputAuto 
            value={department} 
            setValue={setDepartment}
            label="부서"
            placeholder="부서를 입력하세요"
          />

          <Button size="XL" colorType="Point" onClick={handleModalToggle}>
            <Check fill={color.White}/>
            완료
          </Button>
        
          {open &&
            <Modal isOpen>
              <S.ModifyMoadleTitle>수정하시겠습니까?</S.ModifyMoadleTitle>
              <S.ModifyBody>이 작업은 되돌릴 수 없습니다</S.ModifyBody>
              <S.ModifyMoadlBtnFlex>
                <Button colorType="Point" size="M" onClick={() => {}}>
                  수정
                </Button>
                <Button colorType="Gray" size="M" onClick={ handleModalToggle }>
                  취소
                </Button>
              </S.ModifyMoadlBtnFlex>
            </Modal>
          }
          
        </S.editWrapContainer>
      </S.editWrap>
    </div>
  );
};
