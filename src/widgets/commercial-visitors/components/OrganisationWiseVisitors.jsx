import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import Card from "../../components/CardNoLogo";

/* Dummy fallback data */
const dummyData = [
  { name: "Google", visitors: 1000 },
  { name: "Uber", visitors: 3500 },
  { name: "ANAROCK", visitors: 2000 },
  { name: "Flipkart", visitors: 8000 },
  { name: "HP", visitors: 1650 },
];

const OrganisationWiseVisitorsCard = ({ data }) => {

  const isEmptyArray = Array.isArray(data) && data?.length === 0;

  const chartData =
    data === undefined || data === null
      ? dummyData
      : Array.isArray(data)
      ? data
      : [];

  let maxVisitors = 0;

  for (let i = 0; i < (chartData?.length || 0); i++) {
    const currentVisitors = Number(chartData?.[i]?.visitors) || 0;

    if (currentVisitors > maxVisitors) {
      maxVisitors = currentVisitors;
    }
  }

  return (
    <Card
      title="Organisation Wise Visitors"
      titleWeight="semi-bold"
      className="h-[360px]"
      childrenClassName="mt-6"
    >
      <div className="w-full h-[260px] flex items-center justify-center">

        {isEmptyArray ? (
          <p className="text-sm text-gray-500">No Data Found</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData || []}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              barCategoryGap={35}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F1F5F9"
              />

              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#64748B" }}
                axisLine={true}
                tickLine={false}
              />

              <YAxis
                width={40}
                tick={{ fontSize: 12, fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  value === 0 ? "0" : `${(value || 0) / 1000}K`
                }
              />

              <Tooltip cursor={false} />

              <Bar dataKey="visitors" maxBarSize={55}>
                {chartData?.map?.((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      (entry?.visitors || 0) === maxVisitors
                        ? "#3B82F6"
                        : "#7FB0FF"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

      </div>
    </Card>
  );
};

export default OrganisationWiseVisitorsCard;