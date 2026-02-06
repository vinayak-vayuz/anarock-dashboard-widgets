import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Card from "../../components/Card";
import { LuDoorOpen } from "react-icons/lu";

const staticData = {
  visitorSummary: {
    totalVisitorsToday: 150,
    peakTime: "2:00 - 4:00PM",
    peakCount: 50,
    activeWalkins: 18,
    preApprovedCheckins: 3,
  },
  popupData: {
    walkins: {
      label: "18/58",
      currently_inside: 18,
      total_visited_today: 58,
    },
    preApproved: {
      label: "3/5",
      completed_visits: 3,
      total_expected_today: 5,
    },
  },
  chartData: [
    { hour: "10 AM", walkins: 22, preApproved: 30 },
    { hour: "12 PM", walkins: 15, preApproved: 28 },
    { hour: "2 PM", walkins: 30, preApproved: 38 },
    { hour: "4 PM", walkins: 45, preApproved: 50 },
    { hour: "6 PM", walkins: 25, preApproved: 40 },
  ],
};

function VisitorUpdates({ data }) {
  const finalData = data && Object.keys(data).length > 0 ? data : staticData;

  const summary = finalData?.visitorSummary || staticData.visitorSummary;
  const popup = finalData?.popupData || staticData.popupData;

  const chartData = useMemo(() => {
    const apiChart = finalData?.chartData || [];

    let hasAnyValue = false;

    for (let i = 0; i < apiChart.length; i++) {
      if (apiChart[i].walkins > 0 || apiChart[i].preApproved > 0) {
        hasAnyValue = true;
        break;
      }
    }

    if (!apiChart.length || !hasAnyValue) return staticData.chartData;

    const formatted = [];

    for (let i = 0; i < apiChart.length; i++) {
      formatted.push({
        time: apiChart[i].hour,
        walkins: apiChart[i].walkins,
        approved: apiChart[i].preApproved,
      });
    }

    return formatted;
  }, [finalData]);

  return (
    <Card
      className="h-[377px]"
      title={
        <div className="flex items-center gap-2">
          <LuDoorOpen className="!text-[20px] text-[#8B5CF6]" />
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
            <p className="text-[20px] leading-[24px] font-medium text-[#08B6D4]">{summary.totalVisitorsToday}</p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Peak Time</p>
            <p className="text-[20px] leading-[24px] font-medium text-[#8B5CF6]">
              {summary.peakTime}
            </p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">Active Walk-ins</p>
           <p className="text-xl font-medium">
              <span className="text-[28px] leading-[32px] text-[#1FA05B]">
                {popup.walkins.currently_inside}
              </span>
              <span className="text-gray-400">
                /{popup.walkins.total_visited_today}
              </span>
            </p>
          </div>

          <div>
            <p className="text-[10px] leading-[14px] text-[#64748B]">
              Pre-approved Check-ins
            </p>
            <p className="text-xl font-medium">
              <span className="text-[28px] leading-[32px] text-[#E7A015]">
                {popup.preApproved.completed_visits}
              </span>
              <span className="text-gray-400">
                /{popup.preApproved.total_expected_today}
              </span>
            </p>
          </div>
        </div>

        <div className="w-full h-[179px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
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
