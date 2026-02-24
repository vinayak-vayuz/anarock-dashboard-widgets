import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Card from "../../components/CardNoLogo";

const data = [
  { name: "Room Maintenance", value: 82 },
  { name: "Facilities", value: 74 },
  { name: "House Keeping", value: 52 },
  { name: "Security", value: 18 },
  { name: "IT Support", value: 10 },
];

const maxValue = Math.max(...data.map(item => item.value));

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-4 py-2 rounded-lg text-sm shadow-lg">
        <div className="flex items-center gap-2">
          <div>{payload[0].payload.name}</div>
          <div className="font-semibold">{payload[0].value}</div>
        </div>
      </div>
    );
  }
  return null;
};

const CustomYAxisTick = ({ x, y, payload }) => {
  const words = payload.value.split(" ");

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-85}
        y={0}
        textAnchor="start"
        fill="#121212"
        fontSize={14}
      >
        {words.map((word, index) => (
          <tspan key={index} x={-85} dy={index === 0 ? 0 : 16}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

function TicketsPerCategory() {
  return (
    <Card
      title="Tickets per Category"
      className="h-[362px]"
      titleWeight="semi-bold"
      childrenClassName="h-full"
    >
      <div className="w-full h-[280px] mt-[28px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />

            <XAxis
              type="number"
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={true}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={90}
              tick={<CustomYAxisTick />}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            <Bar dataKey="value" barSize={36}>
              {data.map((entry, index) => (
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

export default TicketsPerCategory;