import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import EmptyState from "../../utils/EmptyState";

const DEFAULT_DATA = [
  { name: "Gym Equipment", value: 1000000, color: "#08B6D4" },
  { name: "Security", value: 800000, color: "#EF4444" },
  { name: "Others", value: 600000, color: "#F59E0B" },
  { name: "Pool Maintenance", value: 700000, color: "#8B5CF6" },
  { name: "Administration", value: 520000, color: "#10B981" },
];

const CustomTooltip = ({ active, payload, currency }) => {
  if (!active || !payload || !payload.length) return null;
  const { name, value, payload: p } = payload[0];

  return (
    <div
      style={{
        background: "#1a1a1a",
        borderRadius: "8px",
        padding: "6px 14px 6px 10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        minWidth: "140px",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: p.color,
          flexShrink: 0,
        }}
      />
      <span
        style={{ color: "#fff", fontSize: 13, flex: 1, whiteSpace: "nowrap" }}
      >
        {name}
      </span>
      <span
        style={{
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          paddingLeft: 12,
          whiteSpace: "nowrap",
        }}
      >
        {currency} {Number(value).toLocaleString()}
      </span>
    </div>
  );
};

function AssetValueBreakdown({ data, currency = "AED" }) {
  const chartItems =
    Array.isArray(data) && data.length > 0 ? data : DEFAULT_DATA;

  const total = chartItems.reduce((sum, d) => sum + Number(d.value ?? 0), 0);

  let formattedTotal = "";

  if (total >= 1000000) {
    formattedTotal = `${(total / 1000000).toFixed(2)}M`;
  } else if (total >= 1000) {
    formattedTotal = `${(total / 1000).toFixed(2)}K`;
  } else {
    formattedTotal = total.toString();
  }

  return (
    <Card
      title="Asset Value Breakdown"
      // period={
      //   // <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      // }
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      {total > 0 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[214px] h-[181px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartItems}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                >
                  {chartItems.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip currency={currency} />} />
              </PieChart>
            </ResponsiveContainer>

            {
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="font-semibold text-3xl leading-[12px] ">
                  {currency} {formattedTotal}
                </div>
                <div className="text-[10px] leading-[12.59px] text-[#121212] mt-[6px]">
                  Total Assets
                </div>
              </div>
            }
          </div>

          <div className="flex justify-between w-full px-[8px] sm:px-[12px] mt-4 text-[14px]">
            <div className="flex flex-col gap-[8px]">
              {chartItems.slice(0, 3).map((item) => (
                <div key={item.name} className="flex items-center gap-[8px]">
                  <div
                    className="inline-block h-[7px] w-[7px] rotate-45"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="text-[#64748B] leading-[16px] !text-[12px]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[8px] items-start">
              {chartItems.slice(3).map((item) => (
                <div key={item.name} className="flex items-center gap-[8px]">
                  <div
                    className="inline-block h-[7px] w-[7px] rotate-45"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="text-[#64748B] leading-[16px] !text-[12px]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <EmptyState />
        </div>
      )}
    </Card>
  );
}

export default AssetValueBreakdown;
