import { useEffect, useState } from "react";
import { InputAuto } from "../InputAuto";
import { getDepartment } from "../../../apis/common/department";

interface DepartmentInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const DepartmentInput = ({ value, setValue }: DepartmentInputProps) => {
  const [list, setList] = useState<string[]>(["dsf", "ASDf"]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDepartment();
      if (typeof res === "object") setList(res);
    };
    fetchData();
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
