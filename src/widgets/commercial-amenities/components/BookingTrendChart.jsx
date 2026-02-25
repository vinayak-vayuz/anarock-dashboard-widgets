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

/* ✅ Dummy fallback data */
const dummyData = [
  { organisation_name: "Google", total_revenue: 1 },
  { organisation_name: "Uber", total_revenue: 2 },
  { organisation_name: "ANAROCK", total_revenue: 4 },
  { organisation_name: "Flipkart", total_revenue: 2 },
  { organisation_name: "HP", total_revenue: 1 },
];

function BookingTrendChart({ data }) {
  const chartData =
    data && Array.isArray(data) && data.length > 0
      ? data
      : dummyData;

  const maxValue = Math.max(
    ...chartData.map((item) => item.total_revenue || 0),
    0
  );

  return (
    <Card
      title="Booking Trend by Organisation"
      titleWeight="semi-bold"
      className="h-[362px]"
    >
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="organisation_name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />

            <YAxis
              allowDecimals={false}
              domain={[0, Math.ceil(maxValue)]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
              tickFormatter={(value) => `₹ ${value}k`}
            />

            <Bar dataKey="total_revenue" barSize={54}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.total_revenue === maxValue
                      ? "#3C81F6"
                      : "#79ABFF"
                  }
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
