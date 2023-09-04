import { IconProps } from "../../types/IconProps";

/** 기본 사이즈 24px (small입력시 20px) (fill="색") */
export const Search = ({ small, fill = "currentColor" }: IconProps) => {
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
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
