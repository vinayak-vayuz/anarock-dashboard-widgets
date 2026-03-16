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
  chart_data: [
    { hour: 10, walkins: 22, preApproved: 30 },
    { hour: 12, walkins: 15, preApproved: 28 },
    { hour: 14, walkins: 30, preApproved: 38 },
    { hour: 16, walkins: 45, preApproved: 50 },
    { hour: 18, walkins: 25, preApproved: 40 },
  ],
};

function formatHourToAMPM(hour) {
  const meridian = hour >= 12 ? "PM" : "AM";
  let formattedHour = hour % 12;
  if (formattedHour === 0) formattedHour = 12;
  return `${formattedHour} ${meridian}`;
}

function parseHourValue(value) {
  if (typeof value === "number" && value >= 0 && value <= 23) {
    return value;
  }

  if (typeof value === "string") {
    const normalizedValue = value.trim().toUpperCase();
    const match = normalizedValue.match(/^(\d{1,2})(?::\d{2})?\s*(AM|PM)$/);

    if (match) {
      let parsedHour = Number(match[1]) % 12;
      if (match[2] === "PM") parsedHour += 12;
      return parsedHour;
    }

    const numericValue = Number(normalizedValue);
    if (
      !Number.isNaN(numericValue) &&
      numericValue >= 0 &&
      numericValue <= 23
    ) {
      return numericValue;
    }
  }

  return null;
}

function generateHourlyChartData(data = []) {
  return Array.from({ length: 24 }, (_, hour) => {
    const matchedItem =
      data.find((item) => parseHourValue(item?.hour) === hour) || {};

    return {
      hour,
      time: formatHourToAMPM(hour),
      walkins: Number(matchedItem?.walkins ?? 0),
      approved: Number(
        matchedItem?.pre_approved ??
          matchedItem?.preApproved ??
          matchedItem?.approved ??
          0,
      ),
    };
  });
}

