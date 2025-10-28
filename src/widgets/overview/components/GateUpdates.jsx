import { useState } from "react";
import { Card, Chip, CustomTooltip } from "../../utils";
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
import Tippy from "@tippyjs/react";

const dummyGateData = {
  summary: {
    activeWalkins: { visitor_in: 12, total_pass: 50 },
    preApprovedCheckins: { expected_pass_scanned: 8, total_expected_pass: 20 },
    staffAttendance: { total_in_now: 18, total_in_today: 25 },
  },
  chart: [
    { hour: 0, walkins: 2, preApproved: 1, staffAttendance: 5 },
    { hour: 1, walkins: 0, preApproved: 0, staffAttendance: 4 },
    { hour: 2, walkins: 1, preApproved: 0, staffAttendance: 4 },
    { hour: 3, walkins: 0, preApproved: 1, staffAttendance: 3 },
    { hour: 4, walkins: 3, preApproved: 1, staffAttendance: 5 },
    { hour: 5, walkins: 1, preApproved: 0, staffAttendance: 4 },
    { hour: 6, walkins: 2, preApproved: 1, staffAttendance: 6 },
    { hour: 7, walkins: 4, preApproved: 2, staffAttendance: 7 },
    { hour: 8, walkins: 5, preApproved: 3, staffAttendance: 8 },
    { hour: 9, walkins: 6, preApproved: 4, staffAttendance: 9 },
    { hour: 10, walkins: 7, preApproved: 5, staffAttendance: 10 },
    { hour: 11, walkins: 5, preApproved: 3, staffAttendance: 8 },
    { hour: 12, walkins: 6, preApproved: 4, staffAttendance: 9 },
    { hour: 13, walkins: 7, preApproved: 5, staffAttendance: 10 },
    { hour: 14, walkins: 8, preApproved: 6, staffAttendance: 11 },
    { hour: 15, walkins: 9, preApproved: 7, staffAttendance: 12 },
    { hour: 16, walkins: 10, preApproved: 8, staffAttendance: 13 },
    { hour: 17, walkins: 9, preApproved: 7, staffAttendance: 12 },
    { hour: 18, walkins: 8, preApproved: 6, staffAttendance: 11 },
    { hour: 19, walkins: 7, preApproved: 5, staffAttendance: 10 },
    { hour: 20, walkins: 6, preApproved: 4, staffAttendance: 9 },
    { hour: 21, walkins: 4, preApproved: 3, staffAttendance: 7 },
    { hour: 22, walkins: 3, preApproved: 2, staffAttendance: 6 },
    { hour: 23, walkins: 2, preApproved: 1, staffAttendance: 5 },
  ],
};

function formatHourToAMPM(hour) {
  const meridian = hour >= 12 ? "PM" : "AM";
  let h = hour % 12;
  if (h === 0) h = 12;
  return `${h} ${meridian}`;
}

function generateHourlyChartData(data) {
  return Array.from({ length: 24 }, (_, hour) => {
    const item = data.find((d) => d.hour === hour) || {};
    return {
      hour,
      time: formatHourToAMPM(hour),
      walkins: item.walkins ?? 0,
      checkins: item.preApproved ?? 0,
      staffAttendance: item.staffAttendance ?? 0,
    };
  });
}

const COLORS = {
  walkins: "#1FA05B",
  preApproved: "#E7A015",
  staffAttendance: "#329DFF",
};

