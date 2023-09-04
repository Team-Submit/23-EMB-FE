import { IconProps } from "../../types/IconProps";

/** 기본 사이즈 24px (small입력시 20px) (fill="색") */
export const ChevronDown = ({ small, fill = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={small ? 20 : 24}
      height={small ? 20 : 24}
      stroke={fill}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
