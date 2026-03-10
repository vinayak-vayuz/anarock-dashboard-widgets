import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Card from "../../components/CardNoLogo";
import EmptyState from "../../utils/EmptyState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WeeklyVisitorCard = ({ data = [], onDateChange }) => {
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const getStartDate = (date) => {
    const d = new Date(date);
    d.setDate(d.getDate() - 6);
    return d;
  };

  const startDate = getStartDate(endDate);

  const formatDate = (date) => {
    try {
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
    } catch {
      return "";
    }
  };

  const triggerDateChange = (newEndDate) => {
    const end = new Date(newEndDate);
    const start = new Date(end);
    start.setDate(start.getDate() - 6);

    if (onDateChange) {
      onDateChange(start.toISOString(), end.toISOString());
    }
  };

  const handlePrev = () => {
    const newDate = new Date(endDate);
    newDate.setDate(newDate.getDate() - 7);

    setEndDate(newDate);
    triggerDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(endDate);
    newDate.setDate(newDate.getDate() + 7);

    setEndDate(newDate);
    triggerDateChange(newDate);
  };

  const handleCalendarClick = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleCalendarChange = (date) => {
    const selectedDate = date || new Date();

    setEndDate(selectedDate);
    triggerDateChange(selectedDate);
    setShowCalendar(false);
  };

  const chartData = Array.isArray(data) ? data : [];

  const isEmpty =
  !chartData.length ||
  chartData.every((item) => item.no_of_visitors === 0);
  return (
    <Card
      title="Weekly Visitor Pattern"
      period={`${formatDate(startDate)} - ${formatDate(endDate)}`}
      isDateSelector={true}
      titleWeight="semi-bold"
      className="h-[360px]"
      childrenClassName="mt-6"
      onPrevClick={handlePrev}
      onNextClick={handleNext}
      onCalendarClick={handleCalendarClick}
    >
      {showCalendar && (
        <div className="absolute top-[70px] right-[24px] z-50 bg-white shadow-lg rounded-lg">
          <DatePicker
            selected={endDate}
            onChange={handleCalendarChange}
            inline
          />
        </div>
      )}

{isEmpty ? (
  <EmptyState
    title="No Visitors Found"
    description="Catch up all the data. Change the date range to see the data."
  />
) : (
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />

            <XAxis
              dataKey="day"
              type="category"
              scale="point"
              padding={{ left: 20, right: 20 }}
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine
              tickLine={false}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              }
            />

            <YAxis
  width={35}
  tick={{ fontSize: 12, fill: "#64748B" }}
  axisLine={false}
  tickLine={false}
  allowDecimals={false}
  domain={[0, "dataMax + 2"]}
/>

            <Tooltip
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              }
            />

            <Area
              type="monotone"
              dataKey="no_of_visitors"
              stroke="#6366F1"
              strokeWidth={2}
              fill="url(#colorVisitors)"
              dot={{
                r: 5,
                stroke: "#6366F1",
                strokeWidth: 2,
                fill: "#fff",
              }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
)}
    </Card>
  );
};

export default WeeklyVisitorCard;