import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../../components/ui/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

const data = [
  { name: "Gym Equipment", value: 1000000, color: "#08B6D4" },
  { name: "Security", value: 800000, color: "#EF4444" },
  { name: "Others", value: 600000, color: "#F59E0B" },
  { name: "Pool Maintenance", value: 700000, color: "#8B5CF6" },
  { name: "Administration", value: 520000, color: "#10B981" },
];

function AssetValueBreakdown() {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card
      title="Asset Value Breakdown"
      period={
        <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      }
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-[214px] h-[181px] relative">
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
              <Tooltip formatter={(val) => `AED ${val.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-semibold text-base sm:text-sm">
              AED {(total / 1000000).toFixed(2)}M
            </span>
            <span className="text-xs sm:text-sm text-gray-500">
              Total Assets
            </span>
          </div>
        </div>

        <div className="flex justify-between w-full px-4 sm:px-8 mt-4 text-sm">
          <div className="flex flex-col gap-2">
            {data?.slice(0, 3).map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rotate-45"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600 text-xs">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-start">
            {data?.slice(3).map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rotate-45"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600 text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AssetValueBreakdown;
