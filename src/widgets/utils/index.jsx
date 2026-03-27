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

export const CustomTooltip = ({
  active,
  payload,
  label,
  titleFormatter,
  hideTitleForSingle = true,
  valueFormatter,
  rowFormatter,
}) => {
  if (!active || !payload || !payload.length) return null;

  const rows =
    typeof rowFormatter === "function"
      ? rowFormatter({ payload, label })
      : payload.map((item) => ({
          color:
            item.color || item.stroke || item.fill || item.payload?.color || "",
          label: item?.name || item?.payload?.name || item?.dataKey || label,
          value:
            typeof valueFormatter === "function"
              ? valueFormatter(item.value, item, label)
              : item.value,
        }));

  const title =
    typeof titleFormatter === "function" ? titleFormatter(label, payload) : "";

  return (
    <div
      className="relative bg-[#121212] text-white text-[12px] px-[16px] py-[8px] rounded-[8px] shadow-lg"
      style={{
        transform: `translate(12px, -50%)`,
      }}
    >
      <div
        className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0
        border-t-[6px] border-t-transparent
        border-b-[6px] border-b-transparent
        border-r-[6px] border-r-[#121212]"
      />

      {title && !(hideTitleForSingle && rows.length === 1) && (
        <div className="mb-[2px] font-semibold text-white">{title}</div>
      )}

      {rows.map((item, i) => (
        <div key={i} className="flex items-center gap-[8px] capitalize">
          {item.color && <Dot color={item.color} />}
          <span className="text-[#D1D3D4] min-w-[70px]">
            {item.label}
          </span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

function createTooltipRow(row) {
  const rowEl = document.createElement("div");
  rowEl.style.display = "flex";
  rowEl.style.alignItems = "center";
  rowEl.style.gap = "8px";
  rowEl.style.textTransform = "capitalize";

  if (row.color) {
    const dotEl = document.createElement("span");
    dotEl.style.display = "inline-block";
    dotEl.style.width = "8px";
    dotEl.style.height = "8px";
    dotEl.style.borderRadius = "9999px";
    dotEl.style.backgroundColor = row.color;
    dotEl.style.marginRight = "6px";
    rowEl.appendChild(dotEl);
  }

  const labelEl = document.createElement("span");
  labelEl.style.color = "#D1D3D4";
  labelEl.style.minWidth = "70px";
  labelEl.textContent = row.label ?? "";

  const valueEl = document.createElement("span");
  valueEl.style.fontWeight = "600";
  valueEl.textContent = row.value ?? "";

  rowEl.appendChild(labelEl);
  rowEl.appendChild(valueEl);

  return rowEl;
}

function getOrCreateChartJsTooltip(chart) {
  const parent = chart.canvas.parentNode;
  if (!parent) return null;

  if (getComputedStyle(parent).position === "static") {
    parent.style.position = "relative";
  }

  let tooltipEl = parent.querySelector("[data-chartjs-custom-tooltip]");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.dataset.chartjsCustomTooltip = "true";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.left = "0";
    tooltipEl.style.top = "0";
    tooltipEl.style.opacity = "0";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.transform = "translate(12px, -50%)";
    tooltipEl.style.transition = "opacity 120ms ease";
    tooltipEl.style.zIndex = "20";

    const bodyEl = document.createElement("div");
    bodyEl.dataset.chartjsCustomTooltipBody = "true";
    bodyEl.style.position = "relative";
    bodyEl.style.background = "#121212";
    bodyEl.style.color = "#FFFFFF";
    bodyEl.style.fontSize = "12px";
    bodyEl.style.padding = "8px 16px";
    bodyEl.style.borderRadius = "8px";
    bodyEl.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.28)";
    bodyEl.style.display = "flex";
    bodyEl.style.flexDirection = "column";
    bodyEl.style.gap = "6px";
    bodyEl.style.whiteSpace = "nowrap";

    const arrowEl = document.createElement("div");
    arrowEl.style.position = "absolute";
    arrowEl.style.left = "-6px";
    arrowEl.style.top = "50%";
    arrowEl.style.transform = "translateY(-50%)";
    arrowEl.style.width = "0";
    arrowEl.style.height = "0";
    arrowEl.style.borderTop = "6px solid transparent";
    arrowEl.style.borderBottom = "6px solid transparent";
    arrowEl.style.borderRight = "6px solid #121212";

    bodyEl.appendChild(arrowEl);
    tooltipEl.appendChild(bodyEl);
    parent.appendChild(tooltipEl);
  }

  return tooltipEl;
}

export function createChartJsExternalTooltip({
  titleFormatter,
  hideTitleForSingle = true,
  rowsFormatter,
} = {}) {
  return ({ chart, tooltip }) => {
    const tooltipEl = getOrCreateChartJsTooltip(chart);
    if (!tooltipEl) return;

    if (!tooltip || tooltip.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    const bodyEl = tooltipEl.querySelector("[data-chartjs-custom-tooltip-body]");
    if (!bodyEl) return;

    const title =
      typeof titleFormatter === "function"
        ? titleFormatter(tooltip)
        : tooltip.title?.[0] || "";

    const rows =
      typeof rowsFormatter === "function"
        ? rowsFormatter(tooltip)
        : (tooltip.dataPoints || []).map((point) => {
            const background = Array.isArray(point.dataset.backgroundColor)
              ? point.dataset.backgroundColor[point.dataIndex]
              : point.dataset.backgroundColor;
            const border = Array.isArray(point.dataset.borderColor)
              ? point.dataset.borderColor[point.dataIndex]
              : point.dataset.borderColor;

            return {
              label: point.dataset.label || point.label || "",
              value: point.formattedValue ?? point.raw ?? "",
              color: border || background || "#3B82F6",
            };
          });

    bodyEl.replaceChildren();

    const arrowEl = document.createElement("div");
    arrowEl.style.position = "absolute";
    arrowEl.style.left = "-6px";
    arrowEl.style.top = "50%";
    arrowEl.style.transform = "translateY(-50%)";
    arrowEl.style.width = "0";
    arrowEl.style.height = "0";
    arrowEl.style.borderTop = "6px solid transparent";
    arrowEl.style.borderBottom = "6px solid transparent";
    arrowEl.style.borderRight = "6px solid #121212";
    bodyEl.appendChild(arrowEl);

    if (title && !(hideTitleForSingle && rows.length === 1)) {
      const titleEl = document.createElement("div");
      titleEl.style.color = "#FFFFFF";
      titleEl.style.fontWeight = "600";
      titleEl.style.marginBottom = "2px";
      titleEl.textContent = title;
      bodyEl.appendChild(titleEl);
    }

    rows.forEach((row) => {
      bodyEl.appendChild(createTooltipRow(row));
    });

    const parentRect = chart.canvas.parentNode.getBoundingClientRect();
    tooltipEl.style.opacity = "1";
    tooltipEl.style.left = `${tooltip.caretX}px`;
    tooltipEl.style.top = `${tooltip.caretY}px`;

    requestAnimationFrame(() => {
      const rect = tooltipEl.getBoundingClientRect();
      const maxLeft = Math.max(parentRect.width - rect.width - 8, 8);
      const nextLeft = Math.min(Math.max(tooltip.caretX, 8), maxLeft);
      const nextTop = Math.min(
        Math.max(tooltip.caretY, rect.height / 2 + 8),
        parentRect.height - rect.height / 2 - 8,
      );

      tooltipEl.style.left = `${nextLeft}px`;
      tooltipEl.style.top = `${nextTop}px`;
    });
  };
}

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
