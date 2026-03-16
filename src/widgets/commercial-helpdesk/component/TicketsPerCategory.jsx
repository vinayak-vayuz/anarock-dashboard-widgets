import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../../components/CardNoLogo";
import EmptyState from "../../utils/EmptyState";
import { CustomTooltip } from "../../utils";

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
      childrenClassName="h-full mt-[24px]"
    >
      {!hasData ? (
        <EmptyState
          title="No Tickets Found"
          description="Catch up all the data. Change the date range to see the data."
        />
      ) : (
        <div className="w-full h-[252px] pl-[8px] pr-[8px] pb-[10px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 8, left: -8, bottom: 12 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#E5E7EB"
              />

              <XAxis
                type="number"
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                axisLine
                tickLine={false}
                tickMargin={10}
                allowDecimals={false}
              />

              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                width={132}
                tick={<CustomYAxisTick />}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
                position={{ x: 300, y: 0 }}
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
