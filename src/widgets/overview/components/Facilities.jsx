import { Card, Chip, CustomTooltip } from "../../utils";
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

const dummyFacilitiesData = {
  totalBookings: 78,
  totalSlots: 120,
  utilizationRate: 65, // overall utilization %
  slots: [
    {
      slot_start_time: "6:00 AM",
      slot_bookings: 3,
      total_slots: 5,
      utilization_rate: 60,
    },
    {
      slot_start_time: "7:00 AM",
      slot_bookings: 5,
      total_slots: 7,
      utilization_rate: 65,
    },
    {
      slot_start_time: "8:00 AM",
      slot_bookings: 8,
      total_slots: 10,
      utilization_rate: 70,
    },
    {
      slot_start_time: "9:00 AM",
      slot_bookings: 6,
      total_slots: 9,
      utilization_rate: 68,
    },
    {
      slot_start_time: "10:00 AM",
      slot_bookings: 7,
      total_slots: 10,
      utilization_rate: 72,
    },
    {
      slot_start_time: "11:00 AM",
      slot_bookings: 5,
      total_slots: 8,
      utilization_rate: 64,
    },
    {
      slot_start_time: "12:00 PM",
      slot_bookings: 4,
      total_slots: 7,
      utilization_rate: 58,
    },
    {
      slot_start_time: "1:00 PM",
      slot_bookings: 6,
      total_slots: 9,
      utilization_rate: 66,
    },
    {
      slot_start_time: "2:00 PM",
      slot_bookings: 8,
      total_slots: 10,
      utilization_rate: 72,
    },
    {
      slot_start_time: "3:00 PM",
      slot_bookings: 10,
      total_slots: 12,
      utilization_rate: 75,
    },
    {
      slot_start_time: "4:00 PM",
      slot_bookings: 7,
      total_slots: 9,
      utilization_rate: 70,
    },
    {
      slot_start_time: "5:00 PM",
      slot_bookings: 9,
      total_slots: 11,
      utilization_rate: 74,
    },
    {
      slot_start_time: "6:00 PM",
      slot_bookings: 6,
      total_slots: 8,
      utilization_rate: 68,
    },
    {
      slot_start_time: "7:00 PM",
      slot_bookings: 4,
      total_slots: 6,
      utilization_rate: 63,
    },
    {
      slot_start_time: "8:00 PM",
      slot_bookings: 2,
      total_slots: 4,
      utilization_rate: "58%",
    },
    {
      slot_start_time: "9:00 PM",
      slot_bookings: 1,
      total_slots: 3,
      utilization_rate: "54%",
    },
  ],
};

// ---------- helpers ----------
function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [raw, meridian] = timeStr.split(" ");
  let [hours, minutes] = raw.split(":").map(Number);
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function fillHourlyData(slots) {
  const hours = Array.from({ length: 24 }, (_, i) => i); // 0–23
  const formatted = hours.map((h) => {
    const found = slots.find((slot) => {
      const mins = timeToMinutes(slot.slot_start_time);
      return Math.floor(mins / 60) === h;
    });

    const meridian = h >= 12 ? "PM" : "AM";
    const hr = h % 12 || 12;
    const timeLabel = `${hr} ${meridian}`;

    return {
      time: timeLabel,
      bookings: found?.slot_bookings || 0,
      // total: found?.total_slots || 0,
      utilization: found?.averageUtilizationPercentage || 0,
    };
  });

  // repeat 12 AM (next day)
  // formatted.push({
  //   time: "12 AM (Next)",
  //   bookings: 0,
  //   total: 0,
  //   utilization: 0,
  // });

  return formatted;
}

function Facilities({ isStatic, data }) {
  const totalBookings = Number(data?.totalBookings || 0);
  // const totalSlots = Number(data?.totalSlots || 0);
  const utilizationRate = Number(data?.utilizationRate || 0);

  const chartData = useMemo(() => {
    if (!data?.slots?.length) return [];
    return fillHourlyData(data.slots);
  }, [data]);

  const xTickFormatter = (time) => {
    const importantLabels = ["1 AM", "6 AM", "11 AM", "5 PM", "10 PM"];
    return importantLabels.includes(time) ? time : "";
  };

  const maxY =
    chartData.length > 0 ? Math.max(...chartData.map((d) => d.total), 5) : 5;

  function formatHourToAMPM(hour) {
    const meridian = hour >= 12 ? "PM" : "AM";
    let h = hour % 12;
    if (h === 0) h = 12;
    return `${h} ${meridian}`;
  }

  const chartDataWithFallback = chartData.length
    ? chartData
    : Array.from({ length: 24 }, (_, i) => ({
        time: formatHourToAMPM(i),
        bookings: 0,
        // total: 0,
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
    >
      {/* Summary */}
      <div className="grid grid-cols-2 gap-[24px] mb-[16px]">
        <div>
          <div className="!text-[12px] text-[#64748B]">Bookings</div>
          <div className="!text-[24px] font-medium text-[#8B5CF6]">
            {totalBookings}
          </div>
        </div>
        {/* <div>
          <div className="!text-[12px] text-[#64748B]">Total Slots</div>
          <div className="!text-[24px] font-medium text-[#F59E0B]">
            {totalSlots}
          </div>
        </div> */}
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
            margin={{ top: 0, right: -30, left: -40, bottom: 0 }}
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
              domain={[0, maxY]}
              tick={{ fontSize: 10, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[20, 100]}
              ticks={[20, 40, 60, 80, 100]}
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
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="total"
              name="Total Slots"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={false}
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
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default Facilities;
