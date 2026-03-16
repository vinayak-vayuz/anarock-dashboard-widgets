import React from "react";
import Card from "../../components/CardNoLogo";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import EmptyState from "../../utils/EmptyState";

/* Dummy fallback data */
const dummyData = [
  { building_name: "Google", no_of_booking: 1 },
  { building_name: "Uber", no_of_booking: 2 },
  { building_name: "ANAROCK", no_of_booking: 4 },
  { building_name: "Flipkart", no_of_booking: 2 },
  { building_name: "HP", no_of_booking: 1 },
];

function BookingTrendChart({ data }) {

  const isEmptyArray = Array.isArray(data) && data?.length === 0;

  const chartData =
    data === undefined || data === null
      ? dummyData
      : Array.isArray(data)
      ? data
      : [];

  return (
    <Card
      title="Booking Trend by Organisation"
      titleWeight="semi-bold"
      className="h-[362px]"
    >
      <div className="w-full h-[265px] mt-[28px] flex items-center justify-center">

        {isEmptyArray ? (
          <EmptyState
            title="No Booking Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData || []}
              margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="building_name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />

              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                tickFormatter={(value) => `${value ?? 0}`}
              />

              <Tooltip
  formatter={(value) => [value, "Bookings"]}
  labelFormatter={(label) => `Organisation: ${label}`}
  cursor={{ fill: "rgba(0,0,0,0.05)" }}
  contentStyle={{
    backgroundColor: "#000",
    border: "none",
    borderRadius: "6px"
  }}
  labelStyle={{ color: "#fff" }}
  itemStyle={{ color: "#fff" }}
/>

              {/* Fixed bar color */}
              <Bar
                dataKey="no_of_booking"
                barSize={54}
                fill="#12B981"
              />

            </BarChart>
          </ResponsiveContainer>
        )}

      </div>
    </Card>
  );
}

export default BookingTrendChart;