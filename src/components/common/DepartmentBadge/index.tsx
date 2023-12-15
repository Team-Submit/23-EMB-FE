import * as S from "./style";

interface DepartmentBadgeProps {
  $widthAuto?: boolean;
  department: string;
}

/** 사용법 : < DepartmentBadge department={부서명} $widthAuto /> ($widthAuto는 선택) */
export const DepartmentBadge = ({
  $widthAuto = false,
  department,
}: DepartmentBadgeProps) => {
  return (
    <S.Container $widthAuto={$widthAuto}>
      <p>{department}</p>
    </S.Container>
  );
};