function HoverDetailCard({ title, color, rows = [], children }) {
  const content = (
    <div className="bg-white rounded-[12px] min-w-[260px] p-[16px] border-[0.5px] border-[#EBEBEB] shadow-[0px_0px_12px_0px_#EAF2FF]">
      <div className="flex items-center gap-[8px] font-medium text-[#121212]">
        {/* <LuDoorOpen className={`text-[20px] ${color}`} /> */}
        <div>{title ?? ""}</div>
      </div>

      <div className="mt-[16px] pt-[16px] border-t border-dashed border-[#EBEBEB] space-y-[16px]">
        {rows?.map(({ label, value, valueColor }) => (
          <div key={label} className="flex justify-between text-[14px] leading-[18px]">
            <div className="text-[#64748B]">{label ?? ""}</div>
            <div
              className="font-semibold"
              style={{ color: valueColor || "#121212" }}
            >
              {value ?? 0}
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
      maxWidth="none"
    >
      {children}
    </Tippy>
  );
}

function HourlyTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[8px] bg-[#121212] px-[12px] py-[8px] text-[12px] text-white shadow-lg">
      {payload.map((item) => (
        <div key={item.dataKey} className="flex items-center gap-[8px]">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.stroke }}
          />
          <span className="min-w-[82px] text-[#D1D3D4]">{item.name}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function VisitorUpdates({ data }) {
  const finalData = data && Object.keys(data).length ? data : staticData;

  const summary = finalData?.visitor_summary
    ? {
        totalVisitorsToday:
          finalData?.visitor_summary?.total_visitors_today ?? 0,
        peakTime: finalData?.visitor_summary?.peak_time ?? "-",
      }
    : (finalData?.visitorSummary ?? {});

  const popup = finalData?.walkins_popup_data
    ? {
        walkins: {
          currently_inside: Number(
            finalData?.walkins_popup_data?.walkins_inside ?? 0,
          ),
          total_visited_today: Number(
            finalData?.walkins_popup_data?.total_walkins ?? 0,
          ),
        },
        preApproved: {
          completed_visits: Number(
            finalData?.pre_approved_popup_data?.pre_approved_check_ins ?? 0,
          ),
          total_expected_today: Number(
            finalData?.pre_approved_popup_data?.total_pre_approved_check_ins ??
              0,
          ),
        },
      }
    : (finalData?.popupData ?? {});

  const chart_data = useMemo(() => {
    const apiChart = finalData?.chart_data ?? [];
    return generateHourlyChartData(
      apiChart.length ? apiChart : staticData.chart_data,
    );
  }, [finalData]);

  const { yAxisTicks, yAxisMax } = useMemo(() => {
    const maxValue = Math.max(
      ...chart_data.map((item) => Math.max(item.walkins, item.approved)),
    );
    const max = maxValue > 0 ? maxValue : 5;

    return {
      yAxisTicks: [0, Math.ceil(max / 2), max],
      yAxisMax: max,
    };
  }, [chart_data]);

  const currentTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card
      className="h-[377px]"
      title="Visitor Updates"
      period={`Today at ${currentTime}`}
      icon={<LuDoorOpen className="!text-[24px] text-[#8B5CF6]" />}
    >
      <div className="flex flex-col gap-[24px]">
        {/* SUMMARY */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <div className="flex flex-col gap-[8px]!">
            <div className="text-[10px] text-[#64748B]">Total Visitors</div>
            <div className="text-[20px] font-medium text-[#08B6D4]">
              {summary?.totalVisitorsToday ?? 0}
            </div>
          </div>

          <div className="flex flex-col gap-[8px]!">
            <div className="text-[10px] text-[#64748B]">Peak Time</div>
            <div className="text-[20px] font-medium text-[#8B5CF6]">
              {summary?.peakTime ?? "-"}
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-[8px]!">
            <div className="text-[10px] text-[#64748B]">Active Walk-ins</div>

            <div className="flex items-baseline text-xl font-medium leading-[32px]">
              <div className="text-[28px] text-[#1FA05B] leading-[32px]">
                {popup?.walkins?.currently_inside ?? 0}
              </div>

              <HoverDetailCard
                title="Active Walk-ins"
                color="text-[#1FA05B]"
                rows={[
                  {
                    label: "Currently Inside",
                    value: popup?.walkins?.currently_inside ?? 0,
                    valueColor: "#1FA05B",
                  },
                  {
                    label: "Total Visited Today",
                    value: popup?.walkins?.total_visited_today ?? 0,
                  },
                ]}
              >
                <div className="text-[#64748B] cursor-pointer text-[20px] leading-[32px]">
                  /{popup?.walkins?.total_visited_today ?? 0}
                </div>
              </HoverDetailCard>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-[8px]!">
            <div className="text-[10px] text-[#64748B]">
              Pre-approved Check-ins
            </div>

            <div className="flex items-baseline text-xl font-medium leading-[32px]">
              <div className="text-[28px] text-[#E7A015] leading-[32px]">
                {popup?.preApproved?.completed_visits ?? 0}
              </div>

              <HoverDetailCard
                title="Pre-approved Check-ins"
                color="text-[#E7A015]"
                rows={[
                  {
                    label: "Completed Visits",
                    value: popup?.preApproved?.completed_visits ?? 0,
                    valueColor: "#E7A015",
                  },
                  {
                    label: "Total Expected Check-ins Today",
                    value: popup?.preApproved?.total_expected_today ?? 0,
                  },
                ]}
              >
                <div className="text-[#64748B] cursor-pointer text-[20px] leading-[32px]">
                  /{popup?.preApproved?.total_expected_today ?? 0}
                </div>
              </HoverDetailCard>
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="w-full h-[149px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chart_data ?? []}
              margin={{ top: 5, right: 0, left: -18, bottom: -10 }}
            >
              <CartesianGrid
                stroke="#E5E7EB"
                strokeDasharray="4 4"
                vertical={false}
              />
              <XAxis
                dataKey="time"
                tickFormatter={(value, index) => (index % 4 === 0 ? value : "")}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#121212", fontSize: 10, fontWeight: 400 }}
              />
              <YAxis
                width={24}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
                ticks={yAxisTicks}
                domain={[0, yAxisMax]}
                tick={{ fill: "#64748B", fontSize: 10, fontWeight: 400 }}
              />
              <RTooltip content={<HourlyTooltip />} />
              <Line
                type="monotone"
                dataKey="walkins"
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
                name="Walk-ins"
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="approved"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Pre-approved"
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default VisitorUpdates;
