import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Card from "../../components/Card";

const data = [
  { time: "10 AM", walkins: 22, approved: 30 },
  { time: "12 PM", walkins: 15, approved: 28 },
  { time: "2 PM", walkins: 30, approved: 38 },
  { time: "4 PM", walkins: 45, approved: 50 },
  { time: "6 PM", walkins: 25, approved: 40 },
];

function VisitorUpdates() {
  return (
    <Card
      className="h-[377px]"
      title={
        <div className="flex items-center gap-2">
          <EventAvailableOutlinedIcon className="text-purple-500" />
          <span className="font-semibold">Visitor Updates</span>
        </div>
      }
      period={
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Today at 04:00 PM
        </div>
      }
    >
      <div className="flex flex-col ">
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-6">
          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Total Visitors</p>
            <p className="text-[20px] leading-[24px] font-medium text-[#08B6D4]">150</p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Peak Time</p>
            <p className="text-[20px] leading-[24px] font-medium text-[#8B5CF6]">
              2:00 - 4:00PM
            </p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Active Walk-ins</p>
           <p className="text-xl font-medium">
  <span className="text-[28px] leading-[32px] text-[#1FA05B]">18</span>
  <span className="text-gray-400">/58</span>
</p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Pre-approved Check-ins</p>
          <p className="text-xl font-medium">
  <span className="text-[28px] leading-[32px] text-[#E7A015]">3</span>
  <span className="text-gray-400">/5</span>
</p>
          </div>
        </div>

        <div className="w-full h-[179px] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#E5E7EB"
                strokeDasharray="4 4"
                vertical={false}
              />
              <XAxis
                dataKey="time"
                tick={{ fill: "#64748B", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
               width={30} 
                tick={{ fill: "#64748B", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <RTooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="walkins"
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="approved"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default VisitorUpdates;
