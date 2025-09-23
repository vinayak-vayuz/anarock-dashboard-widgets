import Card from "../../components/Card";
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

function Facilities({ isStatic, facility }) {
  const totalBookings = Number(facility?.totalBookings || 0);
  const totalSlots = Number(facility?.totalSlots || 0);
  const utilizationRate = Number(facility?.utilizationRate || 0);

  const chartData =
    facility?.slots?.map((slot, index) => ({
      time: slot?.slot_start_time
        ? `${slot.slot_start_time} - ${slot.slot_end_time}`
        : `Slot ${index + 1}`,
      bookings: Number(slot?.slot_bookings || 0),
      total: Number(slot?.total_slots || 0),
    })) || [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        {label && <p className="font-medium mb-1">{label}</p>}
        {payload.map((item, i) => (
          <p key={i} className="capitalize leading-relaxed">
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: item.color,
                marginRight: 6,
              }}
            ></span>
            {item.name}: <span className="font-semibold">{item.value}</span>
          </p>
        ))}
      </div>
    );
  };

  return (
    <Card
      title="Facilities"
      period="Today"
      icon={<LuDoorOpen className="text-2xl text-[#8B5CF6]" />}
      className={`${isStatic && "max-h-[305px]"} mb-4 break-inside-avoid`}
    >
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div className="flex flex-col gap-1">
          <h4 className="!m-0 !text-xs !leading-[16px] !text-[#64748B]">
            Bookings
          </h4>
          <p className="!m-0 !text-[24px] !leading-[28px] !font-medium text-[#8B5CF6]">
            {totalBookings}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="!m-0 !text-xs !leading-[16px] !text-[#64748B]">
            Total Slots
          </h4>
          <p className="!m-0 !text-[24px] !leading-[28px] !font-medium text-[#F59E0B]">
            {totalSlots}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="!m-0 !text-xs !leading-[16px] !text-[#64748B]">
            Utilisation Rate
          </h4>
          <p className="!m-0 !text-[24px] !leading-[28px] !font-medium !text-[#329DFF]">
            {utilizationRate.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#EBEBEB" />
            <XAxis
              dataKey="time"
              tick={{
                fontSize: 10,
                lineHeight: 14,
                fill: "#121212",
                fontWeight: 400,
              }}
              axisLine={false}
              tickLine={false}
              interval={20}
            />
            <YAxis
              yAxisId="left"
              domain={[0, Math.max(...chartData.map((d) => d.total), 5)]}
              tick={{
                fontSize: 10,
                lineHeight: 14,
                fill: "#64748B",
                fontWeight: 400,
              }}
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
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default Facilities;
