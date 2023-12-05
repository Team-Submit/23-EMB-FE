import { useEffect, useState } from "react";
import { InputAuto } from "../InputAuto";
import { getDepartment } from "../../../apis/common/department";

interface DepartmentInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const DepartmentInput = ({ value, setValue }: DepartmentInputProps) => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      return await getDepartment();
    };
    fetchData()
      .then((data) => {
        setList(data.deparment);
      })
      .catch((err) => alert("오류가 발생하였습니다."));
  }, []);

  return (
    <InputAuto
      label="부서"
      placeholder="부서를 입력해주세요"
      value={value}
      setValue={setValue}
      list={list}
    />
  );
};
