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
  actionButtons,
  children,
  footer,
  className = "",
  titleWeight,
  titleColor,
  headingClassName,
  childrenClassName,
}) => {
  const fontWeightValue = titleWeight === "semi-bold" ? 600 : 500;

  return (
    <div
      className={`relative bg-white !border-[0.5px] !border-[#EBEBEB] !rounded-[12px] !shadow-[0_0_12px_0_#EAF2FF] p-[16px] flex flex-col ${className ? className : "gap-[24px]"}`}
    >
      <div className={`flex items-center justify-between ${headingClassName}`}>
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

        <div className="flex items-center gap-2">
          {actionButtons && actionButtons}

          {period && (
            <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
              {period}
            </div>
          )}
        </div>
      </div>
      <div className={`flex-1 min-h-0 ${childrenClassName ? childrenClassName : "space-y-[24px]"}`}>
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

export function updateSession(key, value) {
  sessionStorage.setItem(key, value);

  // Trigger only if key is relevant
  if (key === "community_id" || key === "export" || key === "widget_id") {
    window.dispatchEvent(new StorageEvent("dashboard-update", { key }));
  }
}

export function formatAmount(value) {
  if (value === null || value === undefined) return "0";

  let num = Number(value);

  if (isNaN(num)) return "0";

  const isNegative = num < 0;
  num = Math.abs(num);

  if (num < 1000) return (isNegative ? "-" : "") + String(num);

  if (num < 100000) {
    const formatted = (num / 1000).toFixed(num >= 10000 ? 0 : 1);
    return (isNegative ? "-" : "") + removeZero(formatted) + "K";
  }

  if (num < 10000000) {
    const formatted = (num / 100000).toFixed(num >= 1000000 ? 0 : 1);
    return (isNegative ? "-" : "") + removeZero(formatted) + "L";
  }

  const formatted = (num / 10000000).toFixed(num >= 100000000 ? 0 : 1);
  return (isNegative ? "-" : "") + removeZero(formatted) + "Cr";
}

function removeZero(str) {
  if (str.indexOf(".") === -1) return str;

  while (str[str.length - 1] === "0") str = str.slice(0, -1);
  if (str[str.length - 1] === ".") str = str.slice(0, -1);

  return str;
}