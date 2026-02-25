import React from "react";
import Card from "../../components/CardNoLogo";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Table Tennis", value: 24 },
  { name: "Games Room", value: 14 },
  { name: "Badminton", value: 10 },
  { name: "GYM", value: 4 },
  { name: "Snooker", value: 1 },
];

const COLORS = ["#3C81F6", "#60A5FA", "#95BFFA", "#BEDAFE", "#DAE6FC"];

function AmenityWiseRevenue() {
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
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={0}
                stroke="#fff"
                strokeWidth={1}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [`₹ ${value}L`, "Revenue"]}
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
              {data.map((item, index) => (
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

                  <div className="text-right  text-[12px] leading-[16px] text-[#64748B]">
                    ₹ {item.value}L
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
