import React from "react";
import Card from "../../components/Card";
import { LuWaves } from "react-icons/lu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function formatHourToAMPM(hour) {
  const meridian = hour >= 12 ? "PM" : "AM";
  let h = hour % 12;
  if (h === 0) h = 12;
  return `${h} ${meridian}`;
}

function groupGateDataIntoFourHours(data) {
  const bucketSize = 4;
  const grouped = {};

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const hour = Number(item.hour ?? 0);
    const bucketStart = Math.floor(hour / bucketSize) * bucketSize;
    const bucketEnd = bucketStart + bucketSize;
    const key = bucketEnd;

    if (!grouped[key]) {
      grouped[key] = {
        time: formatHourToAMPM(bucketEnd),
        walkins: 0,
        checkins: 0,
      };
    }

    grouped[key].walkins += Number(item.walkins ?? 0);
    grouped[key].checkins += Number(item.preApproved ?? 0);
  }

  return Object.values(grouped);
}

function GateUpdates({ isStatic, data }) {
  const COLORS = {
    green: "#12B981",
    red: "#EF4645",
    indigo: "#EBE4F9",
    purple: "#8B5CF6",
    amber: "#F69E0A",
    gamboge: "#E7A015",
    persimmon: "#E76215",
    blue: "#3b82f6",
    irishBlue: "#08B6D4",
    dodgerBlue: "#329DFF",
    slate: "#64748B",
  };

  const activeWalkins = data?.summary?.activeWalkins || {};
  const preApproved = data?.summary?.preApprovedCheckins || {};
  const staffAttendance = data?.summary?.staffAttendance || {};
  const chartData =
    data?.chart?.length > 0 ? groupGateDataIntoFourHours(data.chart) : [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-black text-white !text-[12px] px-3 py-2 rounded-lg shadow-lg">
        {label && <div className="font-medium mb-1">{label}</div>}
        {payload.map((item, i) => (
          <div
            key={i}
            className="capitalize flex gap-[4px] items-center leading-relaxed"
          >
            <div
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: item.color,
                marginRight: 6,
              }}
            ></div>
            {item.name}: <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card
      title="Gate Updates"
      period="Today"
      icon={<LuWaves className="!text-[24px] text-[#37CC6D]" />}
      className={`${
        isStatic ? "max-h-[303px]" : ""
      } h-[251px] mb-4 break-inside-avoid`}
    >
      <div>
        <div className="flex flex-wrap gap-x-2 gap-y-2 text-[14px] mb-2">
          <div className="flex flex-col gap-[8px]">
            <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B]">
              Active Walk-ins
            </div>
            <div className="!m-0 !text-[28px] !leading-[32px] !font-medium text-[#1FA05B] flex">
              {activeWalkins.visitor_in ?? 0}
              <div className="!m-0 !text-[20px] !leading-[32px] !text-[#64748B]">
                /{activeWalkins.total_pass ?? 0}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B]">
              Pre-approved Check-ins
            </div>
            <div className="!m-0 text-[28px] leading-[32px] font-medium text-[#E7A015] flex">
              {preApproved.expected_pass_scanned ?? 0}
              <div className="text-[20px] leading-[32px] text-[#64748B]">
                /{preApproved.total_expected_pass ?? 0}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B]">
              Staff Attendance
            </div>
            <div className="!m-0 !text-[28px] !leading-[32px] !font-medium text-[#1FA05B] flex">
              {staffAttendance.total_in_now ?? 0}
              <div className="!m-0 !text-[20px] !leading-[32px] !text-[#64748B]">
                /{staffAttendance.total_in_today ?? 0}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px]">
          <ResponsiveContainer width="100%" height="60%">
            <LineChart
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="time"
                tick={{
                  fontSize: 10,
                  lineHeight: 14,
                  fill: "#121212",
                  fontWeight: 400,
                }}
              />
              <YAxis
                yAxisId="left"
                domain={[0, 30]}
                ticks={[0, 10, 20, 30]}
                tick={{
                  fontSize: 10,
                  lineHeight: 14,
                  fill: "#64748B",
                  fontWeight: 400,
                }}
                axisLine={false}
                tickLine={false}
                width={25}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <RTooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="walkins"
                stroke={COLORS.green}
                strokeWidth={2}
                dot={false}
                name="Walk-ins"
              />
              <LineChart
                type="monotone"
                dataKey="checkins"
                stroke={COLORS.amber}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Pre-approved"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default GateUpdates;
