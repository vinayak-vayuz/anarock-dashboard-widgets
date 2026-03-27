import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { createChartJsExternalTooltip } from "../../utils";
ChartJS.register(ArcElement, Tooltip, Legend);

const bottomGlowPlugin = {
  id: "bottomGlow",
  afterDatasetsDraw(chart, args, pluginOptions) {
    if (!pluginOptions?.enabled) return;

    const meta = chart.getDatasetMeta(0);
    if (!meta?.data?.[0]) return;

    const { ctx } = chart;
    const { x, y, innerRadius } = meta.data[0];
    const clippedRadius = Math.max(innerRadius - 2, 0);
    const glowCenterY = y + clippedRadius * 0.9;
    const gradient = ctx.createRadialGradient(
      x,
      glowCenterY,
      0,
      x,
      glowCenterY,
      clippedRadius * 1.08,
    );

    gradient.addColorStop(
      0,
      pluginOptions.color ?? "rgba(186, 230, 253, 0.72)",
    );
    gradient.addColorStop(0.3, "rgba(186, 230, 253, 0.4)");
    gradient.addColorStop(0.58, "rgba(186, 230, 253, 0.16)");
    gradient.addColorStop(1, "rgba(186, 230, 253, 0)");

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, clippedRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(
      x,
      glowCenterY,
      clippedRadius * 1.08,
      clippedRadius * 0.52,
      0,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.restore();
  },
};

const Tickets = ({
  title = "Tickets",
  icon,
  firstLabel = "First",
  firstValue = 0,
  firstColor = "#12B981",
  secondLabel = "Second",
  secondValue = 0,
  secondColor = "#AB0000",
  growthPercentage = "+0%",
  growthText = "Compared to last month",
  totalLabel = "Total",
  centerTopColor = "#0F172A",
  centerBottomColor = "#64748B",
  centerTopSize,
  centerBottomSize,
  showBottomGlow = false,
  bottomGlowColor = "rgba(186, 230, 253, 0.75)",
  widgetType = "",
  resolvedWidgetType: legacyResolvedWidgetType = "",
  data,
}) => {
  const resolvedTitle = data?.title ?? title;
  const resolvedIcon = data?.icon ?? icon;
  const resolvedFirstLabel = data?.firstLabel ?? firstLabel;
  const resolvedFirstValue = Number(data?.firstValue ?? firstValue ?? 0);
  const resolvedFirstColor = data?.firstColor ?? firstColor;
  const resolvedSecondLabel = data?.secondLabel ?? secondLabel;
  const resolvedSecondValue = Number(data?.secondValue ?? secondValue ?? 0);
  const resolvedSecondColor = data?.secondColor ?? secondColor;
  const resolvedGrowthPercentage =
    data?.growthPercentage ?? growthPercentage ?? "+0%";
  const resolvedGrowthText = data?.growthText ?? growthText;
  const resolvedTotalLabel = data?.totalLabel ?? totalLabel;
  const resolvedWidgetType =
    data?.widgetType ?? widgetType ?? legacyResolvedWidgetType;
  const resolvedCenterTopSize =
    data?.centerTopSize ??
    centerTopSize ??
    (resolvedWidgetType === "commercial" ? 34 : 24);
  const resolvedCenterBottomSize =
    data?.centerBottomSize ??
    centerBottomSize ??
    (resolvedWidgetType === "commercial" ? 14 : 9);
  const resolvedShowBottomGlow = data?.showBottomGlow ?? showBottomGlow;
  const resolvedBottomGlowColor = data?.bottomGlowColor ?? bottomGlowColor;

  const total = resolvedFirstValue + resolvedSecondValue;

  const chartData = {
    labels: [resolvedFirstLabel, resolvedSecondLabel],
    datasets: [
      {
        data: [resolvedFirstValue, resolvedSecondValue],
        backgroundColor: [resolvedFirstColor, resolvedSecondColor],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: createChartJsExternalTooltip(),
      },
      bottomGlow: {
        enabled: resolvedShowBottomGlow,
        color: resolvedBottomGlowColor,
      },
    },
  };

  const items = [
    {
      label: resolvedFirstLabel,
      value: resolvedFirstValue,
      color: resolvedFirstColor,
    },
    {
      label: resolvedSecondLabel,
      value: resolvedSecondValue,
      color: resolvedSecondColor,
    },
  ];

  const isPositive = resolvedGrowthPercentage.toString().includes("+");
  const isNegative = resolvedGrowthPercentage.toString().includes("-");
  const dynamicGrowthColor = isPositive ? "#1FA05B" : "#AB0000";
  return (
    <Card
      title={resolvedTitle}
      icon={resolvedIcon}
      className={`
        ${resolvedWidgetType === "commercial" ? "h-[362px]" : "h-[238px]"}`}
    >
      <div className="grid grid-cols-12 gap-[16px] items-center">
        <div className="col-span-5 space-y-[12px]">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className={`text-[12px] text-[#64748B] ${resolvedWidgetType === "commercial" ? "mb-[8px]" : "mb-[8px]"}`}
              >
                {item.label}
              </div>
              <div
                className="text-[28px] leading-[32px] font-medium"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
            </div>
          ))}

          <div
            className={`text-[10px] leading-[14px] flex gap-[4px] ${resolvedWidgetType === "commercial" ? "mt-[20px]" : ""}  items-center`}
            style={{ color: dynamicGrowthColor }}
          >
            {/* {isPositive && <FaCaretUp />}
            {isNegative && <FaCaretDown />} */}

            <div>
              {resolvedGrowthPercentage}
            </div>

            <div className="text-[#64748B] text-[10px] leading-[14px] ml-[4px] whitespace-nowrap">
              {resolvedGrowthText}
            </div>
          </div>
        </div>

        <div className="col-span-7">
          <div
            className={`${
              resolvedWidgetType === "commercial"
                ? "h-[260px] max-w-[263px]"
                : "h-[158px] w-[158px]"
            } relative ml-auto mr-2`}
          >
            <Doughnut
              data={chartData}
              options={options}
              plugins={[bottomGlowPlugin]}
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
              <div
                style={{
                  color: centerTopColor,
                  fontSize: resolvedCenterTopSize,
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                {total}
              </div>
              <div
                style={{
                  color: centerBottomColor,
                  fontSize: resolvedCenterBottomSize,
                  fontWeight: 400,
                  lineHeight: "11px",
                  marginTop: resolvedWidgetType === "commercial" ? 10 : 5,
                }}
              >
                {resolvedTotalLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Tickets;
