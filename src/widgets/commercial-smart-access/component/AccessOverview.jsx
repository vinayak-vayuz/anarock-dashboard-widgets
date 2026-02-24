import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/CardNoLogo";
import {CustomTooltip} from "../../components/CustomTooltip";

function AccessOverview({ data = null }) {
  const staticApiData = {
    card_entry: 60,
    mobile_entry: 35,
    card_exit: 15,
    mobile_exit: 10,
    total: 20.3,
  };

  const finalData = data ? data : staticApiData;

  const safeNumber = (value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  const chartData = [
    { name: "Card Entry", value: safeNumber(finalData.card_entry), color: "#329DFF" },
    { name: "Mobile Entry", value: safeNumber(finalData.mobile_entry), color: "#8B5CF6" },
    { name: "Card Exit", value: safeNumber(finalData.card_exit), color: "#B1D2F0" },
    { name: "Mobile Exit", value: safeNumber(finalData.mobile_exit), color: "#DACBFB" },
  ];

  const totalAccess = safeNumber(finalData.total);

  return (
    <Card className="h-[362px]"
     title="Access Overview"
     titleWeight="semi-bold"
     >

      <div className="flex flex-col items-center mt-[16px]">
        
        <div className="relative w-[200px] h-[200px]">
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[130px] h-[130px] rounded-full shadow-[0px_12px_35px_rgba(0,0,0,0.12)]" />
          </div>

<div className="h-[184px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={65}
                outerRadius={90}
                startAngle={110}
                endAngle={-250}
                paddingAngle={2}
                stroke="transparent"
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                content={<CustomTooltip />}
                wrapperStyle={{ zIndex: 9999 }}
              />
            </PieChart>
          </ResponsiveContainer>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-[20px] leading-[24px] font-semibold text-[#121212]">
              {totalAccess}L
            </div>
            <div className="text-[10px] leading-[15px] text-[#64748B]">
              Total Access
            </div>
          </div>
        </div>

        <div className="mt-[32px] grid grid-cols-2 gap-x-[20px] gap-y-[12px] text-[12px] text-[#94A3B8]">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-[16px] h-[7px] "
                style={{ backgroundColor: item.color }}
              />
              <div className="text-[12px] leading-[16px] text-[#64748B]">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default AccessOverview;
