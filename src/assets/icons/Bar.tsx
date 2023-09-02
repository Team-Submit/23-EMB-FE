import { IconProps } from "../../types/IconProps";

/** 기본 사이즈 24px (small입력시 20px) (fill="색") */
export const Bar = ({ small, fill="currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke={fill}
      width={small ? 20 : 24}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
