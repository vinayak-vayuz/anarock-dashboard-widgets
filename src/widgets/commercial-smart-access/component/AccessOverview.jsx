import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/CardNoLogo";
import { CommercialCustomTooltip } from "../../utils";
import EmptyState from "../../utils/EmptyState";

function AccessOverview({ data = null }) {
  const staticApiData = {
    total: 79.6,
    entries: 59350,
    exit: 40950,
  };

  // ✅ Safe fallback (handles null, undefined, empty object)
  const finalData =
    data && Object.keys(data).length > 0 ? data : staticApiData;

  // ✅ Safe number conversion
  const safeNumber = (value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  const totalEntries = safeNumber(finalData.entries);
  const totalExit = safeNumber(finalData.exit);

  // ✅ NEW: check if all values are zero
  const isAllZero =
    data &&
    Object.keys(data).length > 0 &&
    Number(data.entries) === 0 &&
    Number(data.exit) === 0;

  const chartData = [
    { name: "Entries", value: totalEntries, color: "#8B5CF6" },
    { name: "Exit", value: totalExit, color: "#329DFF" },
  ];

  const totalAccess = safeNumber(finalData.total);

  return (
    <Card className="h-[362px]" title="Access Overview" titleWeight="semi-bold">

      {/* ✅ NEW: Empty State Condition */}
      {isAllZero ? (
        <div className="h-[300px] flex items-center justify-center">
          <EmptyState
            title="No access Point Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      ) : (

      <div className="flex flex-col items-center mt-[16px]">

        {/* Donut */}
        <div className="relative w-[200px] h-[200px]">

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[130px] h-[130px] rounded-full shadow-[0px_12px_35px_rgba(0,0,0,0.12)]" />
          </div>

          <div className="h-[212px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={100}
                  startAngle={360}
                  endAngle={-180}
                  paddingAngle={1}
                  stroke="transparent"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip
                  content={<CommercialCustomTooltip />}
                  wrapperStyle={{ zIndex: 9999 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-[22px] leading-[27px] font-medium text-[#121212]">
              {totalAccess}
            </div>
            <div className="text-[12px] leading-[17px] text-[#64748B]">
              Total Access
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-[28px] flex justify-between w-full px-[20px]">

          {/* Entries */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-[6px]">
              <div className="w-[14px] h-[6px] bg-[#8B5CF6]" />
              <div className="text-[12px] leading-[16px] text-[#64748B]">
                Entries
              </div>
            </div>
            <div className="text-[18px] font-medium text-[#8B5CF6] mt-[4px]">
              {totalEntries.toLocaleString()}
            </div>
          </div>

          {/* Exit */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-[6px]">
              <div className="w-[14px] h-[6px] bg-[#329DFF]" />
              <div className="text-[12px] leading-[16px] text-[#64748B]">
                Exit
              </div>
            </div>
            <div className="text-[18px] font-medium text-[#329DFF] mt-[4px]">
              {totalExit.toLocaleString()}
            </div>
          </div>

        </div>
      </div>

      )}

    </Card>
  );
}

export default AccessOverview;