import React from "react";
import Card from "../../components/CardNoLogo";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import EmptyState from "../../utils/EmptyState";

const dummyData = [
  { facility_name: "Table Tennis", paid_revenue: "24000.00" },
  { facility_name: "Games Room", paid_revenue: "14000.00" },
  { facility_name: "Badminton", paid_revenue: "10000.00" },
  { facility_name: "GYM", paid_revenue: "4000.00" },
];

const COLORS = ["#3C81F6", "#60A5FA", "#95BFFA", "#BEDAFE", "#DAE6FC"];

function AmenityWiseRevenue({ data }) {

  const isEmptyArray = Array?.isArray(data) && data?.length === 0;

  const rawData =
    data === undefined || data === null
      ? dummyData
      : data;

  const chartData =
    Array?.isArray(rawData) && rawData?.length > 0
      ? rawData?.map((item) => ({
          name: item?.facility_name || "Unknown",
          value: Number(item?.paid_revenue) || 0,
        }))
      : [];

  const allZero =
    chartData?.length > 0
      ? chartData?.every((item) => item?.value === 0)
      : false;

  const pieData =
    allZero
      ? chartData?.map((item, index) => ({
          ...item,
          value: index === 0 ? 1 : 0,
        }))
      : chartData;

  const formatCurrency = (value) =>
    `Rs ${value?.toLocaleString?.("en-IN") || 0}`;

  return (
    <Card
      title="Amenity Wise Revenue"
      titleWeight="semi-bold"
      className="h-[362px]"
    >
      <div className="grid grid-cols-12 gap-6 items-center h-full">

        {isEmptyArray ? (
<div className="col-span-12 flex items-center justify-center h-[240px]">
     <EmptyState
    title="No Amenity Found"
    description="Catch up all the data. Change the date range to see the data."
  />
          </div>
        ) : (
          <>
            <div className="col-span-5 h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData || []}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={95}
                    stroke="#fff"
                    strokeWidth={1}
                  >
                    {pieData?.map?.((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS?.[index % COLORS?.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip
                    formatter={(value) => formatCurrency(value)}
                    labelFormatter={(label) => `Amenity: ${label || ""}`}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #EBEBEB",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="col-span-7">
              <div className="rounded-[12px] overflow-hidden">
                <div className="grid grid-cols-2 px-[12px] py-[8px] bg-[#EBEBEB] text-[12px] leading-[16px] font-semibold text-[#64748B]">
                  <div>Amenity</div>
                  <div className="text-right">Revenue</div>
                </div>

                <div className="divide-y divide-[#F1F5F9]">
                  {chartData?.map?.((item, index) => (
                    <div
                      key={item?.name || index}
                      className="grid grid-cols-2 px-4 py-4 text-[14px] text-[#121212]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-[16px] h-[7px]"
                          style={{
                            backgroundColor:
                              COLORS?.[index % COLORS?.length],
                          }}
                        />
                        <span className="text-[#64748B] text-[12px] leading-[16px]">
                          {item?.name || "Unknown"}
                        </span>
                      </div>

                      <div className="text-right text-[12px] leading-[16px] text-[#64748B]">
                        {formatCurrency(item?.value || 0)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </Card>
  );
}

export default AmenityWiseRevenue;