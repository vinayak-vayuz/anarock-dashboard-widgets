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

export const CustomTooltip = ({ active, payload, coordinate }) => {
  if (!active || !payload || !payload.length) return null;

  const tooltipHeight = 60;
  const chartHeight = 235;

  let y = coordinate?.y || 0;

  if (y + tooltipHeight / 2 > chartHeight) {
    y = chartHeight - tooltipHeight / 2 - 8;
  }

  if (y - tooltipHeight / 2 < 0) {
    y = tooltipHeight / 2 + 8;
  }

  return (
    <div
      className="relative bg-[#121212] text-white text-[12px] px-[16px] py-[8px] rounded-[8px] shadow-lg"
      style={{
        transform: `translateY(${y}px) translateY(-50%)`,
      }}
    >
      <div
        className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0
        border-t-[6px] border-t-transparent
        border-b-[6px] border-b-transparent
        border-r-[6px] border-r-[#121212]"
      />

      {payload.map((item, i) => (
        <div key={i} className="flex items-center gap-[8px] capitalize">
          {item.payload.color && <Dot color={item.payload.color} />}
          <span className="text-[#D1D3D4] min-w-[70px]">
            {item?.payload?.name}
          </span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
export const CommercialCustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const item = payload[0];

  const name =
    label ||
    item?.name ||
    item?.payload?.name ||
    item?.payload?.facility_name ||
    "";

  const value = item?.value ?? 0;

  const color = item?.color || item?.fill || item?.payload?.fill || "#3B82F6";

  return (
    <div
      style={{
        backgroundColor: "#111",
        borderRadius: "6px",
        padding: "6px 14px",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        color: "#fff",
        fontSize: "13px",
        whiteSpace: "nowrap",
      }}
    >
      {/* color dot */}
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: color,
          display: "inline-block",
        }}
      />

      <span style={{ color: "#aaa" }}>{name}</span>

      <span style={{ fontWeight: 700 }}>{value}</span>
    </div>
  );
};

export const Chip = ({ value }) => {
  const numericValue =
    typeof value === "string"
      ? parseFloat(value.replace("%", ""))
      : (value ?? 0);
  const isPositive = numericValue >= 0;

  return (
    <div
      className={`w-fit p-[4px] rounded text-[10px] leading-[14px] font-medium flex items-center gap-[4px] ${
        isPositive
          ? "bg-[#F7FEFA] text-[#1FA05B]"
          : "bg-[#FFF2F2] text-[#AB0000]"
      }`}
    >
      {/* {isPositive ? "+" : "-"} */}
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

        <div className="flex items-center gap-[8px]">
          {actionButtons && actionButtons}

          {period && (
            <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
              {period}
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex-1 min-h-0 ${childrenClassName ? childrenClassName : "space-y-[24px]"}`}
      >
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
