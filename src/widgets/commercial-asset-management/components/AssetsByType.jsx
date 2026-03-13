import React, { useMemo } from "react";
import Card from "../../components/CardNoLogo";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import EmptyState from "../../utils/EmptyState";

const COLORS = ["#8CB33E", "#F59E0B", "#3B82F6", "#06B6D4", "#CFCFCF"];

const DUMMY_DATA = [
  { asset_group_name: "Lifts", asset_count: 3 },
  { asset_group_name: "Fire Systems", asset_count: 16 },
  { asset_group_name: "Generators", asset_count: 16 },
  { asset_group_name: "HVAC", asset_count: 24 },
  { asset_group_name: "Others", asset_count: 97 },
];

const AssetsByType = ({ rows, totalAssets }) => {
  const assets = useMemo(() => {
    if (!rows) {
      return DUMMY_DATA.map((item, index) => ({
        name: item.asset_group_name,
        value: item.asset_count || 0,
        color: COLORS[index % COLORS.length],
      }));
    }

    if (rows.length === 0) {
      return [];
    }

    return rows.map((item, index) => ({
      name: item.asset_group_name,
      value: item.asset_count || 0,
      color: COLORS[index % COLORS.length],
    }));
  }, [rows]);

  const finalTotal =
    totalAssets ?? assets.reduce((sum, item) => sum + item.value, 0);

  if (rows && rows.length === 0) {
    return (
      <Card title="Assets by Type" titleWeight="semi-bold" className="h-full">
        <div className="flex items-center justify-center h-full">
          <EmptyState
            title="No Assets Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      </Card>
    );
  }
  return (
    <Card title="Assets by Type" titleWeight="semi-bold" className="h-full">
      <div className="flex items-center justify-between h-full">
        {/* Chart */}
        <div className="relative w-[252px] h-[273px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={assets}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                stroke="#FFFFFF"
                strokeWidth={2}
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
            <div className="text-[24px]  leading-[33px] font-medium text-[#121212]">
              {finalTotal}
            </div>
            <div className="text-[12px] leading-[17px] text-[#64748B] mt-[2px]">
              Total Assets
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 max-w-[280px]">
          <div className="rounded-[12px] overflow-hidden bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-[16px] py-[12px] bg-[#F8FAFC]">
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
                className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#F1F5F9]"
              >
                <div className="flex items-center gap-[8px]">
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
