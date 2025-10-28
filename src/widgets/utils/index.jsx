import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const Dot = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: color,
      marginRight: "6px",
    }}
  />
);

export const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  //   console.log(payload, "payload in tooltip")
  return (
    <div className="bg-[#121212] text-white !text-[12px] p-3 rounded-lg shadow-lg">
      {payload.map((item, i) => {
        return (
          <div
            key={i}
            className="capitalize flex gap-[4px] items-center leading-relaxed"
          >
            {item.color && <Dot color={item.color} />}
            {item.payload.color && <Dot color={item.payload.color} />}
            <div className="min-w-[84px] text-[#D1D3D4]">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export const Chip = ({ value }) => {
  const numericValue =
    typeof value === "string" ? parseFloat(value.replace("%", "")) : value ?? 0;
  const isPositive = numericValue >= 0;

  return (
    <div
      className={`w-fit p-1 rounded text-[10px] leading-[14px] font-medium flex items-center gap-1 ${
        isPositive
          ? "bg-[#F7FEFA] text-[#1FA05B]"
          : "bg-[#FFF2F2] text-[#AB0000]"
      }`}
    >
      {isPositive ? <FaCaretUp /> : <FaCaretDown />}
      {Math.abs(numericValue).toFixed(1)}%
    </div>
  );
};

export const Card = ({
  title,
  icon,
  period,
  children,
  footer,
  className = "",
  childrenClassName,
  titleWeight,
}) => {
  const fontWeightValue = titleWeight === "semi-bold" ? 600 : 500;

  return (
    <div
      className={`relative bg-white !border-[0.5px] !border-[#EBEBEB] !rounded-[12px] !shadow-[0_0_12px_0_#EAF2FF] p-[16px] flex flex-col gap-[24px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          {icon}
          <div
            style={{
              fontWeight: fontWeightValue,
              fontSize: "16px",
              lineHeight: "20px",
            }}
            className="!my-0 !text-[16px] !leading-[20px] !text-[#121212]"
          >
            {title}
          </div>
        </div>

        {period && (
          <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
            {period}
          </div>
        )}
      </div>
      <div className={`flex-1 min-h-0 space-y-[24px] ${childrenClassName}`}>
        {children}
      </div>
      {footer && (
        <div className="mt-3 pt-3 border-t border-gray-100 !text-[12px] text-[#64748B]">
          {footer}
        </div>
      )}
    </div>
  );
};
