import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
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

    gradient.addColorStop(0, pluginOptions.color ?? "rgba(186, 230, 253, 0.72)");
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

const centerTextPlugin = {
  id: "centerText",
  afterDraw(chart, args, pluginOptions) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    if (!meta?.data?.[0]) return;
    const { x, y } = meta.data[0];

    const {
      top = "",
      bottom = "",
      topSize = 20,
      bottomSize = 10,
      topColor = "#0F172A",
      bottomColor = "#64748B",
    } = pluginOptions || {};

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = topColor;
    ctx.font = `600 ${topSize}px Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;
    ctx.fillText(top, x, y - 5);
    ctx.fillStyle = bottomColor;
    ctx.font = `500 ${bottomSize}px Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;
    ctx.fillText(bottom, x, y + 12);
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
    (resolvedWidgetType === "commercial" ? 34 : 20);
  const resolvedCenterBottomSize =
    data?.centerBottomSize ??
    centerBottomSize ??
    (resolvedWidgetType === "commercial" ? 14 : 10);
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
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}`,
        },
        displayColors: false,
      },
      centerText: {
        top: `${total}`,
        bottom: resolvedTotalLabel,
        topSize: resolvedCenterTopSize,
        bottomSize: resolvedCenterBottomSize,
        topColor: centerTopColor,
        bottomColor: centerBottomColor,
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
      className={
        resolvedWidgetType === "commercial" ? "h-[362px]" : "h-[238px]"
      }
    >
      <div className="grid grid-cols-12 gap-[16px] items-center">
        <div className="col-span-5 space-y-[16px]">
          {items.map((item, index) => (
            <div key={index}>
              <div className={`text-[12px] text-[#64748B] ${resolvedWidgetType === "commercial" ? "mb-[8px]" : ""}`}>{item.label}</div>
              <div
                className="text-[28px] leading-[32px]"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
            </div>
          ))}

          <div
            className={`text-[12px] flex gap-[4px] ${resolvedWidgetType === "commercial" ? "mt-[20px]" : ""}  items-center`}
            style={{ color: dynamicGrowthColor }}
          >
            {isPositive && <FaCaretUp />}
            {isNegative && <FaCaretDown />}

            <div>
              {resolvedGrowthPercentage.replace("+", "").replace("-", "")}
            </div>

            <div className="text-[#64748B] text-[12px] leading-[14px] ml-[4px] whitespace-nowrap">
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
            } ml-auto mr-2`}
          >
            <Doughnut
              data={chartData}
              options={options}
              plugins={[bottomGlowPlugin, centerTextPlugin]}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Tickets;
