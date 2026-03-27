import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Card from "../../components/CardNoLogo";
import EmptyState from "../../utils/EmptyState";
import { CommercialCustomTooltip } from "../../utils";
import FixTooltip from "../../utils/Tooltip";
/* Dummy fallback data */
const dummyData = [
  { building_name: "Google", no_of_visitors: 1000 },
  { building_name: "Uber", no_of_visitors: 3500 },
  { building_name: "ANAROCK", no_of_visitors: 2000 },
  { building_name: "Flipkart", no_of_visitors: 8000 },
  { building_name: "HP", no_of_visitors: 1650 },
];

const OrganisationWiseVisitorsCard = ({ data ,title,bar}) => {
  const isEmptyArray = Array.isArray(data) && data?.length === 0;

  const chartData =
    data === undefined || data === null
      ? dummyData
      : Array.isArray(data)
        ? data
        : [];

  return (
    <Card
      title={title || "Organisation Wise Visitors"}
      titleWeight="semi-bold"
      className="h-[360px]"
      childrenClassName="mt-6"
    >
      <div className="w-full h-[260px] flex items-center justify-center">
        {isEmptyArray ? (
          <EmptyState
            title={title || "Organisation Wise Visitors"}
            description="Catch up all the data. Change the date range to see the data."
          />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData || []}
              margin={{ top: 10, right: 10, left: 10, bottom: -10 }}
              barCategoryGap={35}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F1F5F9"
              />

              <XAxis
                dataKey="building_name"
                tick={{ fontSize: 12, fill: "#64748B" }}
                axisLine={true}
                tickLine={false}
              />

              <YAxis
                width={40}
                tick={{ fontSize: 12, fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />

              <Tooltip
  cursor={false}
  content={(props) => {
    if (!props.active) return null;

    return (
      <FixTooltip {...props} data={chartData}>
        <CommercialCustomTooltip {...props} />
      </FixTooltip>
    );
  }}
/>

              {/* Fixed bar color */}
              <Bar
                dataKey="no_of_visitors"
                name="Visitors"
                maxBarSize={55}
                fill={bar || "#3C81F6"}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
};

export default OrganisationWiseVisitorsCard;