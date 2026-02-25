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

/* ✅ Dummy fallback data */
const dummyData = [
  { facility_name: "Table Tennis", total_booking: 5 },
  { facility_name: "Gym", total_booking: 12 },
  { facility_name: "Meeting Room A", total_booking: 3 },
  { facility_name: "Conference Hall", total_booking: 8 },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 80} y={y - 18} width={80} height={40}>
      <div
        className="text-[12px] leading-[16px] text-[#121212]"
        style={{
          width: "80px",
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

function BookingsChart({ data }) {
  /* ✅ Use dummy data if API data is empty */
  const chartData =
    data && Array.isArray(data) && data.length > 0
      ? data
      : dummyData;

  /* ✅ Get max value safely */
  const maxValue = Math.max(
    ...chartData.map((item) => item.total_booking || 0),
    0
  );

  return (
    <Card
      title="Bookings"
      icon={<MessageSquare size={18} className="text-[#DBB467]" />}
      className="h-[288px]"
    >
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
          >
            {/* ✅ Whole numbers only */}
            <XAxis
              type="number"
              allowDecimals={false}
              domain={[0, Math.ceil(maxValue)]}
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="facility_name"
              axisLine={false}
              tickLine={false}
              width={100}
              tick={<CustomYAxisTick />}
            />

            <Bar dataKey="total_booking" barSize={40}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.total_booking === maxValue
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

export default BookingsChart;