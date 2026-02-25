import React, { useMemo } from "react";
import Card from "../../components/CardNoLogo";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const AssetsByType = () => {
  const assets = useMemo(
    () => [
      { name: "Lifts", value: 3, color: "#8CB33E" },
      { name: "Fire Systems", value: 16, color: "#F59E0B" },
      { name: "Generators", value: 16, color: "#3B82F6" },
      { name: "HVAC", value: 24, color: "#06B6D4" },
      { name: "Others", value: 97, color: "#CFCFCF" },
    ],
    [] 
  );

  const totalAssets = assets.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card title="Assets by Type" titleWeight="semi-bold" className="h-full">
      <div className="flex items-center justify-between gap-8">
        {/* Chart */}
        <div className="relative w-[240px] h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={assets}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2} // spacing between segments
                stroke="#FFFFFF" // border color
                strokeWidth={2}  // border thickness
                startAngle={90}
                endAngle={-270}
              >
                {assets.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-[24px] leading-[33px]  text-[#121212]">
              {totalAssets}
            </div>
            <div className="text-[12px] leading-[16px] text-[#94A3B8] mt-1">
              Total Assets
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 max-w-[280px]">
          <div className=" rounded-[12px] overflow-hidden bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAFC]">
              <div className="text-[12px] font-medium text-[#64748B]">
                Asset
              </div>
              <div className="text-[12px] font-medium text-[#64748B]">
                Count
              </div>
            </div>

            {/* Rows */}
            {assets.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-3 border-t border-[#F1F5F9]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-[16px] h-[7px]"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="text-[13px] text-[#475569]">{item.name}</div>
                </div>

                <div className="text-[13px] text-[#64748B]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AssetsByType;
