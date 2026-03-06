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

  /* ✅ ADD THIS: Show No Data when API returns empty array */
  const isEmptyArray = Array.isArray(data) && data.length === 0;

  /* ✅ Use dummy data only when API data is null/undefined */
  const chartData =
    data === undefined || data === null
      ? dummyData
      : data;

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
      <div className="w-full h-full flex items-center justify-center">

        {/* ✅ Show message if data = [] */}
        {isEmptyArray ? (
          <p className="text-sm text-gray-500">No Data Found</p>
        ) : (
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
        )}

      </div>
    </Card>
  );
}

export default BookingsChart;