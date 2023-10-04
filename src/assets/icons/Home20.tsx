import { IconProps } from "../../types/IconProps";

/** 기본 사이즈 20px  (fill="색") */
export const Home20 = ({ fill = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill={fill}
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
