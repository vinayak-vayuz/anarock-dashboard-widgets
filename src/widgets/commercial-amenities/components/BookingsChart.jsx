import React from "react";
import Card from "../../components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { MessageSquare } from "lucide-react";

const data = [
  { name: "Table Tennis", value: 50 },
  { name: "GYM", value: 410 },
  { name: "Meeting Room B", value: 35 },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 63} y={y - 18} width={63} height={40}>
      <div
        className="text-[12px] leading-[16px] text-[#121212] "
        style={{
          width: "63px",
          whiteSpace: "normal",
          wordBreak: "break-word",
          textAlign: "left",
        }}
      >
        {payload.value}
      </div>
    </foreignObject>
  );
};

const maxValue = Math.max(...data.map((item) => item.value));

function BookingsChart() {
  return (
    <Card
      title="Bookings"
      icon={<MessageSquare size={18} className="text-[#DBB467]" />}
      className="h-[288px]"
    >
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              type="number"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={true}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={80}
              tick={<CustomYAxisTick />}
            />

            <Bar dataKey="value" barSize={57}>
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

export default BookingsChart;
