import { color } from "../../styles/theme";
import { IconProps } from "../../types/IconProps";

export const ChevronLeft24 = ({ fill = "currentColor" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={24} height={24} stroke={fill} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
};
