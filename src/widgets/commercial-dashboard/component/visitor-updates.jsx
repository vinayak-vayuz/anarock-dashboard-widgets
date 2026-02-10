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
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";

import Card from "../../components/Card";
import { LuDoorOpen } from "react-icons/lu";

/* -------------------- STATIC DATA -------------------- */

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
      currently_inside: 18,
      total_visited_today: 58,
    },
    preApproved: {
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


function HoverDetailCard({ title, color, rows, children }) {
  const content = (
    <div className="bg-white rounded-xl min-w-[260px] p-4  ">
      <div className="flex items-center gap-2 font-medium text-[#121212]">
        <LuDoorOpen className={`text-[20px] ${color}`} />
        <div>{title}</div>
      </div>

      <div className="mt-3 pt-3 border-t border-dashed border-gray-200 space-y-2">
        {rows.map(({ label, value, valueColor }) => (
          <div
            key={label}
            className="flex justify-between text-[14px]"
          >
            <div>{label}</div>
            <div
              className="font-semibold"
              style={{ color: valueColor || "#121212" }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Tippy
      content={content}
      placement="right-start"
      interactive
      delay={[100, 0]}
      offset={[6, 0]}
      appendTo={() => document.body}
      theme="light-border"
      maxWidth="none"
    >
      {children}
    </Tippy>
  );
}


function VisitorUpdates({ data }) {
  const finalData = data && Object.keys(data).length ? data : staticData;

  const summary = finalData.visitorSummary;
  const popup = finalData.popupData;

  const chartData = useMemo(() => {
    const apiChart = finalData.chartData || [];
    if (!apiChart.length) return staticData.chartData;

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

  const currentTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card
      className="h-[377px]"
      title={
        <div className="flex items-center gap-2">
          <LuDoorOpen className="!text-[20px] text-[#8B5CF6]" />
          <div className="font-medium text-[#121212]">
            Visitor Updates
          </div>
        </div>
      }
      period={
        <div className="flex items-center gap-1 text-[12px] text-[#64748B]">
          <div className="h-[5px] w-[5px] rounded-full bg-[#12B981]" />
          <div>Today at {currentTime}</div>
        </div>
      }
    >
      <div className="flex flex-col mt-2">
        {/* SUMMARY */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-6">
          <div>
            <div className="text-[10px] text-[#64748B]">
              Total Visitors
            </div>
            <div className="text-[20px] font-medium text-[#08B6D4]">
              {summary.totalVisitorsToday}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-[#64748B]">
              Peak Time
            </div>
            <div className="text-[20px] font-medium text-[#8B5CF6]">
              {summary.peakTime}
            </div>
          </div>

          <div className="mt-2">
            <div className="text-[10px] text-[#64748B]">
              Active Walk-ins
            </div>

            <div className="flex items-baseline text-xl font-medium leading-[32px]">
              <div className="text-[28px] text-[#1FA05B] leading-[32px]">
                {popup.walkins.currently_inside}
              </div>

              <HoverDetailCard
                title="Active Walk-ins"
                color="text-[#1FA05B]"
                rows={[
                  {
                    label: "Currently Inside",
                    value: popup.walkins.currently_inside,
                    valueColor: "#1FA05B",
                  },
                  {
                    label: "Total Visited Today",
                    value: popup.walkins.total_visited_today,
                  },
                ]}
              >
                <div className="text-gray-400 cursor-pointer ml-1 leading-[32px]">
                  /{popup.walkins.total_visited_today}
                </div>
              </HoverDetailCard>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-[10px] text-[#64748B]">
              Pre-approved Check-ins
            </div>

            <div className="flex items-baseline text-xl font-medium leading-[32px]">
              <div className="text-[28px] text-[#E7A015] leading-[32px]">
                {popup.preApproved.completed_visits}
              </div>

              <HoverDetailCard
                title="Pre-approved Check-ins"
                color="text-[#E7A015]"
                rows={[
                  {
                    label: "Completed Visits",
                    value: popup.preApproved.completed_visits,
                    valueColor: "#E7A015",
                  },
                  {
                    label: "Total Expected Check-ins Today",
                    value: popup.preApproved.total_expected_today,
                  },
                ]}
              >
                <div className="text-gray-400 cursor-pointer ml-1 leading-[32px]">
                  /{popup.preApproved.total_expected_today}
                </div>
              </HoverDetailCard>
            </div>
          </div>
        </div>

        {/* CHART */}
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
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#121212", fontSize: 12 }}
              />
              <YAxis
                width={30}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <RTooltip />
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
