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
import EmptyState from "../../utils/EmptyState";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-[16px] py-[8px] rounded-[8px] text-sm shadow-lg">
        <div className="flex items-center gap-[8px]">
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
      <text x={-85} y={0} textAnchor="start" fill="#121212" fontSize={14}>
        {words.map((word, index) => (
          <tspan key={index} x={-85} dy={index === 0 ? 0 : 16}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

function TicketsPerCategory({ data = [] }) {
  const hasData = data && data.length > 0;

  const chartData = data.map((item) => ({
    name: item.category_name,
    value: item.total_complaints,
  }));

  return (
    <Card
      title="Tickets per Category"
      className="h-[362px]"
      titleWeight="semi-bold"
      childrenClassName="h-full"
    >
      {!hasData ? (
        <EmptyState
          title="No Tickets Found"
          description="Catch up all the data. Change the date range to see the data."
        />
      ) : (
        <div className="w-full h-[280px] mt-[28px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />

              <XAxis
                type="number"
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                axisLine
                tickLine={false}
                allowDecimals={false}
              />

              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                width={120}
                tick={<CustomYAxisTick />}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />

              <Bar dataKey="value" barSize={36} fill="#08B6D4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}

export default TicketsPerCategory;
