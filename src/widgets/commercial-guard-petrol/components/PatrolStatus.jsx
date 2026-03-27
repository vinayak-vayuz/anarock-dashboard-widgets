import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/CardNoLogo";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import { CommercialCustomTooltip } from "../../utils";
import FixTooltip from "../../utils/Tooltip";

function GuardPatrols({ data }) {

  const chartData = [
    {
      name: "Completed",
      value: Number(data?.completed || 0),
      color: "#12B981",
    },
    {
      name: "Not - Completed",
      value: Number(data?.not_completed || 0),
      color: "#F69E0A",
    },
    {
      name: "Missed",
      value: Number(data?.missed || 0),
      color: "#EF4444",
    },
  ];

  const total =
    Number(data?.completed || 0) +
    Number(data?.not_completed || 0) +
    Number(data?.missed || 0);

  const completed = Number(data?.completed || 0);

  return (
    <Card
      title="Patrol Status"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div className="flex flex-col items-center justify-center">
        
        {/* Chart */}
        <div className="w-[215px] h-[182px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

             <Tooltip
  cursor={false}
  allowEscapeViewBox={{ x: true, y: true }}
  content={(props) => {
    if (!props.active) return null;

    return (
      <FixTooltip {...props} data={chartData}>
        <CommercialCustomTooltip {...props} />
      </FixTooltip>
    );
  }}
/>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="font-medium text-[19.35px] leading-[23.65px]">
              {completed}/{total}
            </div>
            <div className="text-[10.75px] leading-[15.05px] text-[#64748B]">
              Completed
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col w-full text-[14px]">
          {chartData.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center justify-between py-[10px] ${index !== chartData.length - 1
                  ? "border-b border-[#F1F5F9]"
                  : ""
                }`}
            >
              <div className="flex items-center gap-[10px]">
                <div
                  className="inline-block w-[16px] h-[7px]"
                  style={{ backgroundColor: item.color }}
                />

                <div className="leading-[16.09px] text-[12.07px] text-[#64748B]">
                  {item.name}
                </div>
              </div>

              <div className="leading-[16.09px] text-[12.07px] text-[#64748B]">
                {item.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}

export default GuardPatrols;