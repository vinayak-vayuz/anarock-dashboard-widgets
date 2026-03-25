import React from "react";
import Card from "../../components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { MessageSquare } from "lucide-react";
import EmptyState from "../../utils/EmptyState";
import {CustomTooltip}  from "../../utils";

/* Dummy fallback data */
const dummyData = [
  { facility_name: "Table Tennis", total_booking: 5 },
  { facility_name: "Gym", total_booking: 12 },
  { facility_name: "Meeting Room A", total_booking: 3 },
  { facility_name: "Conference Hall", total_booking: 8 },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={(x || 0) - 80} y={(y || 0) - 18} width={80} height={40}>
      <div
        className="text-[12px] leading-[16px] text-[#121212]"
        style={{
          width: "80px",
          whiteSpace: "normal",
          wordBreak: "break-word",
          textAlign: "left",
        }}
      >
        {payload?.value || ""}
      </div>
    </foreignObject>
  );
};

function BookingsChart({ data ,bar}) {

  const isEmptyArray = Array?.isArray(data) && data?.length === 0;

const baseData =
  data === undefined || data === null
    ? dummyData
    : Array?.isArray(data)
    ? data
    : [];

const chartData = baseData.map((item) => ({
  ...item,
  name: item.facility_name, // required for CustomTooltip
    color: "#8B5CF6",
}));
  return (
    <Card
      title="Bookings"
      icon={<MessageSquare size={18} className="text-[#DBB467]" />}
      className="h-[288px]"
    >
      <div className="w-full h-full flex items-center justify-center">

        {isEmptyArray ? (
          <EmptyState
            title="No Booking Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData || []}
              layout="vertical"
              margin={{ top: 0, right: 10, left: -12, bottom: 0 }}
            >

              <XAxis
                type="number"
                allowDecimals={false}
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

                 <Tooltip
                              content={<CustomTooltip />}
                              cursor={{ fill: "transparent" }}
                              position={{ x: 300, y: 0 }}
              />

              {/* Fixed bar color */}
              <Bar
                dataKey="total_booking"
                barSize={40}
                fill={bar || "#8B5CF6"}
              />

            </BarChart>
          </ResponsiveContainer>
        )}

      </div>
    </Card>
  );
}

export default BookingsChart;