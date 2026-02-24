import React from "react";
import Card from "../../components/CardNoLogo";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Google", value: 14 },
  { name: "Uber", value: 12 },
  { name: "ANAROCK", value: 4 },
  { name: "Flipkart", value: 2 },
  { name: "HP", value: 1 },
];

function BookingTrendChart() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card title="Booking Trend by Organisation" titleWeight="semi-bold" className="h-[362px]">
     <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
              tickFormatter={(value) => `₹ ${value}L`}
            />

            <Bar dataKey="value"  barSize={54}>
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

export default BookingTrendChart;
