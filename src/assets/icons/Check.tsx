import { IconProps } from "../../types/IconProps";

/** 기본 사이즈 24px (small입력시 20px) (fill="색") */
export const Check = ({ small,fill="currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={fill}
      width={small ? 20 : 24}
      height={small ? 20 : 24}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};
