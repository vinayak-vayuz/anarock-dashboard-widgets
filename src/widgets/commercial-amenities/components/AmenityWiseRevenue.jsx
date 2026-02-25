import React from "react";
import Card from "../../components/CardNoLogo";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const dummyData = [
  { facility_name: "Table Tennis", paid_revenue: "24000.00" },
  { facility_name: "Games Room", paid_revenue: "14000.00" },
  { facility_name: "Badminton", paid_revenue: "10000.00" },
  { facility_name: "GYM", paid_revenue: "4000.00" },
];

const COLORS = ["#3C81F6", "#60A5FA", "#95BFFA", "#BEDAFE", "#DAE6FC"];

function AmenityWiseRevenue({ data }) {

  const rawData =
    data && Array.isArray(data) && data.length > 0
      ? data
      : dummyData;

  const chartData = rawData
    .map((item) => ({
      name: item.facility_name,
      value: Number(item.paid_revenue) || 0,
    }))
    .filter((item) => item.value > 0);

  const formatCurrency = (value) =>
    `₹ ${value.toLocaleString("en-IN")}`;

  return (
    <Card
      title="Amenity Wise Revenue"
      titleWeight="semi-bold"
      className="h-[362px]"
      
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-5 h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                stroke="#fff"
                strokeWidth={1}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

             <Tooltip
  formatter={(value) => formatCurrency(value)}
  labelFormatter={(label) => `Amenity: ${label}`}
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
              {chartData.map((item, index) => (
                <div
                  key={item.name}
                  className="grid grid-cols-2 px-4 py-4 text-[14px] text-[#121212]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-[16px] h-[7px]"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    />
                    <span className="text-[#64748B] text-[12px] leading-[16px]">
                      {item.name}
                    </span>
                  </div>

                  <div className="text-right text-[12px] leading-[16px] text-[#64748B]">
                    {formatCurrency(item.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AmenityWiseRevenue;