export function HoverDetailCard({ type, data, children }) {
  if (!type || !data) return children;

  const cardMap = {
    activeWalkins: [
      ["Currently Inside", data.currently_inside],
      ["Absent Today", data.absent_today],
      ["Total Visited Today", data.total_visited_today],
      ["Total Staff", data.total_staff],
    ],
    preApprovedCheckins: [
      ["Currently Inside", data.currently_inside],
      ["Total Visited Today", data.total_visited_today],
      ["No Show", data.no_show],
      ["Total Scheduled", data.total_scheduled],
    ],
    staffAttendance: [
      ["Currently Inside", data.currently_inside],
      ["Total Visited Today", data.total_visited_today],
    ],
  };

  const titleMap = {
    activeWalkins: "Active Walk-ins",
    preApprovedCheckins: "Pre-approved Check-ins",
    staffAttendance: "Staff Checked-in",
  };

  const colorMap = {
    activeWalkins: "text-[#1FA05B]",
    preApprovedCheckins: "text-[#E7A015]",
    staffAttendance: "text-[#329DFF]",
  };

  const content = (
    <Card
      title={titleMap[type]}
      period="Today"
      icon={<LuWaves className={`${colorMap[type]} !text-[24px]`} />}
      className="!gap-0 w-[353px] bg-white shadow-xl rounded-lg border border-gray-200"
    >
      <div className="flex flex-col gap-[8px] mt-[12px] pt-[12px] border-t border-dashed border-[#EBEBEB]">
        {cardMap[type].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between text-[14px] text-[#64748B]"
          >
            <div>{label}</div>
            <div className="font-semibold text-gray-800">{value ?? 0}</div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <Tippy
      content={content}
      placement="bottom-start"
      interactive={true}
      delay={[100, 0]}
      offset={[0, 8]}
      appendTo={document.body}
      theme="light-border"
      maxWidth="none"
    >
      {children}
    </Tippy>
  );
}

function GateUpdates({ isStatic, data }) {
  const [hovered, setHovered] = useState(null);

  const activeWalkins = data?.summary?.activeWalkins || {};
  const preApproved = data?.summary?.preApprovedCheckins || {};
  const staffAttendance = data?.summary?.staffAttendance || {};

  const chartData = generateHourlyChartData(data?.chart || []);

  // Dynamic Y-axis ticks
  const maxValue = Math.max(
    ...chartData.flatMap((d) => [d.walkins, d.checkins, d.staffAttendance])
  );
  const yAxisMax = maxValue > 0 ? maxValue : 5; // minimum max if all zero
  const yAxisTicks = [0, Math.ceil(yAxisMax / 2), yAxisMax];

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
        <div className="grid grid-cols-3 gap-[24px] mb-[16px]">
          {[
            {
              key: "activeWalkins",
              data: activeWalkins,
              color: COLORS.walkins,
              label: "Active Walk-ins",
            },
            {
              key: "staffAttendance",
              data: staffAttendance,
              color: COLORS.staffAttendance,
              label: "Staff Checked-in",
            },
            {
              key: "preApprovedCheckins",
              data: preApproved,
              color: COLORS.preApproved,
              label: "Pre-approved",
            },
          ].map((item) => (
            <HoverDetailCard key={item.key} type={item.key} data={item.data}>
              <div className="flex flex-col gap-[8px] cursor-pointer">
                <div className="text-[10px] text-[#64748B] whitespace-nowrap">
                  {item.label}
                </div>
                <div
                  className="text-[28px] font-medium flex items-center"
                  style={{ color: item.color }}
                >
                  {item.key === "activeWalkins"
                    ? item.data?.visitor_in ?? 0
                    : item.key === "preApprovedCheckins"
                    ? item.data?.expected_pass_scanned ?? 0
                    : item.data?.total_in_now ?? 0}
                  <div className="text-[20px] text-[#64748B] ml-1">
                    /
                    {item.key === "activeWalkins"
                      ? item.data?.total_pass ?? 0
                      : item.key === "preApprovedCheckins"
                      ? item.data?.total_expected_pass ?? 0
                      : item.data?.total_in_today ?? 0}
                  </div>
                </div>
              </div>
            </HoverDetailCard>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full h-[105px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 1, right: 0, left: -40, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#EBEBEB" />

              <XAxis
                dataKey="time"
                tickFormatter={(value, index) => (index % 4 === 0 ? value : "")}
                tick={{ fontSize: 10, fill: "#121212", fontWeight: 400 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fontSize: 10, fill: "#64748B", fontWeight: 400 }}
                ticks={yAxisTicks}
                domain={[0, yAxisMax]}
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
              />

              <RTooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="walkins"
                stroke={COLORS.walkins}
                strokeWidth={2}
                dot={false}
                name="Active Walk-ins"
              />
              <Line
                type="monotone"
                dataKey="checkins"
                stroke={COLORS.preApproved}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Pre-approved"
              />
              <Line
                type="monotone"
                dataKey="staffAttendance"
                stroke={COLORS.staffAttendance}
                strokeWidth={2}
                dot={false}
                name="Staff Attendance"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default GateUpdates;
