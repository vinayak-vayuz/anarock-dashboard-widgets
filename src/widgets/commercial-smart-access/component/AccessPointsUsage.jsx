import React from "react";
import Card from "../../components/CardNoLogo";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";

function AccessPointsUsage({ data = [] }) {
  const staticData = [
    { name: "Google", value: 82000 },
    { name: "Uber", value: 67000 },
    { name: "ANAROCK", value: 60000 },
    { name: "Flipkart", value: 48000 },
    { name: "HP", value: 41000 },
    { name: "Myntra", value: 30000 },
    { name: "Cloudscape", value: 20000 },
    { name: "Infosys", value: 9000 },
  ];

  const finalData = data.length ? data : staticData;

  const formatYAxis = (value) => {
    if (value >= 1000) return `${value / 1000}K`;
    return value;
  };

  const maxValue = Math.max(...finalData.map(item => item.value));

  return (
    <Card title="Access Points Usage" titleWeight="semi-bold" className="h-[362px]">
      <div className="mt-[24px] h-[270px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={finalData} barSize={60}
           margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="8 8" vertical={false} />
            <ReferenceLine y={0} stroke="#EBEBEB" strokeDasharray="0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={false} />

            <Bar dataKey="value" barSize={60}>
              {finalData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.value === maxValue ? "#3C81F6" : "#79ABFF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default AccessPointsUsage;