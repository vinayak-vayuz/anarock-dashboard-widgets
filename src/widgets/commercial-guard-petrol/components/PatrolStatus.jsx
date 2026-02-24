
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/CardNoLogo";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

const data = [
  { name: "Completed", value: 46, color: "#12B981" },
  { name: "Delayed", value: 2, color: "#EF4444" },
  { name: "Missed", value: 2, color: "#F69E0A" },
];

function GuardPatrols() {
  const total = 50;
  const completed = data.find((d) => d.name === "Completed")?.value || 0;

  return (
    <Card
      title="Guard Patrols"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-[215px] h-[182px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(val) => val.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="font-medium text-[19.35px] leading-[23.65px] ">
              {completed}/{total}
            </div>
            <div className="text-[10.75px] leading-[15.05px] text-[#64748B]">
              Completed
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full  text-[14px]">
          {data.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center justify-between py-[10px] ${index !== data.length - 1 ? "border-b border-[#F1F5F9]" : ""
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
