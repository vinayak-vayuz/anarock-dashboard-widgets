import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

export const Chip = ({ value }) => {
  const safeValue = value ?? 0; // ensure value is a number
  const isPositive = safeValue >= 0;
  return (
    <div
      className={`w-fit p-1 rounded text-[10px] leading-[14px] font-medium flex items-center gap-1 ${
        isPositive
          ? "bg-[#F7FEFA] text-[#1FA05B]"
          : "bg-[#FFF2F2] text-[#AB0000]"
      }`}
    >
      {isPositive ? <FaCaretUp /> : <FaCaretDown />}
      {safeValue}
    </div>
  );
};
