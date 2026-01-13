import { Card, CustomTooltip } from "../../utils";
import { useMemo } from "react";
import { LuDoorOpen } from "react-icons/lu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ActionButtons } from "../../components/ActionButtons";

export const dummyFacilitiesData = {
  communityId: 2,
  reportDate: "2025-10-29",
  totalBookings: 24,
  averageUtilizationPercentage: "0.56", // 56%
  graph: {
    labels: [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
    ],
    bookings: [
      0, 0, 0, 0, 1, 1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 5, 4, 2, 1, 1, 0, 0,
    ],
    utilization: [
      0, 0, 0, 0, 10, 15, 25, 35, 50, 45, 40, 30, 35, 50, 45, 60, 55, 70, 65,
      50, 35, 20, 10, 5,
    ],
  },
};

function Facilities({ isStatic, data }) {
  // ✅ Fallback safe defaults
  const totalBookings = Number(data?.totalBookings || 0);
  const utilizationRate = Number(data?.averageUtilizationPercentage || 0);

  // ✅ Transform API graph data into Recharts-friendly format
  const chartData = useMemo(() => {
    if (!data?.graph) return [];

    const { labels = [], bookings = [], utilization = [] } = data.graph;

    return labels.map((label, index) => ({
      time: label,
      bookings: bookings[index] || 0,
      utilization: utilization[index] || 0,
    }));
  }, [data]);

  // ✅ X-Axis tick simplification
  const xTickFormatter = (time) => {
    const importantLabels = ["12 AM", "6 AM", "12 PM", "6 PM", "11 PM"];
    return importantLabels.includes(time) ? time : "";
  };

  const chartDataWithFallback = chartData.length
    ? chartData
    : Array.from({ length: 24 }, (_, i) => ({
        time: `${i % 12 || 12} ${i >= 12 ? "PM" : "AM"}`,
        bookings: 0,
        utilization: 0,
      }));

  return (
    <Card
      title="Facilities"
      period="Today"
      icon={<LuDoorOpen className="!text-[24px] text-[#8B5CF6]" />}
      className={`${
        isStatic && "max-h-[305px]"
      } h-[305px] mb-4 break-inside-avoid`}
      actionButtons={
        <ActionButtons
          widgetId={data?.widget_id}
          options={data?.communities}
          onFilterChange={(value, widget) => console.log(value, widget)}
          onExport={(widget) => console.log("Export triggered for", widget)}
        />
      }
    >
      {/* Summary */}
      <div className="grid grid-cols-2 gap-[24px] mt-[16px] mb-[16px]">
        <div>
          <div className="!text-[12px] text-[#64748B]">Bookings</div>
          <div className="!text-[24px] font-medium text-[#8B5CF6]">
            {totalBookings}
          </div>
        </div>
        <div>
          <div className="!text-[12px] text-[#64748B]">Utilisation Rate</div>
          <div className="!text-[24px] font-medium text-[#329DFF]">
            {utilizationRate.toFixed(2)}%
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartDataWithFallback}
            margin={{ top: 5, right: -30, left: -35, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#EBEBEB" />
            <XAxis
              dataKey="time"
              interval={0}
              tickFormatter={xTickFormatter}
              tick={{
                fontSize: 10,
                fill: "#121212",
                fontWeight: 400,
              }}
              axisLine={false}
              tickLine={false}
              minTickGap={0}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 10, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 10, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <RTooltip content={<CustomTooltip />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="bookings"
              name="Bookings"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="utilization"
              name="Utilization Rate"
              stroke="#329DFF"
              strokeWidth={2}
              dot={false}
              strokeDasharray="2 4"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default Facilities;
