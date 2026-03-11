import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
ChartJS.register(ArcElement, Tooltip, Legend);

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
  widgetType = "",
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
  const resolvedWidgetType = data?.widgetType ?? widgetType;

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
        topSize: 20,
        bottomSize: 10,
        topColor: centerTopColor,
        bottomColor: centerBottomColor,
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
      className={resolvedWidgetType === "commercial" ? "h-[362px]" : "h-[238px]"}
    >
      <div className="grid grid-cols-12 gap-[16px] items-center">
        <div className="col-span-5 space-y-3">
          {items.map((item, index) => (
            <div key={index}>
              <div className="text-[12px] text-[#64748B]">
                {item.label}
              </div>
              <div
                className="text-[28px] leading-[32px]"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
            </div>
          ))}

          <div
  className="text-[10px] flex gap-[4px] items-center"
  style={{ color: dynamicGrowthColor }}
>
  {isPositive && <FaCaretUp />}
  {isNegative && <FaCaretDown />}

  <div>
    {resolvedGrowthPercentage.replace("+", "").replace("-", "")}
  </div>

  <div className="text-[#64748B] text-[10px] ml-[4px]">
    {resolvedGrowthText}
  </div>
</div>
        </div>

        <div className="col-span-7"><div
  className={`${
    resolvedWidgetType === "commercial"
      ? "h-[260px] w-[263px]"
      : "h-[158px] w-[158px]"
  } ml-auto mr-2`}
>
            <Doughnut
              data={chartData}
              options={options}
              plugins={[centerTextPlugin]}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Tickets;
