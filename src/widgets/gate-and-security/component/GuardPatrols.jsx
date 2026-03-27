import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/CardNoLogo";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import { CustomTooltip } from "../../utils";

const DUMMY_DATA = {
  completed: 18,
  not_completed: 6,
  missed: 4,
};

function GuardPatrols({ data = {} }) {
  const resolvedData = data && Object.keys(data).length > 0 ? data : DUMMY_DATA;

  const chartData = [
    {
      name: "Completed",
      value: Number(resolvedData?.completed ?? 0),
      color: "#12B981",
    },
    {
      name: "Delayed",
      value: Number(resolvedData?.not_completed ?? 0),
      color: "#EF4444",
    },
    {
      name: "Missed",
      value: Number(resolvedData?.missed ?? 0),
      color: "#F69E0A",
    },
  ];

  const total =
    Number(resolvedData?.completed ?? 0) +
    Number(resolvedData?.not_completed ?? 0) +
    Number(resolvedData?.missed ?? 0);

  const completed = Number(resolvedData?.completed ?? 0);

  return (
    <Card title="Guard Patrols" className="h-[362px]" titleWeight="semi-bold">
      <div className="flex flex-col items-center justify-center">
        {/* Chart */}
        <div className="w-[215px] h-[182px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData ?? []}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {chartData?.map?.((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color ?? "#ccc"} />
                ))}
              </Pie>

              <Tooltip
                content={<CustomTooltip />}
                wrapperStyle={{ zIndex: 9999 }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="font-medium text-[19.35px] leading-[23.65px]">
              {completed ?? 0}/{total ?? 0}
            </div>
            <div className="text-[10.75px] leading-[15.05px] text-[#64748B]">
              Completed
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col w-full text-[14px]">
          {chartData?.length ? (
            chartData?.map?.((item, index) => (
              <div
                key={item?.name ?? index}
                className={`flex items-center justify-between py-[10px] ${
                  index !== (chartData?.length ?? 0) - 1
                    ? "border-b border-[#F1F5F9]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-[10px]">
                  <div
                    className="inline-block w-[16px] h-[7px]"
                    style={{ backgroundColor: item?.color ?? "#ccc" }}
                  />

                  <div className="leading-[16.09px] text-[12.07px] text-[#64748B]">
                    {item?.name ?? "-"}
                  </div>
                </div>

                <div className="leading-[16.09px] text-[12.07px] text-[#64748B]">
                  {item?.value ?? 0}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 text-sm py-[24px]">
              No patrol data
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default GuardPatrols;
